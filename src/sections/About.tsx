import { threeDlogo } from "../assets";

function About() {
  return (
    <div className="block relative my-16">
      <img className="absolute top-10 w-1/3 -left-52" src={threeDlogo} />
      <div className="grid grid-cols-2 ml-40">
        <div>f</div>
        <div>g</div>
      </div>
    </div>
  );
}

export default About;
