import Navhead from "../../atoms/Navbar/Navhead";
import Navbarhrefs from "./Navbarhrefs";

const Mainnav = () => {
  return (
    <div className="flex w-full px-20 flex-col items-center" id="navbar">
      <Navhead />
      <Navbarhrefs />
    </div>
  );
};

export default Mainnav;
