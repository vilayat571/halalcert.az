import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        className="w-auto object-cover h-28"
        alt="The logo of AzeSert Halal"
      />
    </Link>
  );
};

export default Logo;
