import Beneficalinks from "../../components/Main/Beneficalinks";
import Collegues from "../../components/Main/Collegues";
import Companies from "../../components/Main/Companies";
import Cover from "../../components/Main/Cover";
import Whous from "../../components/Main/Whous";
import { linkofCollegure } from "../../constants/Main/Collagues";
import { companiesLinks } from "../../constants/Main/Companies";
import { linksofBenefits } from "../../constants/Main/Linksofbenefits";
import SEO from "../../constants/SEO/SEO";
import Layout from "../../layout/Layout";

const App = () => {
  return (
    <Layout>
      <SEO
        title="AzeSERT HALAL - Halal Məhsul Sertifikatlaşdırması"
        description="AzeSERT HALAL 2014-cü ildən bəri yalnız 'HALAL' məhsulların sertifikatlaşdırılması üzrə ixtisaslaşmış orqandır."
        name="AzeSERT HALAL"
        type="website"
        keywords="AzeSERT HALAL, halal məhsul sertifikatı, halal qida sertifikatı, halal kosmetika, halal sertifikatlaşdırma, halal standartları"
      />
      <div className="flex  flex-col w-full pb-20">
        <Cover />
        <Whous />
        <Beneficalinks title="- Faydalı linklər -" data={linksofBenefits} />
        <Collegues title="-  Partnyorlarımız  -" data={linkofCollegure} />
        <Companies title="- Əməkdaşlarımız -" data={companiesLinks} />
      </div>
    </Layout>
  );
};

export default App;
