import { useState } from "react";
import { defaultOffre } from "../assets";
import OffreCard from "../components/OffreCard";
import { Offres } from "../constants/MockData";
import { AnimatePresence, motion } from "framer-motion";

function Offre() {
  const [selectedOffre, setOffre] = useState(-1);
  function handleOffres(id: number) {
    if (selectedOffre === id) {
      setOffre(-1);
      return;
    }
    setOffre(id);
  }
  return (
    <div className="bg-ph-2 -mt-14">
      <div className="grid grid-cols-2 mt-36">
        <div className="grid text-left px-32 gap-3">
          <AnimatePresence mode="wait">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`uppercase font-black text-4xl text-secondary-0`}
              key={selectedOffre}
            >
              {selectedOffre === -1
                ? "Offre adaptée"
                : Offres[selectedOffre].title}
            </motion.h1>
          </AnimatePresence>
          <h1
            className={`uppercase ${
              selectedOffre === -1
                ? "bg-primary-0"
                : Offres[selectedOffre].primarybg
            } px-2 py-1 text-light-0 w-fit hover:shadow-neo transall `}
          >
            Publique/privée
          </h1>
          <p className="text-ph-3">
            <b>
              Nous proposons une offre intégrée pour adresser de manière
              cohérente et globale les besoinsen formation des entreprises
            </b>
            <br />
            <br />
            {selectedOffre === -1 ? (
              <span>
                Sessions spécifiques qui peuvent être organisées à l’intention,
                des organismes professionnels, des collectivités locales, des
                administrations ou des entreprises. Afin de renforcer les
                compétences et concrétiser les objectifs communs.
              </span>
            ) : (
              <span>{Offres[selectedOffre].spoiler}</span>
            )}
          </p>
          <AnimatePresence mode="wait">
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              key={selectedOffre}
              className="w-full mt-16 object-cover"
              src={
                selectedOffre === -1
                  ? defaultOffre
                  : Offres[selectedOffre].photo
              }
            />
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-2 gap-10 h-fit w-fit">
          {Offres.map((offre, index) => (
            <div
              className={`transall border-ph-0 ${
                selectedOffre === index && "border"
              }`}
              key={offre.id}
              onClick={() => handleOffres(index)}
            >
              <OffreCard offre={offre} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offre;
