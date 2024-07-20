import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface INavItemInfo {
  title: string;
  text: string;
  icon: IconProp;
}
const Navinfoitem: React.FC<INavItemInfo> = ({ title, text, icon }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <FontAwesomeIcon
        icon={icon}
        className="text-[#1f965e] text-3xl rotate-15 "
      />

      <p className="flex flex-col ">
        <span className="font-semibold text-[16px]"> {title} </span>
        <span className="text-[14px] ">{text}</span>
      </p>
    </div>
  );
};

export default Navinfoitem;
