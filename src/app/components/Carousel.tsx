'use client'

import { useEffect, useRef, useState } from "react";

const Carousel = ({children, speed}) => {
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef(null);
    const currentTranslateRef = useRef(0);
    const animationRef = useRef(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        isPausedRef.current = isPaused;
    }, [isPaused]);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const scrollWidth = carousel.scrollWidth / 2;
        
        const animateScrolling = () => {
            console.log("Is it paused: ", isPaused);
            if(!isPausedRef.current) {
                currentTranslateRef.current += speed / 60;         
                
                if(currentTranslateRef.current >= scrollWidth) {
                    currentTranslateRef.current = 0;
                }

                carousel.style.transform = `translateX(-${currentTranslateRef.current}px)`;
            }
            
            requestAnimationFrame(animateScrolling);

        }

        animationRef.current = requestAnimationFrame(animateScrolling);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        }
    }, [speed]);

    const duplicatedChildren = [...children, ...children];

    return(
        <div className="overflow-hidden w-5/6">
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