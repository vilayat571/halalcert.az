import Navhead from "../../atoms/Navbar/Navhead";
import Navbarhrefs from "./Navbarhrefs";
import Sidebar from "./Sidebar";

const Mainnav = () => {
  return (
    <div className="flex w-full xl:px-20 lg:px-20 md:px-0 sm:px-0 flex-col items-center" id="navbar">
      <Navhead />
      <Sidebar />
      <Navbarhrefs />
    </div>
  );
};

export default Mainnav;
