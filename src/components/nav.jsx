import logo from "../assets/svg/logo.svg";
// import hamburger from "../assets/svg/hamburger-menu.svg";
// import dropdown from "../assets/svg/Vector.svg";

function Nav() {
    return (

        <div className="nav" >

            <div className="logo" >
                <img src={logo} alt="River state logo" />
            </div>


            <nav>
                <ul>
                    <li>
                        Home
                    </li>

                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Portal
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Alumni
                    </li>

                </ul>
            </nav>

        </div>


    )
}

export default Nav;