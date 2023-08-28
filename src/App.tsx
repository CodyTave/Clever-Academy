import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Refs from "./sections/Refs";
import About from "./sections/About";
import Offre from "./sections/Offre";
import Categories from "./sections/Categories";
import Dna from "./sections/Dna";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
function App() {
  return (
    <>
      <div id="top" className="grid">
        <Navbar splitbg />
        <Hero />
        <Refs />
        <About />
        <Offre />
        <Categories />
        <Dna />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
