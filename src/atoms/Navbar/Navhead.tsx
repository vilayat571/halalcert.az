import Navinfo from "../../components/Navbar/Navinfo";
import Logo from "./Logo";

const Navhead = () => {
  return (
    <div id="navHead" className="flex w-full my-4 justify-between items-center">
      <Logo />
      <Navinfo />
    </div>
  );
};

export default Navhead;
