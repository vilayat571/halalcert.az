import Anchor from "../Navbar/Anchor";

const Cover = () => {
  return (
    <>
      <img
        className="w-full object-cover xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]"
src="https://www.flydubai.com/en/media/baku_tcm8-6178.jpg"
        alt="the image of Azercett website"
      />
      <div className="w-full  bg-black opacity-70 absolute top-100 xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]"></div>
      <div className="w-full  flex items-center justify-center absolute top-100 xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]">
        <div className="flex flex-col items-center">
          <p className="text-white text-center font-semibold xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl mb-1">
            AzeSERT HALAL MMC
          </p>
          <p className="text-center text-white xl:text-5xl lg:text-5xl md:text-2xl sm:text-2xl  leading-[60px] my-3 ">
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
