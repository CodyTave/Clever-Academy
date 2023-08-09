import { toggleIc } from "../assets";
import Svg from "./Svg";

interface props {
  toggled: boolean;
  setToggle: () => void;
}
function ToggleBurger({ setToggle }: props) {
  return (
    <>
      <img onClick={setToggle} className="w-5 cursor-pointer" src={toggleIc} />
    </>
  );
}

export default ToggleBurger;
