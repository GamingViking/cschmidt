import react from "react";
import Link from "next/link";

interface LinkButtonProps {
    link: string
    text: string
}

const LinkButton = (LinkButtonProps) => {
    return(
        <div className="h-8 w-28 sm:w-32 bg-gradient-to-t from-blue-700 from-5% via-blue-900 via-50% to to-blue-700 to-95% border-2 border-slate-400 rounded-lg">
            <Link href={LinkButtonProps.link} rel="noopener noreferrer" target="_blank">
                <div>
                    {LinkButtonProps.text}
                </div>
            </Link>
        </div>
    );
}

export default LinkButton;