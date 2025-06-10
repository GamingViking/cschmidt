import react from "react";
import Link from "next/link";

interface ContentImageProps {
    image: string
    alt: string
    link:string
}

const ContentImage = (ContentImageProps) => {
    return(
        <div>
            <Link href={ContentImageProps.link} rel="noopener noreferrer" target="_blank">
                <img src={ContentImageProps.image} alt={ContentImageProps.alt} className="bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 h-56 w-80 bg-fixed rounded-lg border-gray-400 border-2" />
            </Link>
        </div>
    );
}

export default ContentImage;