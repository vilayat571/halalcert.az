import Anchor from "../Navbar/Anchor";

const Lawcover = () => {
  return (
    <>
    <img
      className="w-full object-cover h-[600px]"
    src="https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2022/11/_D859762-1-1667589414-1667589414.jpg"
      alt="the image of Azercett website"
    />
    <div className="w-full  bg-black opacity-50 absolute top-100 h-[600px]"></div>
    <div className="w-full  flex items-center justify-center absolute top-100 h-[600px]">
      <div className="flex flex-col items-center">
        <p className="text-white text-center font-semibold text-3xl mb-1">
          AzeSERT HALAL MMC
        </p>
        <p className="text-center text-white text-4xl tracking-wider leading-[60px] my-1 ">
          Qanunlar & Sənədlər
        </p>
        <Anchor
          href="https://wa.me/994507269899"
          style="px-2 text-center rounded py-4 text-sm 
    bg-[#29a829] text-white  w-32 mt-0"
          target={true}
          label="Phone number: +994507269899"
          text="Ətraflı"
        />
      </div>
    </div>
    </>
  )
}

export default Lawcover
