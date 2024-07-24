import Docs from "./Docs"
import Lawslink from "./Lawslink"

const LawMain = () => {
  return (
    <div className="py-16  w-full xl:px-32 lg:px-32 md:px-12 sm:px-10">
    <Lawslink />
    <hr className="my-10 bg-[#555454] border-[#d6d6d6]" />
    <Docs />
  </div>
  )
}

export default LawMain
