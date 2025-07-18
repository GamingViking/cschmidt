import { Portal } from "./PerlinPortals";
import { useEffect, useState } from 'react';

const CarouselWrapper = ({children}) => {  

    return(
        <div>
            <div className="flex justify-center my-10">
                <div className="relative w-5/6">
                    <div className="absolute -left-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-yellow-300 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse"></div>
                    <div className="absolute -left-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-orange-400 from-60% to bg-transparent to-70% rounded-[50%]"></div>
                    <div className="absolute -left-[120px] -top-[64px]">
                        <Portal type="orange" width={240} height={660}/>
                        <div className="absolute top-[30px] z-10">
                            <div className="absolute -top-[30px] opacity-80">
                                <Portal type="orange" width={240} height={660} isWavyOverlay={true} pathXAdjustment={65}/>
                            </div>
                            <div className="absolute -top-[30px] opacity-80">
                                <Portal type="orange" width={240} height={660} isWavyOverlay={true} pathXAdjustment={70} />
                            </div>
                            <div className="absolute -top-[30px] opacity-80">
                                <Portal type="orange" width={240} height={660} isWavyOverlay={true} pathXAdjustment={75}/>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -right-[120px] -top-[64px] h-[660px] w-[240px] bg-gradient-radial from-cyan-400 from-60% to bg-transparent to-70% rounded-[50%] animate-pulse"></div>
                    <div className="absolute -right-[110px] -top-[54px] h-[620px] w-[220px] bg-gradient-radial from-sky-600 from-60% to bg-transparent to-70% rounded-[50%]"></div>
                    <div className="absolute -right-[120px] -top-[64px]">
                        <Portal type="blue" width={240} height={660}/>
                        <div className="absolute -right-24 top-[30px] z-10">
                            <div className="absolute right-24 -top-[30px] opacity-80">
                                <Portal type="blue" width={240} height={660} isWavyOverlay={true} pathXAdjustment={25}/>
                            </div>
                            <div className="absolute right-24 -top-[30px] opacity-80">
                                <Portal type="blue" width={240} height={660} isWavyOverlay={true} pathXAdjustment={30}/>
                            </div>
                            <div className="absolute right-24 -top-[30px] opacity-80">
                                <Portal type="blue" width={240} height={660} isWavyOverlay={true} pathXAdjustment={35}/>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CarouselWrapper;