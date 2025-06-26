import { useState, useRef } from "react";

const MobileCarousel = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(0);

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    }

    const handleTouchEnd = (e) => {
        const diffX = startX.current - e.changedTouches[0].clientX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                if (currentIndex < children.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                } else {
                    setCurrentIndex(0);
                }
            } else if (diffX < 0) {
                if (currentIndex == 0) {
                    setCurrentIndex(children.length - 1);
                } else {
                    setCurrentIndex(currentIndex - 1);
                }
            }
        }
    }
    
    return(
        <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)`}} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                {children.map((child, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MobileCarousel;