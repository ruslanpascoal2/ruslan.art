import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";

export default function Home() {
  return(
    <div className="flex items-center justify-between w-full gap-0">
      <section className="w-full block" style={{width: '50vw'}}>
        <Gallery/>
        </section>
      <section className="w-full fixed h-screen" style={{width: '50vw', top: 0, left: '50%', background: 'red'}}>
        <About/>
      </section>
    </div>
  )
}
