import { useEffect } from "react";
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
import axios from "axios";

const App = () => {
  useEffect(() => {
    const websiteInfo='sayt'
    const apiKey = "sk-proj-ZfEzjTF8qWsTzLwIdyhyT3BlbkFJw5nmdeeWaMxuDOTXmZK2";

 
    
      const response =  axios.post('https://api.example.com/gemini', {
        model: 'gpt-3.5-turbo', // Use 'gpt-4' if 'gpt-4-turbo' is not available
        messages: [
          {
            role: 'system',
            content: 'You are an expert in SEO and digital marketing.'
          },
          {
            role: 'user',
            content: `Generate SEO content for the following website information:\n${websiteInfo}`
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

    console.log(response);
  }, []);

  return (
    <Layout>
      <SEO
        title="AzeSERT HALAL - Halal Məhsul Sertifikatlaşdırması"
        description="AzeSERT HALAL 2014-cü ildən bəri yalnız 'HALAL' məhsulların sertifikatlaşdırılması üzrə ixtisaslaşmış orqandır."
        name="AzeSERT HALAL"
        type="website"
        keywords="AzeSERT HALAL, halal məhsul sertifikatı, halal qida sertifikatı, halal kosmetika, halal sertifikatlaşdırma, halal standartları"
      />
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
