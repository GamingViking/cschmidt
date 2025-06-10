import About from "./components/About";
import Content from "./components/Content";
import HeroImage from "./components/HeroImage";
import FellSealCoverImage_compressed from "../../public/images/FellSealCoverImage_compressed.jpeg";
import ContentImage from "./components/ContentImage";
import SectionTitle from "./components/SectionTitle";
import SuperheroWebsiteImage from "../../public/images/SuperheroWebsiteImage_compressed.png";
import BattleshipGame from  "../../public/images/BattleshipGame.png";
import Interest from "./components/Interest";

export default function Home() {
  return (
    <div>
      <div className="h-screen overflow-hidden">
        <HeroImage/>
      </div>
      <div className="bg-gradient-to-b from-slate-500 via-blue-950 to-teal-950 bg-fixed p-4 border-solid">
        <About/>
        <SectionTitle text="Projects" />
        <div className="flex md:flex-row flex-col md:justify-evenly items-center p-4">
          <Content text="Fell Seal is an isometric turn-based RPG that channels the spirit of Final Fantasy Tactics in the modern era. It is a game full of possibilities, and my latest passion project has been modding new classes, portraits, and items into the game to creatively expand those exciting possibilities - soon to be a published mod on the nexus!" link={"https://github.com/GamingViking/FellSealClasses"} />
          <ContentImage image={FellSealCoverImage_compressed.src} link="https://www.6eyesstudio.com/fell-seal-arbiter-s-mark" alt="Fell Seal: Arbiter's Mark Cover Image" />
        </div>
        <div className="flex md:flex-row flex-col md:justify-evenly items-center p-4">
          <ContentImage image={SuperheroWebsiteImage.src} link="https://superherosearch.vercel.app/" alt="Superhero Website Image" />
          <Content text="I really enjoy working in the front end and wanted to gain some practice calling on a publicaly accessible API. To that end, I created a website which lets you fetch data on superheroes and villains from a database. It is built with Next.js, Typescript and Tailwind and is hosted on Vercel." link="https://github.com/GamingViking/superheroes?tab=readme-ov-file" />
        </div>
        <div className="flex md:flex-row flex-col md:justify-evenly items-center p-4">
          <Content text="I wanted to practice implementing functions and classes while having a little fun, and so I made battleship in C#! This modular game comes with many tweakable settings including grid size, enableing cheats, and different voices for your opponent! Download the game from my github and play in your own terminal!" link="https://github.com/GamingViking/CSharpBattleship" />
          <ContentImage image={BattleshipGame.src} link="https://github.com/GamingViking/CSharpBattleship" alt="C# Battleship game in the terminal" />
        </div>
        <SectionTitle text="What am I..." />
       <div className="flex lg:flex-row flex-col lg:justify-evenly items-center p-4">
          <div className="flex flex-col">
            <div className="text-white text-xl font-bold text-center mb-2">Playing Now</div>
            <Interest name="Valheim" link="https://www.valheimgame.com/" />
            <Interest name="Fell Seal" link="https://www.6eyesstudio.com/fell-seal-arbiter-s-mark" />
            <Interest name="Last Epoch" link="https://lastepoch.com/" />
            <Interest name="Heroes of the Storm" link="https://heroesofthestorm.blizzard.com/en-us/" />
            <Interest name="Oblivion Remastered" link="https://elderscrolls.bethesda.net/en-US/oblivion-remastered" />
          </div>
          <div className="flex flex-col">
            <div className="text-white text-xl font-bold text-center mb-2">Listening To</div>
            <Interest name="Sweet Surrender" link="https://www.youtube.com/watch?v=NEyILIL_PqQ" />
            <Interest name="I Really Want to Stay..." link="https://www.youtube.com/watch?v=POWpFgCqbSI" />
            <Interest name="Into the West" link="https://www.youtube.com/watch?v=h_-AHeGO-bE" />
            <Interest name="The Only thing they Fear..." link="https://www.youtube.com/watch?v=kpnW68Q8ltc" />
            <Interest name="Save Your Tears" link="https://www.youtube.com/watch?v=IXsoTeTW4hc" />
          </div>
          <div className="flex flex-col">
            <div className="text-white text-xl font-bold text-center mb-2">Remembering Fondly</div>
            <Interest name="Lost Kingdoms" link="https://en.wikipedia.org/wiki/Lost_Kingdoms" />
            <Interest name="Dragon Warrior Monsters 2" link="https://en.wikipedia.org/wiki/Dragon_Warrior_Monsters_2" />
            <Interest name="Horizon Zero Dawn" link="https://en.wikipedia.org/wiki/Horizon_Zero_Dawn" />
            <Interest name="Bioshock" link="https://en.wikipedia.org/wiki/BioShock" />
            <Interest name="Morrowind" link="https://en.uesp.net/wiki/Morrowind:Morrowind" />
          </div>
        </div>
        <div className="text-white text-center p-4">Thank you for taking the time to browse my site - I hope you found something you liked! Feel free to reach out to me: cmschmidt12345@gmail.com</div>
        <div className="flex lg:flex-row flex-col lg:justify-evenly items-center p-4">
          <Interest name="This Site" link="https://github.com/GamingViking/cschmidt" />
          <Interest name="Github" link="https://github.com/GamingViking" />
          <Interest name="My Email: A History" link="https://www.youtube.com/watch?v=_JNGI1dI-e8" />
        </div>
      </div>
    </div> 
  )
}
