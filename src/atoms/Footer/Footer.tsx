import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { hrefsData } from "../../constants/Navbar/Hrefs";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#067E45] w-full h-auto pt-12 pb-3 px-32">
      <div className="grid grid-cols-3 ">
        <div className="col-span-1">
          <p className="text-xl font-semibold text-[#fff]">AzeSERT HALAL MMC</p>
          <p className="text-[15px] text-[#fff] tracking-wider w mt-3">
            “AzeSERT HALAL” Halal məhsulların Sertifikatlaşdırılması Orqanı
            2014-cü ildən bu günə kimi yalnız “HALAL” məhsulların
            sertifikatlaşdırılması orqanı kimi fəaliyyət göstərir.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={"/"}
              aria-label="the link of Raja Restaurant Social Media Account"
              className=" p-3 bg-[#067E45] border-[1px] border-white rounded-full flex justify-center items-center"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[#fff] text-base"
              />
            </a>
            <a
              href={"/"}
              aria-label="the link of Raja Restaurant Social Media Account"
              className=" p-3 bg-[#067E45] border-[1px] border-white rounded-full flex justify-center items-center"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#fff] text-base"
              />
            </a>
            <a
              href={"/"}
              aria-label="the link of Raja Restaurant Social Media Account"
              className=" p-3 bg-[#067E45] border-[1px] border-white rounded-full flex justify-center items-center"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[#fff] text-base"
              />
            </a>
          </div>
        </div>

        <div className="col-span-1 flex justify-center relative left-12">
          <div>
            <p className="text-xl font-semibold text-[#fff]">Səhifələr</p>
            <div className="mt-3 flex flex-col gap-y-1">
              {hrefsData.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="text-white text-base "
                  >
                    {item.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-end  ">
          <div>
            <p className="text-xl font-semibold text-[#fff]">
              Saytın hissələri
            </p>
            <div className="mt-3 flex flex-col gap-y-1">
            <Link to={"/"} className="text-white text-base ">
                Partnyorlarımız
              </Link> 
              <Link to={"/"} className="text-white text-base ">
                Əməkdaşlarımız
              </Link>
              <Link to={"/"} className="text-white text-base ">
                Faydalı linklər
              </Link>
              <Link to={"/"} className="text-white text-base px-4 py-2 border border-white rounded text-center mt-3 ">
                Müraciət
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="text-sm tracking-wider text-white">
        Copyright © 2024 Bütün hüquqlar qorunur | Bu sayt
        <Link to="https://safarovacademy.com/" className="mx-1">
          <u>Vilayət Səfərov</u>
        </Link>
        tərəfindən hazırlanmışdır
      </div>
    </div>
  );
};

export default Footer;
