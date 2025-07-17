import { Portal } from "./PerlinPortals";
import { useEffect, useState } from 'react';

const CarouselWrapper = ({children}) => {
    const createAnimatedWavyClipPath = (type: 'blue' | 'orange', animationTime: number): string => {
        const points: string[] = [];
        const numPoints = 30; // Enough for smooth animation
        
        if (type === 'orange') {
            // Straight left edge
            for (let i = 0; i <= numPoints; i++) {
            const y = (i / numPoints) * 100;
            points.push(`0% ${y}%`);
            }
            
            // Animated wavy right edge
            for (let i = numPoints; i >= 0; i--) {
            const y = (i / numPoints) * 100;
            // Multiple sine waves with different frequencies and phases
            const wave1 = Math.sin((y / 100) * Math.PI * 3 + animationTime) * 8;
            const wave2 = Math.sin((y / 100) * Math.PI * 5 + animationTime * 1.5) * 4;
            const wave3 = Math.sin((y / 100) * Math.PI * 7 + animationTime * 0.7) * 2;
            
            const waveOffset = wave1 + wave2 + wave3;
            const x = 70 + waveOffset;
            points.push(`${Math.max(50, Math.min(90, x))}% ${y}%`); // Clamp between 50-90%
            }
        }
        
    return `polygon(${points.join(', ')})`;
    };

// Usage in component:
const [animationTime, setAnimationTime] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setAnimationTime(prev => prev + 0.1);
  }, 50); // 20fps animation
  
  return () => clearInterval(interval);
}, []);

    return(
        <div>
            <div className="flex justify-center my-10">
                <div className="relative w-5/6">
                    <div className="absolute -left-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-yellow-300 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse"></div>
                    <div className="absolute -left-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-orange-400 from-60% to bg-transparent to-70% rounded-[50%]"></div>
                    <div className="absolute -left-[120px] -top-[64px]">
                        <Portal type="orange" width={240} height={660}/>
                        <div className="absolute left-24 top-[30px] rounded-full z-10 opacity-80">
                            <div className="absolute -left-24 -top-[30px]">
                                <Portal type="orange" width={240} height={660} clipPath={createAnimatedWavyClipPath('orange', animationTime)} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -right-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-cyan-400 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse"></div>
                    <div className="absolute -right-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-sky-600 from-60% to bg-transparent to-70% rounded-[50%]"></div>
                    <div className="absolute -right-[120px] -top-[64px]">
                        <Portal type="blue" width={240} height={660}/>
                        <div className="absolute right-[96px] top-[30px] rounded-full z-10 opacity-40">
                            <Portal type="blue" width={48} height={600}/>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CarouselWrapper;