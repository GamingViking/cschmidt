import React from "react";
import LeafPicture_compressed from "../../../public/images/LeafPicture_compressed.png"

const HeroImage = () => {
    return(
        <div className="relative w-full h-screen bg-slate-500">
            <img className="absolute w-full h-full object-cover" src={LeafPicture_compressed.src} alt="Cool colored autumn leaves" />
            <div className="absolute flex flex-col justify-center items-center inset-0 text-white">
                <h1 className="md:text-6xl text-4xl">Chris Schmidt</h1>
                <p className="md:text-2xl text-base p-4"><span className="font-bold">C</span>reative <span className="font-bold">H</span>onest <span className="font-bold">R</span>eliable <span className="font-bold">I</span>ntelligent <span className="font-bold">S</span>illy</p>
            </div>
        </div>
    )
}

export default HeroImage;