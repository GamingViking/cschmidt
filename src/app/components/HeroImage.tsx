import React, { Suspense} from "react";
import LeafPicture_compressed from "../../../public/images/LeafPicture_compressed.png"
import WelcomeBack from "./WelcomeBack";

const HeroImage = () => {
    return(
        <div className="relative w-full h-screen bg-slate-500">
            <img className="absolute w-full h-full object-cover" src={LeafPicture_compressed.src} alt="Cool colored autumn leaves" />
            <div className="absolute flex flex-col justify-center items-center inset-0 text-white">
                <Suspense fallback={null}>
                    <WelcomeBack/>
                </Suspense>
                <h1 className="md:text-6xl text-4xl">Chris Schmidt</h1>
                <div className="flex md:flex-row flex-col text-sm md:pt-0 pt-4">
                    <p className="md:text-2xl md:first-letter:text-5xl first-letter:text-2xl first-letter:font-bold
                    md:pt-4 pt-0 pr-2">Creative</p>
                    <p className="md:text-2xl md:first-letter:text-5xl first-letter:text-2xl first-letter:font-bold
                    md:pt-4 pt-0 pr-2">Honest</p>
                    <p className="md:text-2xl md:first-letter:text-5xl first-letter:text-2xl first-letter:font-bold
                    md:pt-4 pt-0 pr-2">Reliable</p>
                    <p className="md:text-2xl md:first-letter:text-5xl first-letter:text-2xl first-letter:font-bold
                    md:pt-4 pt-0 pr-2">Intelligent</p>
                    <p className="md:text-2xl md:first-letter:text-5xl first-letter:text-2xl first-letter:font-bold
                    md:pt-4 pt-0 pr-2">Silly</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;