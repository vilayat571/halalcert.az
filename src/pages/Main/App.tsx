import Beneficalinks from "../../components/Main/Beneficalinks";
import Collegues from "../../components/Main/Collegues";
import Companies from "../../components/Main/Companies";
import Cover from "../../components/Main/Cover";
import Whous from "../../components/Main/Whous";
import { linkofCollegure } from "../../constants/Main/Collagues";
import { companiesLinks } from "../../constants/Main/Companies";
import { linksofBenefits } from "../../constants/Main/Linksofbenefits";
import Layout from "../../layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full pb-20">
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
