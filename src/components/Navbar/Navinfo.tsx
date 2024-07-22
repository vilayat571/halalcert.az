import { navinfoitems } from "../../constants/Navbar/Navitems";
import Navinfoitem, { INavItemInfo } from "../../atoms/Navbar/Navinfoitem";
const Navinfo = () => {
  return (
    <div id="info" className="flex flex-row items-center gap-6">
      {navinfoitems.map((item: INavItemInfo) => {
        return (
          <Navinfoitem key={Math.random()} text={item.text} icon={item.icon} title={item.title} />
        );
      })}
    </div>
  );
};

export default Navinfo;
