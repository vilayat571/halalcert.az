import { Link } from "react-router-dom";
import { ILinks } from "../../constants/Main/Linksofbenefits";

export interface ILayoutLinks {
  title: string;
  data: ILinks[];
}

const Beneficalinks: React.FC<ILayoutLinks> = ({ title, data }) => {
  return (
    <div className="flex flex-col text-center items-center">
      <p className="text-3xl font-semibold text-black my-6">{title}</p>
      <div className="grid grid-cols-4 gap-10">
        {data.map((item: ILinks) => {
          return (
            <Link key={item.id} className="col-span-1" to={item.href}>
              <img src={item.src} alt={item.alt} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Beneficalinks;
// link, image, id
