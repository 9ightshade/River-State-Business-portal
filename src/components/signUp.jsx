import axios from "axios";
import bgimage from "../assets/png/background_img.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const data = {
        fullname: fullname,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    const URL = "https://portal.rsubs.org/api/users/signup";


    useEffect(() => {
        // setData(
        //     axios.post(URL, {
        //         fullname: fullname,
        //         email: email,
        //         password: password
        //     }, {
        //         crossDomain: true,
        //         headers: {
        //             "Content-Type": "multipart/form-data"
        //         }
        //     })
        // )
        // console.log(data);


    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        try {
            const response = await axios.post(URL, data, {
                crossDomain: true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(response);

        } catch (error) {
            console.log(error.message);

        }


    };



    return (

        <div className="login-page h-[81.2vh] flex justify-center items-center " style={{
            backgroundImage: `url(${bgimage})`
        }} >

            <form action="" method="post" className="login-form" onSubmit={handleSubmit} >
                <h1 className="text-[#172554] text-center text-[3rem] font-bold " >
                    Register
                </h1>
                <label htmlFor="email" className="text-[#374151] cursor-pointer text-[20px]" >
                    Email
                    <div>
                        <input type="email" name="email" id="email" placeholder="email" className="outline w-full py-1 px-3 rounded outline-none"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                </label>


                <label htmlFor="email" className="text-[#374151] cursor-pointer text-[20px]" >
                    Fullname
                    <div>
                        <input type="text" name="fullname" id="fullname" placeholder="fullname" className="outline w-full py-1 px-3 rounded outline-none"
                            onChange={(e) => { setFullName(e.target.value) }}
                        />
                    </div>
                </label>




                <label htmlFor="password" className="text-[#374151] cursor-pointer text-[20px]" >
                    Password
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" className="  py-1 px-3 w-full rounded outline-none"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                </label>

                <label htmlFor="confirm-password" className="text-[#374151] cursor-pointer text-[20px]" >
                    Password
                    <div>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" className="  py-1 px-3 w-full rounded outline-none"
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />
                    </div>
                </label>

                <button type="submit" className="text-white w-full py-2 rounded my-3 text-[1.4rem] bg-[#172554] hover:bg-[#111c41] mt-8" >
                    Submit
                </button>


                <div className="flex justify-between text-[#172554] gap-5" >
                    <p className="hover:underline cursor-pointer" >
                        Already have an account
                    </p>
                    <Link to="/" >
                        <p className="hover:underline cursor-pointer" >
                            Login
                        </p>
                    </Link>
                </div>


            </form>
        </div>

    )

}

export default SignUp;