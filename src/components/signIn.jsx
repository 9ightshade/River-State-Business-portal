import axios from "axios";
import bgimage from "../assets/png/background_img.png"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




function SignIn() {


    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const data = {
        email: email,
        password: password
    };

    // Api endpoints
    const loginURL = "https://portal.rsubs.org/api/users/login";
    const fetchUsersURL = "https://portal.rsubs.org/api/users";

    const checkUserRole = (user, loginEmail) => {
        if (user['email'] === loginEmail) {
            localStorage.setItem('userId', user._id)
            localStorage.setItem('userRole', user.role)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (data.email && data.password) {
            localStorage.setItem('email', data.email)
            const loginEmail = localStorage.getItem('email')
            console.log(localStorage.getItem('email'));

            try {
                const getResponse = await axios.post(loginURL, data)
                localStorage.setItem('token', getResponse.data.token)

                const token = localStorage.getItem('token')
                const fetchResponse = await axios.get(fetchUsersURL, {
                    headers: { Authorization: `Bearer ${token}` }
                })

                const users = fetchResponse.data

                users?.map((user) => {
                    checkUserRole(user, loginEmail)
                })

                const userId = localStorage.getItem('userId')
                console.log(userId);
                const userRole = localStorage.getItem('userRole');
                console.log(userRole);


                userRole === 'admin' && navigate('/admin')
                userRole === 'student' && navigate('/application')


            } catch (error) {
                console.log(error);
                // navigate('/error')
            }


        }
    }



    return (
        <div className="h-[81vh] flex justify-center py-5" style={{ backgroundImage: `url(${bgimage})`, backgroundRepeat: "no-repeat" }}>
            <div className='bg-[#F3F1F1]  p-10 shadow-md shadow-gray-500 rounded-[1em]  '>
                <h3 className='text-center text-[36px] text-[#39447F] font-black'>Log in</h3>
                <form className='mt-5' onSubmit={handleSubmit}>
                    <div>
                        <div> <label className='my-2 cursor-pointer' htmlFor="email">Email </label></div>

                        <input className='w-full p-4 my-2 bg-white outline-none  ' id="email" type="email" required placeholder='Email*' onChange={(e) => { setEmail(e.target.value) }} name='email' />
                    </div>

                    <div>
                        <div><label className='my-2 cursor-pointer' htmlFor="password">Password </label></div>

                        <input className='w-full p-4 my-2 bg-white outline-none' id="password" required type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} name='password' />
                    </div>

                    <button type="submit" className='bg-[#39447F] w-full py-2 text-center my-3 rounded text-white hover:bg-[#39449F] '

                    >Submit</button>
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