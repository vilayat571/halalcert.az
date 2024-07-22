import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [mode, setMode] = useState<boolean>(true);

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div
      className="
    xl:hidden lg:hidden md:flex sm:flex
    my-8 justify-between items-center w-full  overflow-y-hidden  px-4
    "
    >
      <span className="logo">logo</span>

      {mode ? (
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => changeMode()}
          className={`${
            mode ? "block" : "hidden"
          }  cursor-pointer xl:hidden lg:hidden text-2xl`}
        />
      ) : (
        <FontAwesomeIcon
          icon={faTimes}
          className="text-2xl"
          onClick={() => changeMode()}
        />
      )}

      <div
        onClick={() => changeMode()}
        className={`${
          !mode ? "fixed" : "hidden"
        } bg-[#067E45] text-white left-0 top-0 h-screen z-10 w-full`}
      >
        ede
      </div>
    </div>
  );
};

export default Sidebar;
