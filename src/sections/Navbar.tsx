import { useState } from "react";
import { navLinks } from "../constants/constants";
import ToggleBurger from "../components/ToggleBurger";
interface props {
  Logo: string;
}
function Navbar({ Logo }: props) {
  const [toggled, setToggle] = useState(false);
  return (
    <>
      <nav className="xlg:grid hidden grid-cols-6 splitbg p-10 px-32 justify-items-center items-center gap-20 ">
        <img className="cursor-pointer" src={Logo} />
        {navLinks.map((nav) => (
          <div
            key={nav.id}
            className={`${nav.textClr} text-sm transall cursor-pointer text-left hover:opacity-60 `}
          >
            {nav.title.split(" ").map((wrd, index) => (
              <div key={index}>{wrd}</div>
            ))}
          </div>
        ))}
      </nav>

      <nav className="grid xlg:hidden transall h-auto gap-10 bg-secondary-0 p-10 ">
        <div className="flex  justify-center items-center gap-20  ">
          <img className="cursor-pointer" src={Logo} />
          <ToggleBurger
            toggled={toggled}
            setToggle={() => {
              setToggle(!toggled);
            }}
          />
        </div>
        {toggled && (
          <div
            className="grid gap-10 font-semibold transall 
           "
          >
            {navLinks.map((nav) => (
              <div
                key={nav.id}
                className={` fadeInBlur text-light-0 transall cursor-pointer`}
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
