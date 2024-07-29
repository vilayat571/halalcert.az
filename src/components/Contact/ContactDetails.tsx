import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navinfoitem, { INavItemInfo } from "../../atoms/Navbar/Navinfoitem";
import { navinfoitems } from "../../constants/Navbar/Navitems";
import {
  faCity,
  faClock,
  faLocation,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const ContactDetails = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-center font-semibold mt-20
      xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl">
        -Ofisimizə gəl-
      </p>
      <div className="grid grid-cols-1 xl:w-1/2 sm:w-full px-2 md:w-4/5 lg:w-3/4 gap-16  my-12 mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d379.8052167903536!2d49.89043!3d40.399064!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzU2LjciTiA0OcKwNTMnMjUuMSJF!5e0!3m2!1sen!2saz!4v1721710208473!5m2!1sen!2saz"
          className="rounded-lg border-none outline-none col-span-1  w-full 
          xl:h-screen lg:h-screen md:h-[400px] sm:h-[400px]"
        />
        <p className="text-center font-semibold mt-8 
        xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl">
          -Əlavə məlumatlar-
        </p>

        <div
          className=" grid xl:grid-cols-3 
        relative xl:left-12  lg:left-12  md:left-0 sm:left-0  
        lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 
        gap-12 px-2 col-span-1"
        >
          <div className="col-span-1 flex flex-col items-start justify-center gap-4">
            <p className="text-xl font-semibold">Əlaqə vasitələri</p>
            {navinfoitems.map((item: INavItemInfo) => {
              return (
                <Navinfoitem
                  key={Math.random()}
                  text={item.text}
                  icon={item.icon}
                  title={item.title}
                />
              );
            })}
          </div>

          <div className="flex flex-col items-start justify-center col-span-1  gap-4">
            <p className="text-xl font-semibold">İş fəaliyyəti</p>
            <div className="flex flex-row items-center gap-4">
              <FontAwesomeIcon
                icon={faTasks}
                className="text-[#1f965e] text-3xl rotate-15 "
              />

              <p className="flex flex-col ">
                <span className="font-semibold text-lg"> İş günləri: </span>
                <span className="text-base ">Bazar ertəsi - Cümə günü</span>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FontAwesomeIcon
                icon={faClock}
                className="text-[#1f965e] text-3xl rotate-15 "
              />

              <p className="flex flex-col ">
                <span className="font-semibold text-lg"> İş saatları: </span>
                <span className="text-base ">09:00-18:00</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start  col-span-1   gap-4">
            <p className="text-xl font-semibold">Ofis</p>
            <div className="flex flex-row items-center gap-4">
              <FontAwesomeIcon
                icon={faLocation}
                className="text-[#1f965e] text-3xl rotate-15 "
              />

              <p className="flex flex-col ">
                <span className="font-semibold text-lg"> Ünvan </span>
                <span className="text-base">Yasamal, 2th Alatava</span>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FontAwesomeIcon
                icon={faCity}
                className="text-[#1f965e] text-3xl rotate-15 "
              />

              <p className="flex flex-col ">
                <span className="font-semibold text-lg">Şəhər </span>
                <span className="text-base ">Bakı,Azərbaycan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
