import react from "react";

interface SectionTitleProps {
    text: string
}

const SectionTitle = (SectionTitleProps) => {
    return(
        <div className="text-center text-white text-2xl font-bold p-4">
            {SectionTitleProps.text}
        </div>
    );
}

export default SectionTitle;