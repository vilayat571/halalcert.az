import React from 'react';
import { ILinks } from '../../constants/Main/Linksofbenefits';
import { Link } from 'react-router-dom';

interface ILayoutLinks {
    title: string;
    data: ILinks[];
  }


const Companies:React.FC<ILayoutLinks> = ({ title, data }) => {
  return (
    <div className="flex flex-col w-full text-center items-center mb-4">
    <p className="text-4xl font-semibold text-black my-6">{title}</p>
    <div className={`grid grid-cols-4 mt-8 gap-10`}>
      {data.map((item: ILinks) => {
        return (
          <Link key={item.id} className="col-span-1 " to={item.href}>
            <img 
            src={item.src}
            className={`w-32 h-32 object-scale-down '}`}
             alt={item.alt} />
          </Link>
        );
      })}
    </div>
  </div>
  )
}

export default Companies
