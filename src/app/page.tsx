import About from "./components/About";
import Content from "./components/Content";
import HeroImage from "./components/HeroImage";
import FellSealCoverImage_compressed from "../../public/images/FellSealCoverImage_compressed.jpeg";
import SectionTitle from "./components/SectionTitle";
import SuperheroWebsiteImage from "../../public/images/SuperheroWebsiteImage_compressed.png";
import BattleshipGame from  "../../public/images/BattleshipGame.png";
import Interest from "./components/Interest";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import CarouselWrapper from "./components/CarouselWrapper";
import WebsiteFirstIterationPicture_compressed from "../../public/images/WebsiteFirstIterationPicture_compressed.png";

export default function Home() {
  return (
    <div>
      <div className="h-screen overflow-hidden">
        <HeroImage/>
      </div>
      <div className="bg-gradient-to-b from-slate-500 via-blue-950 to-teal-950 bg-fixed p-4 border-solid">
      <About/>
      <SectionTitle text="Projects" />
      <CarouselWrapper>
        <Carousel speed="60">
          <Card text="Fell Seal is an isometric turn-based RPG that channels the spirit of Final Fantasy Tactics in the modern era. It is a game full of possibilities, and my latest passion project has been modding new classes, portraits, and items into the game to creatively expand those exciting possibilities - soon to be a published mod on the nexus!" link="https://github.com/GamingViking/FellSealClasses" linkText="Repo" alt="Fell Seal: Arbiter's Mark Cover Image" image={FellSealCoverImage_compressed.src} link2="https://www.6eyesstudio.com/fell-seal-arbiter-s-mark" link2Text="Game" />
          <Card text="I really enjoy working in the front end and wanted to gain some practice calling on a publicaly accessible API. To that end, I created a website which lets you fetch data on superheroes and villains from a database. It was built with Next.js, Typescript and Tailwind and is hosted on Vercel." link="https://github.com/GamingViking/superheroes?tab=readme-ov-file" linkText="Repo" alt="Superhero Website Image" image={SuperheroWebsiteImage.src} link2="https://superherosearch.vercel.app/" link2Text="Website" />
          <Card text="I wanted to practice implementing functions and classes while having a little fun, and so I made battleship in C#! This modular game comes with many tweakable settings including grid size, enableing cheats, and different voices for your opponent! Download the game from my github and play in your own terminal!" link="https://github.com/GamingViking/CSharpBattleship" linkText="Repo" alt="C# Battleship game in the terminal" image={BattleshipGame.src} link2="" link2Text="" />
          <Card text="You're already here! This website was made to house a few of my projects and share some of my interests. Beyond that, I have used it as a place to try new techniques and experiment with things that interest me. Fun fact - the picture is of an older iteration! It was built with Next.js, Typescript and Tailwind and is hosted on Vercel." link="https://github.com/GamingViking/cschmidt" linkText="Repo" alt="Screen shot earlier iteration of this website" image={WebsiteFirstIterationPicture_compressed.src} link2="https://cschmidt.vercel.app/?clicked=true" link2Text="Website" />
        </Carousel>
      </CarouselWrapper>
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
            <Interest name="Stardust" link="https://en.wikipedia.org/wiki/Stardust_(2007_film)" />
            <Interest name="Throne of Glass" link="https://sarahjmaas.com/throne-of-glass-series/" />
            <Interest name="Harry Potter" link="https://en.wikipedia.org/wiki/Harry_Potter" />
            <Interest name="Rurouni Kenshin" link="https://en.wikipedia.org/wiki/Rurouni_Kenshin" />
            <Interest name="My Hero Academia" link="https://en.wikipedia.org/wiki/My_Hero_Academia" />
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
