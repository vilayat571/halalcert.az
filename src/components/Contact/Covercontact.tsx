import Anchor from "../Navbar/Anchor";

const Covercontact = () => {
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
      <p className="text-center text-white 
          xl:text-5xl lg:text-4xl md:text-2xl sm:text-4xl mb-2  
          leading-[120px]
           sm:my-1 xl:my-4 lg:my-4 md:my-3 ">
          AzeSERT Halal 
          <br />
         Bizimlə Əlaqə
          </p>
        <Anchor
          href="https://wa.me/994553430353"
          style="px-2 text-center rounded py-4 text-sm 
    bg-[#29a829] text-white  w-32 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0"
          target={true}
          label="Phone number: ++994 55 343 03 53"
          text="Ətraflı"
        />
      </div>
    </div>
    </>
  )
}

export default Covercontact
