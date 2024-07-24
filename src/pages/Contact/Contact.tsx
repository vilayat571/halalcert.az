import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navinfoitem, { INavItemInfo } from "../../atoms/Navbar/Navinfoitem";
import Covercontact from "../../components/Contact/Covercontact";
import { navinfoitems } from "../../constants/Navbar/Navitems";
import Layout from "../../layout/Layout";
import { faHourglass, faTasks } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full pb-20">
        <Covercontact />
        <p className="text-center font-semibold mt-12 text-3xl">
          -Bir düyməylə ofisimizə gəl-
        </p>
        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col w-3/4 gap-16 xl:items-start lg:items-start md:items-start sm:items-center justify-center my-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d379.8052167903536!2d49.89043!3d40.399064!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzU2LjciTiA0OcKwNTMnMjUuMSJF!5e0!3m2!1sen!2saz!4v1721710208473!5m2!1sen!2saz"
            
            className="rounded-lg  shadow-md border-none outline-none 
            xl:w-[600px] lg:w-[600px] md:w-[600px] sm:w-[350px]
            w-[600px]
            h-[350px]"
          />

          <div className=" flex flex-col justify-between items-start">
            <div className="flex flex-col items-start gap-4">
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
            <div className="flex flex-col items-start mt-12 gap-4">
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
                  icon={faHourglass}
                  className="text-[#1f965e] text-3xl rotate-15 "
                />

                <p className="flex flex-col ">
                  <span className="font-semibold text-lg"> İş saatları: </span>
                  <span className="text-base ">09:00-18:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
