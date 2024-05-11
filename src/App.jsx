import NavBar from "./components/NavBar";
import BgHero from "./assets/illustration-hero-mobile.png";
import BgLeft from "./assets/illustration-hero-left.svg";
import BgRight from "./assets/illustration-hero-right.svg";
import BgCenter from "./assets/bg-hero-squiggle.svg";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Pricing from "./components/Pricing";
import PricePanels from "./components/PricePanels";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="p-8 bg-background flex flex-col gap-10 h-full z-10 relative">
      <NavBar />
      <div className="flex md:absolute md:mt-28 w-full justify-between -z-10">
        <img className="md:hidden" src={BgHero}></img>
        <img className="hidden md:block" src={BgLeft}></img>
        <img className="hidden md:block" src={BgCenter}></img>
        <img className="hidden md:block  " src={BgRight}></img>
      </div>
      <Hero />
      <InfoSection />
      <Pricing />
      <PricePanels />
      <Footer />
    </div>
  );
}

export default App;
