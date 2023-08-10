import { arrow, dropLogo, heroPhotofull, plus } from "../assets";
import { useState } from "react";
import { heroContent } from "../constants/constants";
import { AnimatePresence, motion } from "framer-motion";

function Hero() {
  const [selectedHero, setHero] = useState(heroContent[0]);
  const [Hovered, Hover] = useState(0);
  return (
    <>
      <div className="grid lg:grid-cols-2 -mt-1">
        <div className="flex flex-col gap-5 text-white py-20 md:px-28 px-16  bg-secondary-0">
          <AnimatePresence mode="wait">
            <motion.h1
              key={selectedHero.id}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.8, ease: "backInOut" }}
              className="text-6xl text-left font-semibold"
            >
              {selectedHero.title}
            </motion.h1>
          </AnimatePresence>
          <div className="block relative ">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHero.id}
                initial={{ height: 0 }}
                animate={{ height: 380 }}
                exit={{ height: -380 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute w-[1.5px] h-96 transall ${
                  selectedHero.id === 2 ? "bg-primary-0" : "bg-secondary-1"
                } top-0`}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedHero.id}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.2 }}
                className="text-left ml-5 font-light max-w-xl  "
              >
                {selectedHero.paragraph}
              </motion.p>
            </AnimatePresence>
            <div className="flex mxl:flex-row flex-col">
              <button
                onMouseEnter={() => Hover(1)}
                onMouseLeave={() => Hover(0)}
                className="bg-primary-0 p-5 w-52 flex items-center justify-between gap-2 ml-5 mt-5"
              >
                <span className="font-semibold">Contactez Nous</span>
                <img
                  className={`w-4 transall ${
                    Hovered === 1 && "-translate-x-2"
                  }`}
                  src={arrow}
                />
              </button>
              <button
                onMouseEnter={() => Hover(2)}
                onMouseLeave={() => Hover(0)}
                className="bg-secondary-1 p-5 w-52 flex items-center justify-between gap-2 ml-5 mt-5"
              >
                <span className="font-semibold">Nos Offres</span>
                <img
                  className={`w-4 transall ${Hovered === 2 && "rotate-180"}`}
                  src={plus}
                />
              </button>
            </div>
          </div>
          <div className="flex md:justify-end justify-center mt-5 gap-2">
            {heroContent.map((hero) => (
              <span
                onClick={() => setHero(hero)}
                className={`h-[5px] w-16 bg-white block transall cursor-pointer
                  ${
                    selectedHero.id !== hero.id
                      ? "opacity-25 w-12"
                      : "opacity-100 w-16"
                  }`}
              ></span>
            ))}
          </div>
        </div>
        <div className="bg-light-0 text-secondary-0 sm:p-10 p-5 flex justify-center items-center relative overflow-hidden">
          <img
            className="  max-w-xl sm:max-w-3xl px-20 select-none fadeInBlur object-cover"
            src={heroPhotofull}
          />
          <img
            src={dropLogo}
            className="absolute w-24 xxxl:left-1/3 xxxl:-translate-x-1/2 left-1/4 bounce fadeInBlur "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
