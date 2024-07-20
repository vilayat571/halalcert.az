import Anchor from "./Anchor";
import Hrefs from "./Hrefs";

const Navbarhrefs = () => {
  return (
    <div
      id="navbar"
      className="px-10 py-4 w-full rounded bg-[#067E45] text-white flex justify-between items-center"
    >
      <Hrefs />
      <Anchor
        href="https://wa.me/994507269899"
        style="px-5 mr-4 py-3 text-sm 
          border-white rounded border-[1px]
           xl:block lg:block sm:hidden md:hidden"
        target={true}
        label="Phone number: +994507269899"
        text=" Müraciət edin"
      />
    </div>
  );
};

export default Navbarhrefs;
