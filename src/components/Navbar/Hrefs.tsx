import { Link } from "react-router-dom";
import { hrefsData } from "../../constants/Navbar/Hrefs";

const Hrefs = ({style}:{style:string}) => {
  return (
    <div className={` ${style} tracking-widest`}>
      {hrefsData.map((item) => {
        return (
          <Link key={item.id} to={item.link} className="text-base ">
            {item.text}
          </Link>
        );
      })}
    </div>
  );
};

export default Hrefs;
