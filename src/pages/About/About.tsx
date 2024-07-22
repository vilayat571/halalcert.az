import CoverAbout from "../../components/About/CoverAbout";
import Layout from "../../layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full pb-20">
        <CoverAbout />
      </div>
    </Layout>
  );
};

export default About;
