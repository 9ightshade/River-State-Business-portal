import logo from "../assets/svg/logo.svg";
// import hamburger from "../assets/svg/hamburger-menu.svg";
// import dropdown from "../assets/svg/Vector.svg";

function Nav() {
    return (

        <div className="nav flex items-center justify-between py-3 px-2" >

            <div className="logo cursor-pointer" >
                <a href="https://rsubs.org/">
                    <img src={logo} alt="River state logo" />
                </a>
            </div>


            <nav >
                <ul className="flex justify-between gap-8 " >
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

<button className="bg-[#1e3a8a] text-[#f5f5f5] py-2 px-3 rounded cursor-pointer" >
    Create Profile
</button>


        </div>


    )
}

export default Nav;