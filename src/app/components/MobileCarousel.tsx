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

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }
    
    return(
        <div className="relative flex items-center">
            <div className="w-full overflow-hidden">
                <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)`}} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    {children.map((child, index) => (
                        <div key={index} className="flex-shrink-0 flex justify-center items-center min-w-full">
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 flex gap-10">
                {children.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentIndex === index
                                ? "bg-pink-500 scale-150 border-solid border-2 border-pink-300"
                                : "bg-gray-300 hover:bg-gray-500"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default MobileCarousel;