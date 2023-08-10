import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import { Logo } from "./assets";
import Offres from "./sections/Offres";
import Categories from "./sections/Categories";
import Dna from "./sections/Dna";
function App() {
  return (
    <>
      <div className="grid gap-32">
        <div>
          <Navbar Logo={Logo} />
          <Hero />
        </div>
        <About />
        <Offres />
        <Categories />
        <Dna />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
