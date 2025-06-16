'use client'

import { useEffect, useRef } from "react";

const Carousel = ({children, speed}) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const scrollWidth = carousel.scrollWidth / 3;
        let animationId;
        let currentTranslate = 0;
        
        const animateScrolling = () => {
            currentTranslate += speed / 60;

            if(currentTranslate >= scrollWidth) {
                console.log('Reset! currentTranslate:', currentTranslate, 'scrollWidth:', scrollWidth);
                currentTranslate = 0;
            }

            carousel.style.transform = `translateX(-${currentTranslate}px)`;
            requestAnimationFrame(animateScrolling);
        }

        animationId = requestAnimationFrame(animateScrolling);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        }
    }, [speed]
);

    const duplicatedChildren = [...children, ...children];
    return(
        <div className="overflow-hidden">
            <div className="flex flex-row" ref={carouselRef}>
                {duplicatedChildren.map((child, index) => (
                    <div key={index} className="flex-shrink-0" style={{ 
            marginRight: index === duplicatedChildren.length - 1 ? '0px' : '40px'}}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;