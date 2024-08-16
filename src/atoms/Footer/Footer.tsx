import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { hrefsData } from "../../constants/Navbar/Hrefs";

const Footer = () => {
  return (
    <div
      className="flex flex-col bg-[#067E45] w-full h-auto pt-12 pb-3 
    xl:px-32 lg:px-32 md:px-12 sm:px-4
    "
    >
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 gap-12 md:grid-cols-1 sm:grid-cols-1 ">
        <div className="col-span-1 ">
          <p className="text-xl font-semibold text-[#fff]">AzeSERT HALAL</p>
          <p className="text-[15px] text-[#fff] tracking-wider w mt-3">
            “AzeSERT HALAL” Halal məhsulların Sertifikatlaşdırılması Orqanı
            2014-cü ildən bu günə kimi yalnız “HALAL” məhsulların
            sertifikatlaşdırılması orqanı kimi fəaliyyət göstərir.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={
                "https://www.instagram.com/azecerthalal?igsh=eHRyMDFzeHZ0ZWRt"
              }
              aria-label="the link of AzeSert  Social Media Account"
              className=" p-3 bg-[#067E45] border-[1px] border-white rounded-full flex justify-center items-center"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#fff] text-base"
              />
            </a>
            <a
              href={
                "https://www.linkedin.com/company/azesert-halal-/?viewAsMember=false"
              }
              aria-label="the link of AzeSert  Social Media Account"
              className=" p-3 bg-[#067E45] border-[1px] border-white rounded-full flex justify-center items-center"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[#fff] text-base"
              />
            </a>
          </div>
        </div>

        <div
          className="col-span-1 flex xl:justify-center lg:justify-center md:justify-center sm:justify-start 
        relative xl:left-12 lg:left-12 md:left-12 sm:left-0"
        >
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

        <div className="col-span-1 flex xl:justify-end lg:justify-end md:justify-end sm:justify-start  ">
          <div>
            <p className="text-xl font-semibold text-[#fff]">
              Saytın hissələri
            </p>
            <div className="mt-3 flex flex-col gap-y-1">
              <a href={"/#partnyorlarımız"} className="text-white text-base ">
                Partnyorlarımız
              </a>
              <a href={"/#emekdaşlarımız"} className="text-white text-base ">
                Əməkdaşlarımız
              </a>
              <a href={"/#faydalılinkler"} className="text-white text-base ">
                Faydalı linklər
              </a>
              <a
                target="blank"
                href={"https://wa.me/994553430353"}
                className="text-white text-base px-4 py-2 border border-white rounded text-center mt-3 "
              >
                Müraciət
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="text-sm leading-relaxed text-white">
        Copyright © 2024 Bütün hüquqlar qorunur | Bu sayt
        <Link to="https://safarovacademy.com/" className="mx-1">
          <u>Vilayət Səfərov</u>
        </Link>
        tərəfindən hazırlanmışdır.
      </div>
    </div>
  );
};

export default Footer;
