import { Portal } from "./PerlinPortals";

const MobileCarouselWrapper = ({children}) => {
    return(
        <div>
            <div className="flex justify-center my-10">
                <div className="relative z-0 w-full max-w-md">
                    <div className="absolute -left-[120px] -top-[64px]">
                        <Portal type="orange" width={240} height={660}/>
                    </div>
                    <div className="absolute -left-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-yellow-300 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse -z-20"></div>
                    <div className="absolute -left-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-orange-400 from-60% to bg-transparent to-70% rounded-[50%] -z-20"></div>
                    <div className="absolute -right-[120px] -top-[64px]">
                        <Portal type="blue" width={240} height={660}/>
                    </div>
                    <div className="absolute -right-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-cyan-400 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse -z-20"></div>
                    <div className="absolute -right-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-sky-600 from-60% to bg-transparent to-70% rounded-[50%] -z-20"></div>
                    <div className="relative z-10">
                        {children}                  
                    </div>                  
                </div>
            </div>
        </div>
    );
}

export default MobileCarouselWrapper;