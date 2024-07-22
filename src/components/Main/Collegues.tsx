import { Link } from "react-router-dom";
import { ILinks } from "../../constants/Main/Linksofbenefits";

export interface ILayoutLinks {
  title: string;
  data: ILinks[];
}

const Collegues: React.FC<ILayoutLinks> = ({ title, data }) => {
  return (
    <div className="flex flex-col w-full text-center items-center mb-24">
      <p className="text-4xl font-semibold text-black my-6">{title}</p>
      <div className={`grid grid-cols-4  gap-10`}>
        {data.map((item: ILinks) => {
          return (
            <Link key={item.id} className="col-span-1 " to={item.href}>
              <img
                src={item.src}
                className={`${
                  item.id == 1
                    ? "w-28 h-40 object-scale-down "
                    : "w-40 h-40 object-scale-down "
                }`}
                alt={item.alt}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Collegues;
