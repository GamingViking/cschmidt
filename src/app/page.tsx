import About from "./components/About";
import Content from "./components/Content";
import HeroImage from "./components/HeroImage";
import FellSealCoverImage_compressed from "../../public/images/FellSealCoverImage_compressed.jpeg";
import ContentImage from "./components/ContentImage";
import SectionTitle from "./components/SectionTitle";
import SuperheroWebsiteImage from "../../public/images/SuperheroWebsiteImage_compressed.png";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <div className="h-screen overflow-hidden">
        <HeroImage/>
      </div>
      <div className="bg-gradient-to-b from-slate-500 via-blue-950 to-teal-950 bg-fixed p-4 border-solid">
        <About/>
        <SectionTitle text="Projects" />
        <div className="flex flex-row justify-evenly p-4">
          <Content text="Fell Seal is an isometric turn-based RPG that channels the spirit of Final Fantasy Tactics into the modern era. It is a game full of possibilities, and my latest passion project has been modding new classes, portraits, and items into the game to creatively expand those exciting possibilities - soon to be a published mod on the nexus!" link={"https://github.com/GamingViking/FellSealClasses"} />
          <ContentImage image={FellSealCoverImage_compressed.src} link={"https://www.6eyesstudio.com/fell-seal-arbiter-s-mark"} alt="Fell Seal: Arbiter's Mark Cover Image" />
        </div>
        <div className="flex flex-row justify-evenly p-4">
          <ContentImage image={SuperheroWebsiteImage.src} link={"https://superherosearch.vercel.app/"} alt="Superhero Website Image" />
          <Content text="I really enjoy working in the front end and wanted to gain some practice calling on a publicaly accessible API. To that end, I created this website which lets you fetch data on superheroes and villains from a database. It is built with Next.js, Typescript and Tailwind and is hosted on Vercel." link="https://github.com/GamingViking/superheroes?tab=readme-ov-file" />
        </div>
      </div>
    </div> 
    // </main>
  )
}
