import { Portal } from "./PerlinPortals";

const MobileCarouselWrapper = ({children}) => {
    return(
        <div>
            <div className="flex justify-center my-10">
                <div className="relative z-0 w-full max-w-md">
                    <div className="absolute -left-[120px] -top-[64px]">
                        <Portal type="orange" width={240} height={660}/>
                        <div 
                            className="absolute left-1/2 top-[60px] w-4 h-[532px] -translate-x-1/2 z-10 rounded-full"
                            style={{
                            background: 'rgba(234, 88, 12, 0.15)', // Very low opacity
                            boxShadow: 'inset 0 0 20px rgba(234, 88, 12, 0.3)',
                            animation: 'pulse 3s ease-in-out infinite'
                            }}
                        />
                    </div>
                    <div className="absolute -left-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-yellow-300 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse -z-20"></div>
                    <div className="absolute -left-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-orange-400 from-60% to bg-transparent to-70% rounded-[50%] -z-20"></div>
                    {/* <div className="absolute -left-2 -top-[6px] h-[532px] bottom-0 w-4 bg-orange-400/40 shadow-lg shadow-orange-400/40 z-10 rounded-full">
                        <Portal type="orange" width={4} height={532} />
                    </div> */}
                    <div className="absolute -right-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-cyan-400 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse -z-20"></div>
                    <div className="absolute -right-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-sky-600 from-60% to bg-transparent to-70% rounded-[50%] -z-20"></div>
                    <div className="absolute -right-2 -top-[6px] h-[532px] bottom-0 w-4 bg-sky-600/40 shadow-lg shadow-sky-600/40 z-10 rounded-full"></div> 
                    <div className="relative z-10">
                        {children}                  
                    </div>                  
                </div>
            </div>
        </div>
    );
}

export default MobileCarouselWrapper;