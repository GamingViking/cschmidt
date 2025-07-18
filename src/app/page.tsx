import About from "./components/About";
import HeroImage from "./components/HeroImage";
import SectionTitle from "./components/SectionTitle";
import Interest from "./components/Interest";
import CarouselRenderer from "./components/CarouselRenderer";

export default function Home() {
  return (
    <div>
      <div className="h-screen overflow-hidden">
        <HeroImage/>
      </div>
      <div className="bg-gradient-to-b from-slate-500 via-blue-950 to-teal-950 bg-fixed p-4 border-solid overflow-hidden">
        <About/>
        <SectionTitle text="Projects" />
        <CarouselRenderer/>    
        <SectionTitle text="What am I..." />
        <div className="flex lg:flex-row flex-col lg:justify-evenly items-center p-4">
          <div className="flex flex-col">
            <div className="text-white text-xl font-bold text-center mb-2">Playing Now</div>
            <Interest name="Valheim" link="https://www.valheimgame.com/" />
            <Interest name="Fell Seal" link="https://www.6eyesstudio.com/fell-seal-arbiter-s-mark" />
            <Interest name="Last Epoch" link="https://lastepoch.com/" />
            <Interest name="Heroes of the Storm" link="https://heroesofthestorm.blizzard.com/en-us/" />
            <Interest name="Morrowind" link="https://en.uesp.net/wiki/Morrowind:Morrowind" />
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
          <Interest name="Github" link="https://github.com/GamingViking" />
          <Interest name="My Email: A History" link="https://www.youtube.com/watch?v=_JNGI1dI-e8" />
        </div>
      </div>
    </div> 
  )
}
