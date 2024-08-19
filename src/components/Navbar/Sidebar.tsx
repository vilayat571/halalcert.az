import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Hrefs from "./Hrefs";
import Anchor from "./Anchor";

const Sidebar = () => {
  const [mode, setMode] = useState<boolean>(true);

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div
      className="
    xl:hidden lg:hidden md:flex sm:flex
    my-8 justify-between items-center w-full  overflow-y-hidden  px-4 pr-6
    "
    >
      <img
        className="w-60 relative right-5 h-20 object-cover"
        src={logo}
        alt=""
      />

      {mode ? (
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => changeMode()}
          className={`${
            mode ? "block" : "hidden"
          }  cursor-pointer xl:hidden lg:hidden text-3xl`}
        />
      ) : (
        <FontAwesomeIcon
          icon={faTimes}
          className="text-3xl"
          onClick={() => changeMode()}
        />
      )}

      <div
        onClick={() => changeMode()}
        className={`${
          !mode ? "fixed" : "hidden"
        } bg-[#ffffff] text-white left-0 top-0 h-screen flex flex-col border z-10 w-full px-10 pt-6`}
      >
        <img
          className="w-60 relative right-5 h-20 object-cover"
          src={logo}
          alt="the logo of azercett"
        />

        <Hrefs style={"flex flex-col gap-5 text-black mt-4"} />
       <Anchor
         href='https://wa.me/994553430353'
         style='text-white mt-5 cursor-pointer bg-[#067E45] w-32 py-4 rounded text-center  '
         label='The phone number of company whatsapp'
         text='Müraciət'
         target={false}
           />
        <button className="bg-[#067E45] text-white absolute cursor-pointer bottom-8 px-6 py-3 rounded">
          Bağla
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
