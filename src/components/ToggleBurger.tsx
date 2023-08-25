import { gsap } from "gsap";
import { useEffect } from "react";
interface props {
  toggled: boolean;
  setToggle: () => void;
}
function ToggleBurger({ setToggle, toggled }: props) {
  useEffect(() => {
    if (toggled) {
      gsap.to(".mid", { x: 500 });
      gsap.to(".first", { rotate: 45, x: 75, y: -20, delay: 0.2 });
      gsap.to(".sec", { rotate: -45, x: 60, y: 70, delay: 0.2 });
    } else {
      gsap.to(".first", { rotate: 0, x: 0, y: 0 });
      gsap.to(".sec", { rotate: 0, x: 0, y: 0 });
      gsap.to(".mid", { x: 0 });
    }
  }, [toggled]);

  return (
    <>
      <svg
        onClick={setToggle}
        className="xxs:w-8 w-6 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0.00 0.00 512.00 512.00"
      >
        <rect
          className="first"
          fill="#ffffff"
          x="32.06"
          y="128.01"
          width="447.86"
          height="31.98"
        />
        <rect
          className="mid"
          fill="#ffffff"
          x="32.06"
          y="240.01"
          width="447.86"
          height="31.98"
        />
        <rect
          className="sec"
          fill="#ffffff"
          x="32.06"
          y="352.01"
          width="447.86"
          height="31.98"
        />
      </svg>
    </>
  );
}

export default ToggleBurger;
