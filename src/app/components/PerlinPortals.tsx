import React, { useEffect, useRef } from 'react';
import { animationManager } from '../AnimationManager';

interface PortalProps {
  type: 'blue' | 'orange';
  size?: number;
  width?: number;
  height?: number;
  clipPath?: string;
  syncTimeRef?: React.RefObject<number>;
}

export const Portal: React.FC<PortalProps> = ({ type, size = 300, width, height, clipPath }) => {
  const portalWidth = width || size;
  const portalHeight = height || size;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const timeRef = useRef<number>(0);
  const pendingFrameRef = useRef<boolean>(false);
  const lastFrameTimeRef = useRef<number>(0);
  
  // Keep your render size optimization - but ensure integers
  const renderWidth = Math.floor(portalWidth / 2);
  const renderHeight = Math.floor(portalHeight / 2);

  const settings = {
    animationSpeed: 0.02,
    noiseScale: 0.025,
    layers: 2
  };
  
  // Create the worker script as an inline string
  const createWorkerScript = () => {
    const workerScript = `
      // Perlin noise implementation for the worker
      class PerlinNoise {
        constructor() {
          this.p = [];
          for (let i = 0; i < 256; i++) {
            this.p[i] = Math.floor(Math.random() * 256);
          }
          for (let i = 0; i < 256; i++) {
            this.p[256 + i] = this.p[i];
          }
        }
        
        fade(t) {
          return t * t * t * (t * (t * 6 - 15) + 10);
        }
        
        lerp(t, a, b) {
          return a + t * (b - a);
        }
        
        grad(hash, x, y, z) {
          const h = hash & 15;
          const u = h < 8 ? x : y;
          const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
          return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
        }
        
        noise(x, y, z) {
          const X = Math.floor(x) & 255;
          const Y = Math.floor(y) & 255;
          const Z = Math.floor(z) & 255;
          
          x -= Math.floor(x);
          y -= Math.floor(y);
          z -= Math.floor(z);
          
          const u = this.fade(x);
          const v = this.fade(y);
          const w = this.fade(z);
          
          const A = this.p[X] + Y;
          const AA = this.p[A] + Z;
          const AB = this.p[A + 1] + Z;
          const B = this.p[X + 1] + Y;
          const BA = this.p[B] + Z;
          const BB = this.p[B + 1] + Z;
          
          return this.lerp(w, 
            this.lerp(v, 
              this.lerp(u, this.grad(this.p[AA], x, y, z), this.grad(this.p[BA], x - 1, y, z)),
              this.lerp(u, this.grad(this.p[AB], x, y - 1, z), this.grad(this.p[BB], x - 1, y - 1, z))
            ),
            this.lerp(v, 
              this.lerp(u, this.grad(this.p[AA + 1], x, y, z - 1), this.grad(this.p[BA + 1], x - 1, y, z - 1)),
              this.lerp(u, this.grad(this.p[AB + 1], x, y - 1, z - 1), this.grad(this.p[BB + 1], x - 1, y - 1, z - 1))
            )
          );
        }
      }
      
      const perlin = new PerlinNoise();
      
      // Listen for messages from the main thread
      self.onmessage = function(e) {
        const { width, height, time, type, settings } = e.data;
        
        // Create ImageData array - ensure exact size
        const dataLength = width * height * 4;
        const imageData = new Uint8ClampedArray(dataLength);
        
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            const index = (y * width + x) * 4;
            
            // Calculate distance from center for oval mask
            const centerX = width / 2;
            const centerY = height / 2;
            const radiusX = width / 2;
            const radiusY = height / 2;
            
            // Calculate normalized distance for oval (ellipse equation)
            const normalizedDistance = Math.sqrt(
              Math.pow((x - centerX) / radiusX, 2) + 
              Math.pow((y - centerY) / radiusY, 2)
            );
            
            // Create soft fade to transparent
            let alpha = 1;
            if (normalizedDistance > 0.8) {
              alpha = Math.max(0, (1 - normalizedDistance) / 0.2);
            } else if (normalizedDistance > 1) {
              alpha = 0;
            }
            
            if (alpha <= 0) {
              imageData[index] = 0;
              imageData[index + 1] = 0;
              imageData[index + 2] = 0;
              imageData[index + 3] = 0;
              continue;
            }
            
            // Generate base gradient colors
            let baseR, baseG, baseB;
            if (type === 'blue') {
              const gradientFactor = 1 - normalizedDistance;
              baseR = Math.floor(34 + (gradientFactor * -32));   // cyan-400 to sky-600
              baseG = Math.floor(211 + (gradientFactor * -79));
              baseB = Math.floor(238 + (gradientFactor * -39));
            } else {
              const gradientFactor = 1 - normalizedDistance;
              baseR = Math.floor(253 + (gradientFactor * -2));   // yellow-300 to orange-400
              baseG = Math.floor(224 + (gradientFactor * -78));
              baseB = Math.floor(71 + (gradientFactor * -11));
            }
            
            let noiseValue = 0;
            let amplitude = 1;
            let frequency = 1;
            
            // Multiple octaves for more complex noise
            for (let i = 0; i < settings.layers; i++) {
              noiseValue += perlin.noise(
                x * settings.noiseScale * frequency, 
                y * settings.noiseScale * frequency, 
                time * frequency
              ) * amplitude;
              amplitude *= 0.5;
              frequency *= 2;
            }
            
            // Normalize to 0-1 range
            noiseValue = (noiseValue + 1) / 2;     

            // Apply noise to darken the base colors
            const noiseFactor = 0.3 + (noiseValue * 0.7);
            
            imageData[index] = Math.floor(baseR * noiseFactor);
            imageData[index + 1] = Math.floor(baseG * noiseFactor);
            imageData[index + 2] = Math.floor(baseB * noiseFactor);
            imageData[index + 3] = Math.floor(255 * alpha);
          }
        }
        
        // Send the completed image data back to main thread
        self.postMessage({ 
          imageData: imageData, 
          width: width, 
          height: height
        }, [imageData.buffer]);
      };
    `;
    
    const blob = new Blob([workerScript], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
  };
  
  // Initialize worker
  useEffect(() => {
    const workerUrl = createWorkerScript();
    workerRef.current = new Worker(workerUrl);
    
    // Handle messages from worker
    workerRef.current.onmessage = (e) => {
      const { imageData, width, height } = e.data;
      const canvas = canvasRef.current;
      
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          try {
            // Convert the array back to ImageData and draw it
            const imgData = new ImageData(imageData, width, height);
            ctx.putImageData(imgData, 0, 0);
            
            // Update the last frame time
            lastFrameTimeRef.current = performance.now();
          } catch (error) {
            console.error('Error creating ImageData:', error);
          }
        }
      }
      
      pendingFrameRef.current = false; // Ready for next frame
    };
    
    workerRef.current.onerror = (error) => {
      console.error('Worker error:', error);
      pendingFrameRef.current = false;
    };
    
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
      URL.revokeObjectURL(workerUrl); // Clean up the blob URL
    };
  }, []);
  
  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions once
    canvas.width = renderWidth;
    canvas.height = renderHeight;
    
    // Initialize the last frame time
    lastFrameTimeRef.current = performance.now();
    
    const portalElement = {
      update: (_deltaTime: number) => {
        const now = performance.now();
        
        // Only update if enough time has passed since last frame (30fps = ~33ms)
        if (now - lastFrameTimeRef.current < 33) {
          return;
        }
        
        // Only send new work if we're not waiting for a frame
        if (!pendingFrameRef.current && workerRef.current) {
          timeRef.current += settings.animationSpeed;
          const timeOffset = type === 'orange' ? timeRef.current * 0.8 : timeRef.current;
          
          // Send work to the worker thread
          pendingFrameRef.current = true;
          workerRef.current.postMessage({
            width: renderWidth,
            height: renderHeight,
            time: timeOffset,
            type: type,
            settings: settings
          });
        }
      }
    };
    
    animationManager.addElement(portalElement);
    
    return () => {
      animationManager.removeElement(portalElement);
    };
  }, [portalWidth, portalHeight, renderWidth, renderHeight, type]);

  useEffect(() => {
  console.log('Portal mounted with clipPath:', clipPath);
}, [clipPath]);

  return (
    <canvas
      ref={canvasRef}
      width={renderWidth}
      height={renderHeight}
      style={{ 
        width: `${portalWidth}px`,
        height: `${portalHeight}px`,
        imageRendering: 'pixelated',
        clipPath: clipPath || 'none'
      }}
    />
  );
};