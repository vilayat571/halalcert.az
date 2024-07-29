import Anchor from "../Navbar/Anchor";

const CoverNews = () => {
  return (
    <>
      <img
        className="w-full object-CoverNews xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]"
        src="https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-new-website.s3.ap-south-1.amazonaws.com%2Fimages%2Ftrip%2Faf2f8bc2-682e-4fd0-8b91-eae6ca8610f8.webp&w=3840&q=80"
        alt="the image of Azercett website"
      />
      <div className="w-full  bg-black opacity-70 absolute top-100 xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]"></div>
      <div className="w-full  flex items-center justify-center absolute top-100 xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]">
        <div className="flex flex-col items-center">
          <p className="text-white text-center font-semibold xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl mb-1">
            AzeSERT HALAL MMC
          </p>
          <p className="text-center text-white xl:text-5xl lg:text-5xl md:text-2xl sm:text-2xl  leading-[60px] my-3 ">
            Xəbərlər
            <br />
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

export default CoverNews;
