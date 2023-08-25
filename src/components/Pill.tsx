import { useInView } from "react-intersection-observer";
import { ball1, ball2, ball3, pill1, pill2, pill3 } from "../assets";
import { useState, useEffect } from "react";

function Pill() {
  const [Hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
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
        className={`absolute  ${Hovered ? "rotate-[-16deg]" : "rotate-3"}  
         mxl:w-72 md:w-52 w-28 md:-top-16 -top-10 xl:right-32 right-0 pilltrans  `}
        src={pill1}
      />
      <img
        className={`absolute  ${Hovered ? "rotate-[16deg]" : "-rotate-3"}  
         mxl:w-72 md:w-52 w-28 md:-top-16 -top-10 xl:right-32 right-0 pilltrans  `}
        src={pill2}
      />
      <img
        className={`absolute  ${Hovered && "mt-2"}  
        mxl:w-72 md:w-52 w-28 md:-top-16 -top-10 xl:right-32 right-0 pilltrans ballbounce  `}
        src={pill3}
      />
      <img
        className={`absolute  ${Hovered && "mt-[9px]"}  
        mxl:w-72 md:w-52 w-28 md:-top-16 -top-10 xl:right-32 right-0 ball1trans ball3bounce  `}
        src={ball1}
      />
      <img
        className={`absolute  ${Hovered && "mt-[12px]"}  
        mxl:w-72 md:w-52 w-28 md:-top-16 -top-10 xl:right-32 right-0 ball2trans ball2bounce  `}
        src={ball2}
      />
      <img
        className={`absolute  ${Hovered && "mt-[10px]"}  
        mxl:w-72 md:w-52 w-28 md:-top-16 -top-10 xl:right-32 right-0 ball3trans ballbounce  `}
        src={ball3}
      />
    </div>
  );
}

export default Pill;
