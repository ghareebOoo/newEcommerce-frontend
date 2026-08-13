import { assets } from "@/assets/assets"
import NewsLetter from "@/components/NewsLetter"
import HeadingText from "@/sharedComponents/HeadingText"

const About = () => {
  return (
    <section aria-labelledby="title-aboutPage" className="px-4 md:px-8 pb-10">
      <div className="w-full bg-gray-200 h-px mb-8"></div>
      <HeadingText myClass={"justify-center"} id={"title-aboutPage"} text1={"About"} text2={"us"}/>
      {/* DESCRIPTION */}
      <div className="mt-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full">
          <img className="w-full" src={assets.about_img} alt="AboutUs-Image" />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-[#6D6D6D] font-normal text-base md:text-[18px]">
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p className="text-[#6D6D6D] font-normal text-base md:text-[18px]">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.          </p>
          <h3 className="text-[#343434] font-semibold text-[20px]">
            Our Mission
          </h3>
          <p className="text-[#6D6D6D] font-normal text-base md:text-[18px]">
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.          </p>
        </div>
      </div>
      
      {/* INFORMATION */}
      <div className="mt-10">
        <HeadingText myClass={"justify-start"} text1={"Why"} text2={"Choose Us"}/>
        <div className="mt-5 flex flex-col lg:flex-row">
          <div className="w-full border border-[#ABABAB] p-16 flex flex-col gap-2">
            <h3 className="text-[18px] font-semibold text-[#2A2A2A]">Quality Assurance:</h3>
            <p className="text-[#6D6D6D] font-normal text-base md:text-[18px]">
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>
          <div className="w-full border border-[#ABABAB] p-16 flex flex-col gap-2">
            <h3 className="text-[18px] font-semibold text-[#2A2A2A]">Quality Assurance:</h3>
            <p className="text-[#6D6D6D] font-normal text-base md:text-[18px]">
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>
          <div className="w-full border border-[#ABABAB] p-16 flex flex-col gap-2">
            <h3 className="text-[18px] font-semibold text-[#2A2A2A]">Quality Assurance:</h3>
            <p className="text-[#6D6D6D] font-normal text-base md:text-[18px]">
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
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

export default About