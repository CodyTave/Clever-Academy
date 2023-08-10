import { gsap } from "gsap";
import { useEffect } from "react";
interface props {
  toggled: boolean;
  setToggle: () => void;
}
function ToggleBurger({ setToggle, toggled }: props) {
  useEffect(() => {
    gsap.to(".first", {});
    gsap.to(".sec", {});
  }, [toggled]);

  return (
    <>
      <svg
        onClick={setToggle}
        className="w-5 cursor-pointer"
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
