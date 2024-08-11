import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      className="w-auto object-cover h-28"
      alt="The logo of AzeCert MMC"
    />
  );
};

export default Logo;
