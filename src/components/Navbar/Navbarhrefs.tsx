import Anchor from "./Anchor";
import Hrefs from "./Hrefs";

const Navbarhrefs = () => {
  return (
    <div
      id="navbar"
      className="
      xl:px-10 lg:px-10 md:px-0 sm:px-0 
      py-4 w-full xl:rounded lg:rounded md:rounded-0 sm:rounded-0  bg-[#067E45] text-white 
      xl:flex lg:flex md:hidden sm:hidden
      flex justify-between items-center"
    >
      <Hrefs style={'flex flex-row gap-5 text-white'} />
      <Anchor
        href="https://wa.me/994553430353"
        style="px-5  py-3 text-sm 
          border-white rounded border-[1px]
           xl:block lg:block sm:hidden md:hidden"
        target={true}
        label="Phone number: +994 55 343 03 53"
        text=" Müraciət edin"
      />
    </div>
  );
};

export default Navbarhrefs;
