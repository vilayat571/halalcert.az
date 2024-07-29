import { Link } from "react-router-dom";
import { ILinks } from "../../constants/Main/Linksofbenefits";

export interface ILayoutLinks {
  title: string;
  data: ILinks[];
}

const Beneficalinks: React.FC<ILayoutLinks> = ({ title, data }) => {
  return (
    <div id="home" className="flex flex-col w-full text-center  items-center justify-center mb-24">
      <p className="xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl font-semibold text-black my-6">
        {title}
      </p>
      <div
        className={`grid xl:grid-cols-4 lg:grid-cols-4  w-1/2 md:grid-cols-2 sm:grid-cols-1  gap-10`}
      >
        {data.map((item: ILinks) => {
          return (
            <Link key={item.id} className="col-span-1 flex items-center justify-center" to={item.href}>
              <img
                src={item.src}
                className="w-32 h-32  object-scale-down rounded-full"
                alt={item.alt}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Beneficalinks;
// link, image, id
