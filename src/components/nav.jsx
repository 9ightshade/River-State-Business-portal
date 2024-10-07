import logo from "../assets/svg/logo.svg";
import hamburger from "../assets/svg/hamburger-menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
Link
// import dropdown from "../assets/svg/Vector.svg";

function Nav() {

    // eslint-disable-next-line no-undef
    const [isVisible, setIsVisible] = useState(false);

    const toogleSideNav = () => {
        setIsVisible(!isVisible)
        console.log(isVisible);
        
    }


    return (

        <div className=" flex items-center justify-between gap-1 p-2 text-[1.2vw] " >

            <div className="logo cursor-pointer w-[20%] max-w-[30%]  " >
                <a href="https://rsubs.org/">
                    <img src={logo} alt="River state logo" className="w-full" />
                </a>
            </div>


            <nav className="hidden md:block " >
                <ul className="flex justify-between gap-4  " >
                    <li className="hover:text-[#6b7280] cursor-pointer " >
                        Home
                    </li>

                    <li className="hover:text-[#6b7280] cursor-pointer ">
                        About Us
                    </li>
                    <li className="hover:text-[#6b7280] cursor-pointer ">
                        Contact Us
                    </li>
                    <li className="hover:text-[#6b7280] cursor-pointer ">
                        Portal
                    </li>
                    <li className="hover:text-[#6b7280] cursor-pointer ">
                        Privacy Policy
                    </li>
                    <li className="hover:text-[#6b7280] cursor-pointer ">
                        Alumni
                    </li>

                </ul>
            </nav>

            <button className="bg-[#1e3a8a] text-[#f5f5f5] hidden md:block py-2 px-3 rounded cursor-pointer" >
                <Link to="/register" >
                    Create Profile
                </Link>
            </button>
            <button className="block md:hidden w-[8%]  " onClick={() => { toogleSideNav() }}  >
                <img src={hamburger} alt="toogle navbar" className="w-full" />
            </button>

        </div>


    )
}

export default Nav;