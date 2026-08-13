import { assets } from "@/assets/assets"
import NewsLetter from "@/components/NewsLetter"
import HeadingText from "@/sharedComponents/HeadingText"

const Contact = () => {
  return (
    <section aria-labelledby="title-contactPage" className="px-4 md:px-8 pb-10">
      <div className="w-full bg-gray-200 h-px mb-8"></div>
      <HeadingText myClass={"justify-center"} id={"title-contactPage"} text1={"Contact"} text2={"us"}/>

      {/* INFO */}
      <div className="mt-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full">
          <img className="w-full" src={assets.contact_img} alt="ContactUs-Image" />
        </div>
        <div className="w-full">
          <h2 className="text-[#4E4E4E] font-semibold text-[24px] uppercase">Our store</h2>
          <p className="mt-8 text-[#6D6D6D] text-base md:text-[18px] font-normal">
            54709 Willms Station 
            Suite 350, Washington, USA
          </p>
          <div className="mt-8 flex flex-col gap-1">
            <p className="text-[#6D6D6D] text-base md:text-[18px]font-normal">Tel: (415) 555-0132</p>
            <p className="text-[#6D6D6D] text-base md:text-[18px] font-normal">Email: greatstackdev@gmail.com</p>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <h3 className="text-[#4E4E4E] font-semibold text-[24px] uppercase">Careers at Forever</h3>
            <p className="text-[#6D6D6D] text-base md:text-[18px] font-normal">
              Learn more about our teams and job openings.
            </p>
            <button className="cursor-pointer border border-[#000000] bg-white w-42.75 h-15.5 text-[#303030] text-base font-normal transition-all duration-500 hover:bg-[#000000] hover:text-white">Explore Jobs</button>
          </div>
        </div>
      </div>
      {/* NEWSLETTER */}
      <div className="mt-10">
        <NewsLetter />
      </div>
    </section>
  )
}

export default Contact