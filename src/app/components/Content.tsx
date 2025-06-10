import Link from "next/link";
import react from "react";

interface ContentProps {
    text: string
    link: string
}

const Content = (ContentProps) => {
    return(
        <div>
            <Link href={ContentProps.link} rel="noopener noreferrer" target="_blank">
                <div className="flex items-center bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 h-56 w-96 bg-fixed rounded-lg border-gray-400 border-2 p-4 transition-transform duration-300 ease-out transform hover:scale-105">
                        <div className="text-white text-center">{ContentProps.text}</div>
                </div>
            </Link>
        </div>
    );
}

export default Content;