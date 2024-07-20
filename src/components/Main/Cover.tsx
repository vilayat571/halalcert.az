import Anchor from "../Navbar/Anchor";

const Cover = () => {
  return (
    <>
      <img
        className="w-full object-cover h-[600px]"
        src="https://www.mynewlab.com/wp-content/uploads/elementor/thumbs/iStock-1314329972-q34phynb2v4pc6k2dgkbm7n1gc6ou19hkpwme91jms.jpg"
        alt="the image of Azercett website"
      />
      <div className="w-full  bg-black opacity-70 absolute top-100 h-[600px]"></div>
      <div className="w-full  flex items-center justify-center absolute top-100 h-[600px]">
        <div className="flex flex-col items-center">
          <p className="text-white text-center font-semibold text-3xl mb-1">
            AzeSERT HALAL MMC
          </p>
          <p className="text-center text-white text-5xl tracking-wider leading-[60px] my-3 ">
            Halal məhsulların
            <br />
            Sertifikatlaşdırılması Orqanı
          </p>
          <Anchor
            href="https://wa.me/994507269899"
            style="px-2 text-center rounded py-4 text-sm 
 bg-[#29a829] text-white  w-32 mt-3"
            target={true}
            label="Phone number: +994507269899"
            text="Ətraflı"
          />
        </div>
      </div>
    </>
  );
};

export default Cover;
