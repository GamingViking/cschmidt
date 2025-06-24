const CarouselWrapper = ({children}) => {
    return(
        <div>
            <div className="flex justify-center my-10">
                <div className="relative w-5/6">
                    <div className="absolute -left-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-yellow-300 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse"></div>
                    <div className="absolute -left-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-orange-400 from-60% to bg-transparent to-70% rounded-[50%]"></div>
                    <div className="absolute -left-2 -top-[6px] h-[532px] bottom-0 w-4 bg-orange-400/40 shadow-lg shadow-orange-400/40 z-10 rounded-full"></div>
                    <div className="absolute -right-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-cyan-400 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse"></div>
                    <div className="absolute -right-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-sky-600 from-60% to bg-transparent to-70% rounded-[50%]"></div>
                    <div className="absolute -right-2 -top-[6px] h-[532px] bottom-0 w-4 bg-sky-600/40 shadow-lg shadow-sky-600/40 z-10 rounded-full"></div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CarouselWrapper;