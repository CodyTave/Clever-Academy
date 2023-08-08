import { toggleIc } from "../assets";
import Svg from "./Svg";

interface props {
  toggled: boolean;
  setToggle: () => void;
}
function ToggleBurger({ setToggle }: props) {
  return (
    <>
      <div
        className="cursor-pointer font-bold"
        onClick={() => {
          setToggle();
        }}
      >
        <Svg Class="w-5" src={toggleIc} />
      </div>
    </>
  );
}

export default ToggleBurger;
