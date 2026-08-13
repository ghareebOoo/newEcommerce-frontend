import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 pt-10 pb-5">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-4 border-b border-[#BDBDBD] pb-8">
            <div className="w-full">
                <NavLink aria-label="Home" to='/'>
                    <img src={assets.logo} className="w-30 md:w-36" alt="logo-image"/>
                </NavLink>
                <p className="text-center md:text-start mt-8 text-[#595959] text-base md:text-[18px] font-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-around gap-4 md:gap-8">
                <nav aria-label="Our-data" className="flex flex-col gap-4">
                    <h3 className="hidden md:block text-[#5A5A5A] text-[22px] font-semibold uppercase">Company</h3>
                    <ul className="flex flex-row md:flex-col items-center md:items-start justify-center flex-wrap gap-2">
                        <li className="text-[#595959] text-base md:text-[18px] font-normal">Home</li>
                        <li className="text-[#595959] text-base md:text-[18px] font-normal">About Us</li>
                        <li className="text-[#595959] text-base md:text-[18px] font-normal">Delivery</li>
                        <li className="text-[#595959] text-base md:text-[18px] font-normal">Privacy Policy</li>
                    </ul>
                </nav>

                <nav aria-label="Our-social" className="flex flex-col gap-4">
                    <h3 className="hidden md:block text-[#5A5A5A] text-[22px] font-semibold uppercase">Get in touch</h3>
                    <ul className="flex flex-row md:flex-col items-center md:items-start justify-center flex-wrap gap-2">
                        <li className="text-[#595959] text-base md:text-[18px] font-normal">+1-212-456-7890</li>
                        <li className="text-[#595959] text-base md:text-[18px] font-normal">greatstackdev@gmail.com</li>
                    </ul>
                </nav>
            </div>
        </div>
        <p className="mt-3 text-center text-[#565656] text-base md:text-[18px]">Copyright 2024 © GreatStack.dev - All Right Reserved.</p>
    </footer>
  )
}

export default Footer