import Covercontact from "../../components/Contact/Covercontact";
import Layout from "../../layout/Layout";
import SEO from "../../constants/SEO/SEO";
import ContactDetails from "../../components/Contact/ContactDetails";

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="AzeSERT HALAL - Əlaqə"
        description="AzeSERT HALAL ilə əlaqə qurmaq üçün məlumatlar. Bizimlə əlaqə saxlamaq üçün telefon nömrələri, e-poçt ünvanları və ünvanlar burada təqdim olunur."
        name="AzeSERT HALAL"
        type="website"
        keywords="Əlaqə, AzeSERT HALAL, telefon nömrəsi, e-poçt ünvanı, ünvan, əlaqə məlumatları"
      />
      <div className="flex flex-col items-center w-full pb-8">
        <Covercontact />
        <ContactDetails />
      </div>
    </Layout>
  );
};

export default Contact;
