import react from "react";

const About = () => {
    return(
        <div className="flex flex-col items-center py-5">
            <div className="w-5/6 text-lg text-white text-center bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 bg-fixed rounded-lg border-gray-400 border-2 p-4">
                <p>I am an aspiring full stack developer who has a passion for learning and languages. This inspired me to major in Mandarin Chinese as an undergrad and start to learn coding after graduation. I like to say that I'm still pursuing language, but now I talk to machines in addition to people! I love video games, LARPing, fantasy, gymnastics, field hockey, and so much more! Check below to see some of the stuff I'm into and what I'm working on.</p>
                <p className="pt-2">Click anything with a border to be sent to more info on it!</p>
            </div>
        </div>
    );
}

export default About;