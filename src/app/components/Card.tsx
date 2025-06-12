import react from "react";
import LinkButton from "./LinkButton";

interface CardProps {
    image: string
    alt: string
    text: string
    link: string
    linkText: string
}

const Card = (CardProps) => {
    return(
        <div className="flex flex-col items-center rounded-xl border-gray-400 border-4">
            <img src={CardProps.image} alt={CardProps.alt} className="sm:h-56 h-64 w-80 sm:w-96 rounded-t-lg" />
            <div className="flex flex-col justify-between items-center bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 sm:h-72 h-72 w-80 sm:w-96 sm:p-4 p-2 text-white text-center rounded-b-lg">
                {CardProps.text}
                <LinkButton link={CardProps.link} rel="noopener noreferrer" target="_blank">{CardProps.linkText}</LinkButton>
            </div>
        </div>
    );
}

export default Card;