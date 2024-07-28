import Layout from "../../layout/Layout";

import LawMain from "../../components/Laws/LawMain";
import Lawcover from "../../components/Laws/Lawcover";
import SEO from "../../constants/SEO/SEO";

const Laws = () => {
  return (
    <Layout>
      <SEO
        title="AzeSERT HALAL - Qanunlar və Sənədlər"
        description="AzeSERT HALAL, halal məhsullara dair qanunlar və sənədlərini təqdim edir. Şirkətə aid məlumatlar və uyğun hüquqi çərçivələr haqqında ətraflı məlumat."
        name="AzeSERT HALAL"
        type="website"
        keywords="qanunları, məhsul sənədləri, sertifikatlaşdırma qanunları, AzeSERT HALAL, halal məhsulların qanunvericiliyi"
      />

      <div className="flex flex-col items-center w-full pb-20">
        <Lawcover />
        <LawMain />
      </div>
    </Layout>
  );
};

export default Laws;
