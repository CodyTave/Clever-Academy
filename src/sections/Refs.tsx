import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { refs } from "../refs";
import { useEffect } from "react";
function Refs() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  function refsDevider(allRefs: { id: string; img: string }[]) {
    const refs = [];
    let refsSection: { id: string; img: string }[] = [];

    for (let index = 0; index < allRefs.length; index++) {
      refsSection.push(allRefs[index]);

      if (refsSection.length === 4 || index === allRefs.length - 1) {
        while (refsSection.length < 4) {
          refsSection.push(allRefs[0]);
        }

        refs.push(refsSection);
        refsSection = [];
      }
    }

    console.log(refs);
  }
  useEffect(() => {
    refsDevider(refs);
  }, []);

  return (
    <div ref={ref} className="md:flex hidden gap-10 mx-28 mt-24">
      <AnimatePresence mode="wait">
        {inView && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            exit={{ height: -60 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={` w-[1.5px]  transall bg-primary-0`}
          />
        )}
      </AnimatePresence>
      <div className="text-left font-black text-ph-0 text-lg">
        ILS NOUS ONT
        <br /> FAIT CONFIANCE
      </div>
      <div className="w-4/5  flex gap-10 justify-center items-center h-16 overflow-hidden  ">
        {refs.map((ref) => (
          <img
            className=" w-1/4 h-4/6 grayscale hover:grayscale-0 opacity-80 transall "
            key={ref.id}
            src={ref.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Refs;
