import React from "react";
import Image from "next/image";
import LeafPicture_compressed from "../../../public/images/LeafPicture_compressed.png"

const HeroImage = () => {
    return(
        <div className="relative w-full h-screen bg-slate-500">
            <img className="absolute w-full h-full object-cover" src={LeafPicture_compressed.src} alt="vibrant fantasy landscape backdrop" />
            <div className="absolute flex flex-col justify-center items-center inset-0 text-white">
                <h1 className="md:text-6xl text-4xl">Chris Schmidt</h1>
                <p className="md:text-2xl text-base p-4">Welcome to my website!</p>
            </div>
        </div>
    )
}

export default HeroImage;