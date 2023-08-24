import { useState } from "react";
import OffreCard from "../components/OffreCard";
import { Offres, defaultOffer } from "../constants/MockData";
import { AnimatePresence, motion } from "framer-motion";
import { patter_bg } from "../assets";

function Offre() {
  const [selectedOffre, setOffre] = useState(-1);
  const [isAnimating, setAnimating] = useState(false);

  function handleOffres(id: number) {
    if (!isAnimating) {
      if (selectedOffre === id) {
        setOffre(-1);
        return;
      }
      setOffre(id);
    }
  }

  return (
    <div className="bg-ph-2 lg:-mt-14 ">
      <div className="grid mxl:grid-cols-2 mxl:mt-36 mt-20 relative">
        <div className="grid text-left md:px-32 px-5 gap-3 ">
          <AnimatePresence mode="wait">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`uppercase font-black text-4xl text-secondary-0 h-fit`}
              key={selectedOffre}
            >
              {selectedOffre === -1
                ? defaultOffer.title
                : Offres[selectedOffre].title}
            </motion.h1>
          </AnimatePresence>
          <h1
            className={`uppercase ${
              selectedOffre === -1
                ? defaultOffer.primarybg
                : Offres[selectedOffre].primarybg
            } px-2 py-1 text-light-0 w-fit h-fit hover:shadow-neo transall `}
          >
            Publique/privée
          </h1>
          <div className="flex mxl:hidden gap-5">
            {Offres.map((offre, index) => (
              <div
                key={offre.id}
                onClick={() => handleOffres(index)}
                className={`flex justify-center items-center w-12 h-12 ${
                  offre.color
                }   transall border ${
                  selectedOffre === index && " border-ph-0"
                }`}
              >
                <img className={`w-5`} src={offre.icon} />
              </div>
            ))}
          </div>
          <div className="text-ph-3 min-h-[200px] ">
            <div className="font-bold">
              Nous proposons une offre intégrée pour adresser de manière
              cohérente et globale les besoinsen formation des entreprises
            </div>
            <br />
            {selectedOffre === -1
              ? defaultOffer.text
              : Offres[selectedOffre].text}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              className="relative mxl:mt-16"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              onAnimationComplete={() => setAnimating(false)}
              onAnimationStart={() => setAnimating(true)}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={selectedOffre}
            >
              <img
                className="w-full  object-cover "
                src={
                  selectedOffre === -1
                    ? defaultOffer.photo
                    : Offres[selectedOffre].photo
                }
              />
              <div className="absolute top-0 left-0 w-full h-full bg-secondary-0 opacity-40 hover:opacity-20 transall"></div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mxl:grid hidden grid-cols-2 gap-10 h-fit w-fit ">
          {Offres.map((offre, index) => (
            <div
              className={`transall border  ${
                selectedOffre === index && " border-ph-0"
              }`}
              key={offre.id}
              onClick={() => handleOffres(index)}
            >
              <OffreCard offre={offre} />
            </div>
          ))}
        </div>
        <img
          className="absolute mxl:block hidden w-80 right-0 top-1/2 "
          src={patter_bg}
        />
      </div>
    </div>
  );
}

export default Offre;
