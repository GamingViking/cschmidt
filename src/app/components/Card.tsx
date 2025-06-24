import { link } from "fs";
import LinkButton from "./LinkButton";

interface CardProps {
    image: string
    alt: string
    text: string
    link: string
    linkText: string
    link2: string
    link2Text: string
}

const Card = (props: CardProps) => {
    console.log('First button props link:', props.link);
    console.log('First button props text:', props.linkText);
    console.log('Second button props link:', props.link2);
    console.log('First button props text:', props.link2Text);
    return(
        <div className="flex flex-col items-center rounded-xl border-gray-400 border-4">
            <img src={props.image} alt={props.alt} className="sm:h-56 h-64 w-80 sm:w-96 rounded-t-lg" />
            <div className="flex flex-col justify-between items-center bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 sm:h-72 h-72 w-80 sm:w-96 sm:p-4 p-2 text-white text-center rounded-b-lg">{props.text}
                <div className="flex flex-row w-full items-center justify-center">
                    {props.link2 != "" ? (
                    <div className="flex flex-row gap-12">
                        <LinkButton link={props.link}>{props.linkText}</LinkButton>
                        <LinkButton link={props.link2}>{props.link2Text}</LinkButton>
                    </div> ) : (
                        <LinkButton link={props.link}>{props.linkText}</LinkButton>)}
                </div>
            </div>
        </div>
    );
}

export default Card;