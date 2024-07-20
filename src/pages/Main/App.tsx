import Beneficalinks from "../../components/Main/Beneficalinks";
import Cover from "../../components/Main/Cover";
import Whous from "../../components/Main/Whous";
import { linksofBenefits } from "../../constants/Main/Linksofbenefits";
import Layout from "../../layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full pb-20">
        <Cover />
        <Whous />
        <Beneficalinks title="Faydalı linklər" data={linksofBenefits} />
      </div>
    </Layout>
  );
};

export default App;
