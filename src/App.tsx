import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import { Logo } from "./assets";
import Refs from "./sections/Refs";
function App() {
  return (
    <>
      <div className="grid">
        <div>
          <Navbar Logo={Logo} />
          <Hero />
        </div>
        <Refs />
      </div>
    </>
  );
}

export default App;
