import About from "./components/About";
import Content from "./components/Content";
import HeroImage from "./components/HeroImage";
import FellSealCoverImage_compressed from "../../public/images/FellSealCoverImage_compressed.jpeg";
import ContentImage from "./components/ContentImage";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <div className="h-screen overflow-hidden">
        <HeroImage/>
      </div>
      <div className="bg-gradient-to-b from-slate-500 via-blue-950 to-teal-950 bg-fixed p-4 border-solid">
        <About/>
        <div className="flex flex-row justify-evenly p-4">
          <Content text="hi" />
          <ContentImage image={FellSealCoverImage_compressed.src} link={"https://www.6eyesstudio.com/fell-seal-arbiter-s-mark"} />
        </div>
      </div>
    </div> 
    // </main>
  )
}
