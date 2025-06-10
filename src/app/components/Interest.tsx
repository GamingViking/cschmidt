import react from "react";
import Link from "next/link";

interface InterestProps {
    name: string
    link: string
}

const Interest = (InterstProps) => {
    return(
        <div className="w-60 text-white text-center bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 rounded-lg border-gray-400  border-2 transition-transform duration-300 ease-out transform hover:scale-105 p-1 m-2">
            <Link href={InterstProps.link} rel="noopener noreferrer" target="_blank">{InterstProps.name}</Link>
        </div>
    );
}

export default Interest;