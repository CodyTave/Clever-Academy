import { useInView } from "react-intersection-observer";
import { ball1, ball2, ball3, pill, pill1, pill2, pill3 } from "../assets";
import { useState, useEffect } from "react";

function Pill() {
  const [Hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (!inView) {
      setHovered(true);
    } else {
      setHovered(false);
    }
  }, [inView]);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className={`absolute  ${
          Hovered ? "rotate-[-16deg]" : "rotate-3"
        } md:block hidden
         mxl:w-72 w-52 -top-16 xl:right-32 right-0 pilltrans  `}
        src={pill1}
      />
      <img
        className={`absolute  ${
          Hovered ? "rotate-[16deg]" : "-rotate-3"
        } md:block hidden
         mxl:w-72 w-52 -top-16 xl:right-32 right-0 pilltrans  `}
        src={pill2}
      />
      <img
        className={`absolute  ${Hovered && "mt-2"} md:block hidden
        mxl:w-72 w-52 -top-16 xl:right-32 right-0 pilltrans  `}
        src={pill3}
      />
      <img
        className={`absolute  ${Hovered && "mt-[9px]"} md:block hidden
        mxl:w-72 w-52 -top-16 xl:right-32 right-0 ball1trans  `}
        src={ball1}
      />
      <img
        className={`absolute  ${Hovered && "mt-[12px]"} md:block hidden
        mxl:w-72 w-52 -top-16 xl:right-32 right-0 ball2trans  `}
        src={ball2}
      />
      <img
        className={`absolute  ${Hovered && "mt-[10px]"} md:block hidden
        mxl:w-72 w-52 -top-16 xl:right-32 right-0 ball3trans  `}
        src={ball3}
      />
    </div>
  );
}

export default Pill;
