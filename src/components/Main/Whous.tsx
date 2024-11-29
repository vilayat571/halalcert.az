import aak from "../../assets/images/aak.png";

const Whous = () => {
  return (
    <div id="home" className=" w-full flex   justify-center ">
      <div
        className="
 xl:w-3/5 lg:w-3/4 md:w-5/6 sm:w-full 
    
    py-12 mt-8"
      >
        <div className="flex flex-col text-justify leading-[30px] px-4 tracking-wide">
          <div>
            <p className=" font-semibold xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-center leading-[45px] tracking-wider mb-3">
              “AzeSERT HALAL” SERTİFİKATLAŞDIRMA QURUMU BEYNƏLXALQ AKKREDİTASİYA
              OLUNDU{" "}
            </p>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
            <img className="col-span-3 " src={aak} alt="" />
          </div>

          <div className="mt-5">
            <p className="text-xl">
              “AzeSERT HALAL” Sertifikatlaşdırma qurumu Türkiyə Respublikasının
              <a
                className="text-blue-600"
                href="https://www.hak.gov.tr/haberler/azesert-halal-mmc-adli-kurulus-hak-tarafindan-akredite-edilmistir"
              >
                Halal Akkreditasiya Qurumu (HAK) tərəfindən akkreditasiya olunub.
              </a>
            </p>
            <br />
            Akkreditasiya tələbləri İslam Ölkələrinin Standartlar və Metrologiya
            İnstitutunun (SMIIC) “OIC/SMIIC 2:2019 Uyğunluğun qiymətləndirilməsi
            “HALAL” sertifikatlaşdırmanı həyata keçirən qurumlar üçün tələblər”
            standartının əsasında həyata keçirilib. Bununla da, “AzeSERT HALAL”
            Sertifikatlaşdırma qurumu beynəlxalq akkreditasiya tələblərinə cavab
            verən “HALAL” uyğunluq sertifikatını təqdim etmək hüququna malik
            olmuşdur. Qurumun məqsədi Azərbaycan Respublikasında istehsal olunan
            Halal məhsulların beynəlxalq bazara rahatcılıqla cıxışını təmin
            etməkdir.
            <br />
            <br />
            “AzeSERT HALAL” Halal məhsullarının keyfiyyətinin yüksəldilməsi,
            istehlakçıların hüquqlarının müdafiə edilməsi, “Halal” məhsullarının
            rəqabət qabiliyyətinin yüksəldilməsi məqsədi ilə 2014-cü ildə “Halal
            məhsulların Sertifikatlaşdırılması Qurumu olaraq təsis edilmişdir.
            “AzeSERT HALAL” Halal məhsulların Sertifikatlaşdırılması Qurumu
            2014-cü ildən bu günə kimi yalnız “HALAL” məhsulların
            sertifikatlaşdırılması qurumu kimi fəaliyyət göstərir.
            <br />
            <br />
            “AzeSERT HALAL” Halal məhsulların Sertifikatlaşdırılması Qurumu AZS
            OIC/SMIIC 1:2022 (OIC/SMIIC 1:2019) “Halal qida üçün ümumi
            tələblər”, AZS OIC/SMIIC 2:2022 “Uyğunluğun qiymətləndirilməsi Halal
            sertifikatlaşdırmanı həyata keçirən orqanlar üçün tələblər” və digər
            beynəlxalq standartların tələblərinə uyğun olaraq fəaliyyət göstərir
            və sistemin fəaliyyəti zamanı təkmilləşdirmənin aparılmasını
            qarşısına məqsəd qoymuşdur.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whous;
