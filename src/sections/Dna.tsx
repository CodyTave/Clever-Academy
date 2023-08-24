import { AnimatePresence, motion } from "framer-motion";
import { logopattern } from "../assets";
import { adn } from "../constants/constants";
import { useState } from "react";
import Pill from "../components/Pill";

function Dna() {
  const [selectedAdn, setAdn] = useState(0);
  return (
    <div className="sm:px-32 xs:px-20 px-5 sm:my-20 my-10">
      <h1 className="uppercase text-left font-black text-secondary-0 text-4xl">
        Notre ADN
      </h1>
      <div className="mlg:flex grid lg:gap-40 mlg:gap-16 gap-5 bg-secondary-2 mt-10 p-10 sm:px-20 px-10 relative">
        <div className="mlg:grid flex gap-5 flex-shrink-0 ">
          {adn.map((item, index) => (
            <div
              onClick={() => setAdn(index)}
              key={item.id}
              className={`flex gap-8 transall hover:opacity-75 cursor-pointer ${
                selectedAdn !== index && "opacity-40"
              } `}
            >
              <img
                onContextMenu={(e) => e.preventDefault()}
                className="w-9 select-none"
                src={item.icon}
              />
              <h1
                className={`mlg:block hidden text-left font-semibold ${
                  selectedAdn === index ? "text-secondary-0" : "text-ph-3"
                } my-auto`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <h1 className="text-left font-bold text-secondary-0 mlg:hidden">
          {adn[selectedAdn].title}
        </h1>
        <div className="flex relative mxl:w-2/5 text-left">
          <div className="absolute h-40 hover:h-20 w-[2px] -top-20 -left-20 bg-secondary-1 transall  " />
          <AnimatePresence mode="wait">
            <motion.p
              key={selectedAdn}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="xlg:mt-10 xlg:text-base xxs:text-sm text-xs font-semibold text-secondary-0 w-[95%] mlg:min-h-fit min-h-[120px]"
            >
              {adn[selectedAdn].content}
            </motion.p>
          </AnimatePresence>
          <img
            className="absolute w-20 -right-5 xlg:top-0 mlg:-top-5 -top-10 transall hover:pl-5 xlg:opacity-100 opacity-50 transall"
            src={logopattern}
          />
        </div>
        <Pill />
        <div className="absolute sm:h-20 h-10 w-[2px] -bottom-5 hover:h-10 right-16 sm:right-32 bg-primary-0 transall " />
        <div className="absolute sm:h-20 h-10  w-[2px] bottom-0 hover:h-10 right-10 sm:right-28 bg-primary-0 transall " />
      </div>
    </div>
  );
}

export default Dna;
