import About from "./components/About"
import HeroImage from "./components/HeroImage"

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <div className="h-screen overflow-hidden">
        <HeroImage/>
      </div>
      <div className="bg-gradient-to-b from-slate-700 via-blue-950 to-purple-950">
        <About/>
      </div>
    </div> 
    // </main>
  )
}
