import Ptag from "../../atoms/Laws/Ptag.tsx";
import Anchor from "../Navbar/Anchor.tsx";
import { dataDocs, IDATADOCS } from "../../constants/Laws/DocsData.ts";

const Docs = () => {
  return (
    <div className="hidden mt-0  flex-col gap-3">
      <Ptag text={"Sənədlər"} />
      {dataDocs.map((item: IDATADOCS) => {
        return (
          <Anchor
          key={item.id}
            href={item.file}
            style="text-[#1d61df] mb-2 underline"
            target={true}
            label={item.text}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default Docs;
