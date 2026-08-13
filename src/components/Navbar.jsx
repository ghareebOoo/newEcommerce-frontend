import { useMemo } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { useEcommerceContext } from "../../hooks/useEcommerceContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCartContext } from "../../hooks/useCartContext";

const Navbar = () => {

    const adminUrl = import.meta.env.VITE_ADMIN_URL

    const {showNavMobile , setShowNavMobile , setShowInputSearch} = useEcommerceContext();
    const {logOut} = useAuthContext();
    const {cartCount} = useCartContext();

    const location = useLocation();

    const navigate = useNavigate();

    const navLinks = useMemo(()=>(
        [
            {
                label: "Home",
                href: '/'
            },
            {
                label: "Collection",
                href: '/collection'
            },
            {
                label: "About",
                href: '/about'
            },
            {
                label: "Contact",
                href: '/contact'
            },
        ]
    ),[])
  return (
    <>
    {!showNavMobile &&  <header className={`px-4 md:px-8 py-8 flex items-center justify-between`}>
        {/* LOGO */}
        <NavLink aria-label="Home" to='/'>
           <img src={assets.logo} className="w-30 md:w-36" alt="logo-image"/>
        </NavLink>
        
        {/* DESKTOP NAV */}
        <nav aria-label="main navigation" className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-4">
                {navLinks.map((link , index)=>(
                    <NavLink key={index} to={link.href} className={`${location.pathname === link.href ? "before:absolute before:top-6 before:left-[50%] before:translate-x-[-50%] before:w-12 before:h-0.5 before:bg-[#303030]" : ""} relative text-[16px] font-medium uppercase text-[#2A2A2A]`}>{link.label}</NavLink>
                ))}
            </ul>
            <button onClick={()=> window.open(adminUrl , '_blank')} className="p-2 text-[#2A2A2A] text-[12px] lg:text-base font-medium border border-[#C7C7C7] rounded-2xl cursor-pointer">Admin Panel</button>
        </nav>

        {/* ICONS: SEARCH PRFILE LOGIN CART */}
        <div className="flex items-center gap-4 relative">
            <button className="cursor-pointer" onClick={()=> setShowInputSearch(true)}>
                <img className="w-6" src={assets.search_icon} alt="search-icon"/>
            </button>
            <button onClick={()=> navigate("/login")} aria-label="Login" className="peer cursor-pointer">
                <img className="w-6 cursor-pointer" src={assets.profile_icon} alt="profile-icon"/>
            </button>
            <div className="p-2 flex flex-col gap-2 invisible absolute top-12 -left-8 w-40 h-26 bg-white shadow-md rounded-md transition-all duration-500 peer-hover:visible hover:visible">
                <NavLink to='/orders' className="text-[#2A2A2A] font-medium text-base">Orders</NavLink>
                <NavLink to='/updatePassword' className="text-[#2A2A2A] font-medium text-base">UpdatePassword</NavLink>
                <button onClick={()=> logOut()} aria-label="logout" className="text-start cursor-pointer text-[#2A2A2A] font-medium text-base">Logout</button>
            </div>
            <NavLink to="/cart" aria-label="icon-cart" className="cursor-pointer relative">
                <img className="w-6 cursor-pointer" src={assets.cart_icon} alt="cart-icon"/>
                <span className="absolute top-5 left-[20%] text-[13px] font-normal w-7 h-7 rounded-full flex items-center justify-center bg-black text-white">{cartCount}</span>
            </NavLink>
            <button onClick={()=> setShowNavMobile(true)} aria-label="menu open" className="cursor-pointer md:hidden">
                <img src={assets.menu_icon} className="w-6" alt="menu-icon"/>
            </button>
        </div>
    </header>}
   
    <aside aria-label="sidebar-navigation" className={`${showNavMobile ? "translate-x-0" : "translate-x-full"} transition-all duration-500 bg-[#2A2A2A] py-8 fixed h-screen top-0 z-50 w-full shadow-md`}>
        <button onClick={()=> setShowNavMobile(false)} aria-label="menu close" className="cursor-pointer absolute top-8 right-5">
            <img src={assets.cross_icon} alt="close-icon" className="w-6"/>
        </button>
        <ul aria-label="mobile navigation" className="mt-10 flex flex-col">
            {navLinks.map((link , index)=>(
                <div onClick={()=> setShowNavMobile(false)} key={index} className={`${location.pathname === link.href ? "bg-black" : ""} px-4 md:px-8 py-2 border border-[#c7c7c7]`}>
                    <NavLink to={link.href} className="text-[16px] font-medium uppercase text-white">{link.label}</NavLink>
                </div>
            ))}
        </ul>
    </aside>
    </>
  )
}

export default Navbar