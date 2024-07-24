import beyan from "../../assets/files/beyan.pdf";
import odenish from "../../assets/files/odenish.pdf";
import odenish2 from "../../assets/files/odenish2.pdf";
import order from "../../assets/files/order.pdf";
import structure from "../../assets/files/structure.pdf";
import quality from "../../assets/files/quality.pdf";
import complain1 from "../../assets/files/complain1.pdf";
import complain2 from "../../assets/files/complain2.pdf";
import laws from "../../assets/files/laws.pdf";
import rekvizits from "../../assets/files/rekvizits.pdf";

export interface IDATADOCS {
  id: number;
  text: string;
  file: string;
}

export const dataDocs: IDATADOCS[] = [
  {
    id: 1,
    text: "1. Ali rəhbərlik bəyanı",
    file: beyan,
  },
  {
    id: 2,
    text: "2. Orqanın strukturu",
    file: structure,
  },
  {
    id: 3,
    text: "3.Sertifikatlaşdırma proseduru",
    file: laws,
  },
  {
    id: 4,
    text: "4. Keyfiyyət siyasəti",
    file: quality,
  },

  {
    id: 5,
    text: "5. Sifariş forması",
    file: order,
  },
  {
    id: 6,
    text: "6. Ödəniş tarifi",
    file: odenish,
  },
  {
    id: 7,
    text: "7. Ödəniş tarifi - 2",
    file: odenish2,
  },
  {
    id: 8,
    text: "8. Bank rekvizitləri",
    file: rekvizits,
  },
  {
    id: 9,
    text: "9. Şikayət forması",
    file: complain1,
  },
  {
    id: 10,
    text: "10. Şikayətləri dəyərləndirilməsi",
    file: complain2,
  },
];
