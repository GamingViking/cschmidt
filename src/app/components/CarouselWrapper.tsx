import { Portal } from "./PerlinPortals";

const CarouselWrapper = ({children}) => {
    return(
        <div>
            <div className="flex justify-center my-10">
                <div className="relative w-5/6">
                    <div className="absolute -left-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-yellow-300 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse"></div>
                    <div className="absolute -left-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-orange-400 from-60% to bg-transparent to-70% rounded-[50%]"></div>
                    <div className="absolute -left-[120px] -top-[64px]">
                        <Portal type="orange" width={240} height={660}/>
                        <div className="absolute left-[96px] top-[30px] rounded-full z-10 opacity-40">
                            <Portal type="orange" width={48} height={600}/>
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