import axios from "axios";
import bgimage from "../assets/png/background_img.png"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/userAuth";



function SignIn() {

    const { accessToken, setAccessToken, users, setUsers } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const data = {
        email: email,
        password: password
    };
    const loginURL = "https://portal.rsubs.org/api/users/login";
    const fetchUsersURL = "https://portal.rsubs.org/api/users";
    const navigate = useNavigate();


    useEffect(() => {
        if (accessToken) {
            try {
                const res = axios.get(fetchUsersURL, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                })
                console.log(res);

            } catch (error) {
                console.log(error.message);

            }
        }
    }, [accessToken])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        try {
            const res = await axios.post(loginURL, data,)
            console.log(res.data.token);
            setAccessToken(res.data.token)
            console.log(`value of access token: ${accessToken}`);
            // accessToken && navigate("/application")

        } catch (error) {
            console.log(error.message);
            navigate("/error")

        }
    };




    return (
        <div className="h-[81vh] flex justify-center py-5" style={{ backgroundImage: `url(${bgimage})`, backgroundRepeat: "no-repeat" }}>
            <div className='bg-[#F3F1F1]  p-10 shadow-md shadow-gray-500 rounded-[1em]  '>
                <h3 className='text-center text-[36px] text-[#39447F] font-black'>Log in</h3>
                <form className='mt-5' onSubmit={handleSubmit}>
                    <div>
                        <div> <label className='my-2 cursor-pointer' htmlFor="email">Email </label></div>

                        <input className='w-full p-4 my-2 bg-white outline-none  ' id="email" type="email" placeholder='Email*' onChange={(e) => { setEmail(e.target.value) }} name='email' />
                    </div>

                    <div>
                        <div><label className='my-2 cursor-pointer' htmlFor="password">Password </label></div>

                        <input className='w-full p-4 my-2 bg-white outline-none' id="password" type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} name='password' />
                    </div>

                    <button className='bg-[#39447F] w-full py-2 text-center my-3 rounded text-white hover:bg-[#39449F] '>Submit</button>
                    <p className='text-[#39447F] text-[1em] text-center hover:underline cursor-pointer hover:text-[#39449F] '>Don’t have an account?  <Link to="/register"><span className='font-bold'>Create profile</span> </Link></p>

                    <p className='text-[#39447F] text-[1em] text-center hover:underline cursor-pointer hover:text-[#39449F] '>
                        <Link to="/reset_password">
                            Forgot Your Password?
                        </Link>
                    </p>

                </form>
            </div>

        </div>

    )

}

export default SignIn;