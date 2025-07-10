import React, { useEffect, useRef } from 'react';

// TypeScript interface for Perlin noise
interface PerlinNoiseInterface {
  p: number[];
  fade(t: number): number;
  lerp(t: number, a: number, b: number): number;
  grad(hash: number, x: number, y: number, z: number): number;
  noise(x: number, y: number, z: number): number;
}

// Simple Perlin noise implementation with proper TypeScript
class PerlinNoise implements PerlinNoiseInterface {
  p: number[] = [];

  constructor() {
    for (let i = 0; i < 256; i++) {
      this.p[i] = Math.floor(Math.random() * 256);
    }
    for (let i = 0; i < 256; i++) {
      this.p[256 + i] = this.p[i];
    }
  }
  
  fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  
  lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }
  
  grad(hash: number, x: number, y: number, z: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }
  
  noise(x: number, y: number, z: number): number {
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

interface PortalProps {
  type: 'blue' | 'orange';
  size?: number;
  width?: number;
  height?: number;
}

export const Portal: React.FC<PortalProps> = ({ type, size = 300, width, height }) => {
  // Use custom dimensions if provided, otherwise use size for both
  const portalWidth = width || size;
  const portalHeight = height || size;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);
  const perlinRef = useRef<PerlinNoise>(new PerlinNoise());
  
  // Current settings from the example
  const settings = {
    animationSpeed: 0.015,
    noiseScale: 0.015,
    blendMode: 'multiply' as const,
    opacity: 0.8,
    layers: 2
  };
  
  const generateNoise = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number): void => {
    // Clear the canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        const index = (y * canvas.width + x) * 4;
        
        // Calculate distance from center for oval mask
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radiusX = canvas.width / 2;
        const radiusY = canvas.height / 2;
        
        // Calculate normalized distance for oval (ellipse equation)
        const normalizedDistance = Math.sqrt(
          Math.pow((x - centerX) / radiusX, 2) + 
          Math.pow((y - centerY) / radiusY, 2)
        );
        
        // Create soft fade to transparent
        let alpha = 1;
        if (normalizedDistance > 0.8) {
          // Start fading at 80% of the radius
          alpha = Math.max(0, (1 - normalizedDistance) / 0.2);
        } else if (normalizedDistance > 1) {
          // Completely transparent outside the ellipse
          alpha = 0;
        }
        
        if (alpha <= 0) {
          // Outside oval or fully transparent, make transparent
          data[index] = 0;
          data[index + 1] = 0;
          data[index + 2] = 0;
          data[index + 3] = 0;
          continue;
        }
        
        // Generate base gradient colors
        let baseR, baseG, baseB;
        if (type === 'blue') {
          // Blue portal gradient
          const gradientFactor = 1 - normalizedDistance;
            baseR = Math.floor(34 + (gradientFactor * -32));   // 34 (cyan-400) to 2 (sky-600)
            baseG = Math.floor(211 + (gradientFactor * -79));  // 211 (cyan-400) to 132 (sky-600)
            baseB = Math.floor(238 + (gradientFactor * -39));  // 238 (cyan-400) to 199 (sky-600)
        } else {
          // Orange portal gradient
          const gradientFactor = 1 - normalizedDistance;
            baseR = Math.floor(253 + (gradientFactor * -2));   // 253 (yellow-300) to 251 (orange-400)
            baseG = Math.floor(224 + (gradientFactor * -78));  // 224 (yellow-300) to 146 (orange-400)
            baseB = Math.floor(71 + (gradientFactor * -11));   // 71 (yellow-300) to 60 (orange-400)
        }
        
        let noiseValue = 0;
        let amplitude = 1;
        let frequency = 1;
        
        // Multiple octaves for more complex noise
        for (let i = 0; i < settings.layers; i++) {
          noiseValue += perlinRef.current.noise(
            x * settings.noiseScale * frequency, 
            y * settings.noiseScale * frequency, 
            time * frequency
          ) * amplitude;
          amplitude *= 0.5;
          frequency *= 2;
        }
        
        // Normalize to 0-1 range
        noiseValue = (noiseValue + 1) / 2;     

        // Apply noise to darken the base colors (multiply effect)
        const noiseFactor = 0.3 + (noiseValue * 0.7); // Keep some base color
        
        data[index] = Math.floor(baseR * noiseFactor);     // Red
        data[index + 1] = Math.floor(baseG * noiseFactor); // Green
        data[index + 2] = Math.floor(baseB * noiseFactor); // Blue
        data[index + 3] = Math.floor(255 * alpha);         // Alpha with fade
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
  };
  
  let frameCount = 0;
  const animate = (): void => {
    frameCount++;
    if (frameCount % 2 === 0) {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        // Set canvas size to match portal dimensions
        canvas.width = portalWidth;
        canvas.height = portalHeight;
        
        timeRef.current += settings.animationSpeed;
        
        // Slightly different time offset for variety
        const timeOffset = type === 'orange' ? timeRef.current * 0.8 : timeRef.current;
        generateNoise(ctx, canvas, timeOffset);
    }
    animationRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      width={portalWidth}
      height={portalHeight}
      className="drop-shadow-2xl"
      style={{ 
        width: `${portalWidth}px`,
        height: `${portalHeight}px`,
        display: 'block'
      }}
    />
  );
};