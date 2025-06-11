import react from "react";
import Link from "next/link";

const About = () => {
    return(
        <div className="flex flex-col items-center py-5">
                <div className="w-5/6 text-lg text-white text-center bg-gradient-to-t from-slate-700 via-blue-950 to-purple-950 bg-fixed rounded-lg border-gray-400 border-2 p-4 transition-transform duration-300 ease-out transform hover:scale-105">
                    <Link href="https://gamingviking.github.io/Resume/index.html" rel="noopener rerefferer" target="_blank">
                        <p>I am a full stack developer who has a passion for learning and languages. This inspired me to major in Mandarin Chinese as an undergrad and learn coding after graduation. I like to say that I'm still pursuing language, but now I talk to machines in addition to people! I love video games, LARPing, fantasy, gymnastics, field hockey, and so much more! Check below to see some of the stuff I'm into and what I'm working on.</p>
                    </Link>
                </div>
        </div>
    );
}

export default About;