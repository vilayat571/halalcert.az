import Anchor from "../Navbar/Anchor";

const CoverAbout = () => {
  return (
    <>
      <img
        className="w-full object-cover h-[600px]"
        src="https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-new-website.s3.ap-south-1.amazonaws.com%2Fimages%2Ftrip%2Faf2f8bc2-682e-4fd0-8b91-eae6ca8610f8.webp&w=3840&q=80"
        alt="the image of Azercett website"
      />
      <div className="w-full  bg-black opacity-70 absolute top-100 h-[600px]"></div>
      <div className="w-full  flex items-center justify-center absolute top-100 h-[600px]">
        <div className="flex flex-col items-center">
          <p className="text-white text-center font-semibold text-2xl ">
            AzeSERT HALAL MMC
          </p>
          <p className="text-center text-white text-3xl tracking-wider leading-[60px] ">
            Biz kimik?
          </p>
          <Anchor
            href="#about"
            style="px-2 text-center rounded py-4 text-sm 
    bg-[#29a829] text-white  w-32 mt-0"
            target={false}
            label="Learn more link"
            text="Ətraflı"
          />
        </div>
      </div>
    </>
  );
};

export default CoverAbout;
