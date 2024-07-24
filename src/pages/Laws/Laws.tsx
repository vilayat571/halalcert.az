import Layout from "../../layout/Layout";

import LawMain from "../../components/Laws/LawMain";
import Lawcover from "../../components/Laws/Lawcover";

const Laws = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full pb-20">
        <Lawcover />
        <LawMain />
      </div>
    </Layout>
  );
};

export default Laws;
