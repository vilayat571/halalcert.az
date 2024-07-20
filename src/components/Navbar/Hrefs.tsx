import { Link } from "react-router-dom";
import { hrefsData } from "../../constants/Navbar/Hrefs";

const Hrefs = () => {
  return (
    <div className="flex flex-row gap-4">
      {hrefsData.map((item) => {
        return (
          <Link key={item.id} to={item.link} className="text-white text-base ">
            {item.text}
          </Link>
        );
      })}
    </div>
  );
};

export default Hrefs;
