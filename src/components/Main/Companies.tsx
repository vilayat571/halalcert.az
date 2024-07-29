import React from "react";
import { ILinks } from "../../constants/Main/Linksofbenefits";
import { Link } from "react-router-dom";

interface ILayoutLinks {
  title: string;
  data: ILinks[];
}

const Companies: React.FC<ILayoutLinks> = ({ title, data }) => {
  return (
    <div className="flex flex-col w-full text-center items-center mb-4">
      <p className="xl:text-4xl lg:text-4xl md:text-2xl  sm:text-3xl font-semibold text-black my-6">
        {title}
      </p>
      <div
        className={`grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 justify-center
           items-center w-1/2 sm:grid-cols-1 mt-8 gap-10`}
      >
        {data.map((item: ILinks) => {
          return (
            <Link
              key={item.id}
              className="col-span-1 flex justify-center items-center"
              to={item.href}
            >
              <img
                src={item.src}
                className={`w-32 h-32 object-scale-down  justify-center items-center '}`}
                alt={item.alt}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
