import { threeDlogo } from "../assets";
import Stats from "../components/Stats";

function About() {
  const aboutData = {
    preTitle: "découvrez clever",
    Title: "Qui sommes-nous",
    parag: (
      <>
        Institut international de conseil et de renforcement de capacités, nous
        disposons d'une équipe solide aux compétences avérées, et d'une présence
        internationale.
        <br /> Nous sommes fiers de forger avec nos partenaires leur force de
        frappe business
      </>
    ),
  };
  return (
    <div className="block relative sm:my-16 fadeInBlur">
      <img
        className="absolute hidden lg:block mxl:top-0 top-12 w-[33%] xl:-left-52 -left-24 -z-20 "
        src={threeDlogo}
      />
      <div className="grid mlg:grid-cols-2 mxl:w-3/4 lg:w-[79%] px-5 lg:px-0 ml-auto mt-10 ">
        <div className="text-left py-10">
          <h1 className="uppercase text-secondary-1 font-semibold">
            {aboutData.preTitle}
          </h1>
          <h1 className="uppercase text-secondary-0 font-extrabold text-4xl">
            {aboutData.Title}
          </h1>
          <p className="mt-5 text-secondary-0 font-medium">{aboutData.parag}</p>
        </div>
        <Stats />
      </div>
    </div>
  );
}

export default About;
