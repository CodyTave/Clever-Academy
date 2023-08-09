import { useState } from "react";
import { navLinks } from "../constants/constants";
import ToggleBurger from "../components/ToggleBurger";
import Hero from "./Hero";
interface props {
  Logo: string;
}
function Navbar({ Logo }: props) {
  const [toggled, setToggle] = useState(false);
  return (
    <>
      <nav className="md:flex hidden justify-around  ">
        <img className="cursor-pointer" src={Logo} />
        {navLinks.map((nav) => (
          <div key={nav.id} className={`${nav.order}  transall cursor-pointer`}>
            {nav.title}
          </div>
        ))}
      </nav>

      <nav className="grid md:hidden gap-10 ">
        <div className="flex  justify-center items-center gap-20 ">
          <img className="cursor-pointer" src={Logo} />
          <ToggleBurger
            toggled={toggled}
            setToggle={() => {
              setToggle(!toggled);
            }}
          />
        </div>
        {toggled && (
          <div className="grid gap-10 font-semibold  ">
            {navLinks.map((nav) => (
              <div
                key={nav.id}
                className={`${nav.order}  $hover:text-primary-0  transall cursor-pointer`}
              >
                {nav.title}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
