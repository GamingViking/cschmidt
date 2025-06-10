import react from "react";

interface ContentProps {
    text: string
}

const Content = (ContentProps) => {
    return(
           <div className="bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 h-56 w-80 bg-fixed rounded-lg border-gray-400 border-2 p-4">
                <div className="text-white text-center">{ContentProps.text}</div>
           </div>
    );
}

export default Content;