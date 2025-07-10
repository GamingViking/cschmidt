'use client'

import { useEffect, useRef, useState } from "react";
import { animationManager } from "../AnimationManager";

const Carousel = ({children, speed}) => {
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef(null);
    const currentTranslateRef = useRef(0);
    const isPausedRef = useRef(false);

    useEffect(() => {
        isPausedRef.current = isPaused;
    }, [isPaused]);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const scrollWidth = carousel.scrollWidth / 2;
        
             const carouselElement = {
            update: (deltaTime: number) => {
                if (!isPausedRef.current) {
                    // Convert your speed to be frame-rate independent
                    // deltaTime is in milliseconds, normalize to 60fps (16.67ms per frame)
                    currentTranslateRef.current += (speed / 60) * (deltaTime / 16.67);
                    
                    if (currentTranslateRef.current >= scrollWidth) {
                        currentTranslateRef.current = 0;
                    }

                    carousel.style.transform = `translateX(-${currentTranslateRef.current}px)`;
                }
            }
        };

        // Register with animation manager instead of requestAnimationFrame
        animationManager.addElement(carouselElement);

        return () => {
            // Remove from animation manager instead of cancelAnimationFrame
            animationManager.removeElement(carouselElement);
        };
    }, [speed]);

    const duplicatedChildren = [...children, ...children];

    return(
        <div className="overflow-hidden">
            <div className="flex flex-row pl-10 gap-10" ref={carouselRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                {duplicatedChildren.map((child, index) => (
                    <div key={index} className="flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;