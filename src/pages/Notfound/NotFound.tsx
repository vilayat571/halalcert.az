import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SEO from "../../constants/SEO/SEO";

const NotFound = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const page = location.pathname;

  return (
    <>
      <SEO
        title="AzeSERT HALAL - Səhifə Tapılmadı"
        description="AzeSERT HALAL veb saytında axtardığınız səhifə tapılmadı. Səhifə mövcud olmaya bilər və ya URL-də bir səhv ola bilər. Ana səhifəyə qayıdın və ya axtarış edin."
        name="AzeSERT HALAL"
        type="website"
        keywords="404 səhifəsi, səhifə tapılmadı, AzeSERT HALAL səhifə xətası"
      />
      <div
        className="flex items-center justify-center
  w-full h-screen"
      >
        <div className="flex flex-col text-center">
          <p className="text-9xl font-semibold ">404</p>
          <p className="text-base ">
            Üzür istəyirik lakin <u>{page}</u> adında səhifə mövcud deyil.
          </p>
          <p className="text-base ">
            <button
              onClick={() => navigate(-1)}
              className=" text-white bg-[#067E45] px-6 py-3 tracking-widest mt-4 rounded"
            >
              Geri
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
