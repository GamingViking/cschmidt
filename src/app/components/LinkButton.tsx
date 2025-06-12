import react from "react";
import Link from "next/link";

interface LinkButtonProps {
    link: string;
    children: React.ReactNode;
}

const LinkButton = (props: LinkButtonProps) => {
    return(
        <div className="h-8 w-28 sm:w-32 ring-green-300 hover:shadow-btn hover:shadow-pink-500/80 bg-gradient-to-t from-blue-950 from-5% via-slate-900 via-50% to to-blue-950 to-95% border-2 border-slate-400 rounded-lg">
            <Link href={props.link} rel="noopener noreferrer" target="_blank">
                <div className="text-white text-center">
                    {props.children}
                </div>
            </Link>
        </div>
    );
}

export default LinkButton;