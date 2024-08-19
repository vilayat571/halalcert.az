import CoverAbout from "../../components/About/CoverAbout";
import Anchor from "../../components/Navbar/Anchor";
import SEO from "../../constants/SEO/SEO";
import Layout from "../../layout/Layout";

const About = () => {
  return (
    <Layout>
      <SEO
        title="AzeSERT HALAL - Haqqımızda"
        description="AzeSERT HALAL 2014-cü ildən fəaliyyət göstərən və yalnız 'HALAL' məhsulların sertifikatlaşdırılması üzrə ixtisaslaşmış bir orqandır. Bizim missiyamız və dəyərlərimiz haqqında ətraflı məlumat."
        name="AzeSERT HALAL"
        type="website"
        keywords="AzeSERT HALAL, haqqımızda, halal məhsul sertifikatı, halal sertifikatlaşdırma, şirkət missiyası, şirkət dəyərləri"
      />
      <div className="flex flex-col items-center w-full pb-20">
        <CoverAbout />
        <div id="about" className="flex flex-col items-center py-16 xl:w-1/2 px-2 lg:w-3/4 sm:w-full md:w-full">
          <img
            className="rounded-lg mb-12"
            src="https://www.labnetinternational.com/sites/www.labnetinternational.com/files/blogsies/header-images/iStock-949946968.jpg"
            alt="the image of lab"
          />
          <div>
            <p className="text-black w-full text-center mb-5 xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl font-semibold">
              “AzeSERT HALAL” 
            </p>
            <p className=" text-[#585656] text-base tracking-wider text-justify ">
              “Halal” məhsullarının keyfiyyətinin yüksəldilməsi, istehlakçıların
              hüquqlarının müdafiə edilməsi, “Halal” məhsullarının rəqabət
              qabiliyyətinin yüksəldilməsi məqsədi ilə 2014-cü ildə “AzeSERT
              HALAL” Halal məhsulların Sertifikatlaşdırılması Orqanı
              yaradılmışdır.
              <br />
              <br />
              “AzeSERT HALAL” Halal məhsulların Sertifikatlaşdırılması Orqanı
              2014-cü ildən bu günə kimi yalnız “HALAL” məhsulların
              sertifikatlaşdırılması orqanı kimi fəaliyyət göstərir.
              <br />
              <br />
              “AzeSERT HALAL”  ”Halal” məhsullarına sertifikat verən orqan
              kimi Azərbaycan Respublikasının qüvvədə olan qanunvericiliyinə və
              Azərbaycan Akkreditasiya Mərkəzinin tələblərinə uyğun “Halal”
              məhsullarının Sertifikatlaşdırılması Orqanı kimi fəaliyyət
              göstərir. “Halal” məhsullarının Sertifikatlaşdırılması Orqanı kimi
              nəzərdə tutulan bu orqanın əsas məqsədi{" "}
              <i>AZS OIC/SMIIC 1:2022 (OIC/SMIIC 1:2019)</i> “Halal qida üçün
              ümumi tələblər” və <i>AZS OIC/SMIIC 2:2022</i> “Uyğunluğun
              qiymətləndirilməsi – halal sertifikatlaşdırmanı həyata keçirən
              orqanlar üçün tələblər” standartlarının tələblərinə uyğun
              fəaliyyət göstərməkdir.
              <br />
              <br />
              “AzeSERT HALAL” {" "}
              <i>Azərbaycan Respublikasında ilk və yeganə akkreditasiya</i>{" "}
              olunmuş “Halal” məhsulların Sertifikatlaşdırılması Orqanıdır.
              <br />
              <br />
              Halal məhsulların Sertifikatlaşdırılması Orqanı{" "}
              <i>
                AZS OIC/SMIIC 1:2022 (OIC/SMIIC 1:2019) “Halal qida üçün ümumi
                tələblər”, AZS OIC/SMIIC 2:2022 “Uyğunluğun qiymətləndirilməsi –
                halal sertifikatlaşdırmanı həyata keçirən orqanlar üçün
                tələblər”
              </i>
              və digər beynəlxalq standartlar tələblərinə uyğun olaraq fəaliyyət
              göstərir və sistemin fəaliyyəti zamanı təkmilləşdirmənin
              aparılmasını qarşısına məqsəd qoymuşdur.
            </p>

            <Anchor
              href="https://wa.me/994553430353"
              style="px-6 text-center rounded py-4 text-sm 
    bg-[#29a829] text-white  w-40 relative top-12"
              target={true}
              label="Phone number: +994553430353"
              text="Bizə yaz"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
