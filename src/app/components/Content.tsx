//Not in Use
import Link from "next/link";

interface ContentProps {
    text: string
    link: string
}

const Content = (ContentProps) => {
    return(
        <div>
            <Link href={ContentProps.link} rel="noopener noreferrer" target="_blank">
                <div className="flex items-center bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 sm:h-56 h-64 w-80 sm:w-96 bg-fixed rounded-lg border-gray-400 border-2 sm:p-4 p-2 transition-transform duration-300 ease-out transform hover:scale-105">
                        <div className="text-white text-center">{ContentProps.text}</div>
                </div>
            </Link>
        </div>
    );
}

export default Content;