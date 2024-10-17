import axios from "axios";
import bgimage from "../assets/png/background_img.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function SignUp() {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate;
    const data = {
        name: fullname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        role: "student"
    };

    const URL = "https://portal.rsubs.org/api/users/signup";
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        try {
            const response = await axios.post(URL, data, )
            console.log(response.data);
            console.log("success navigate to login");
            // navigate("/")
           
            

        } catch (error) {
            console.log(error.data);
            // navigate("/error")
            
        }
    };


    return (

        <div className="h-[81vh] flex justify-center py-3" style={{ backgroundImage: `url(${bgimage})`, backgroundRepeat: "no-repeat" }}>
            <div className='bg-[#F3F1F1] p-10 shadow-md shadow-gray-500 rounded-[10px]  '>
                <h3 className='text-center text-[36px] text-[#39447F] font-black'>Register</h3>
                <form className='mt-5' onSubmit={handleSubmit}>
                    <div>
                        <input className='w-full p-2 outline-none my-2 bg-white' type="email" placeholder='Email*' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    
                    <div>
                        <input className='w-full p-2 outline-none my-2 bg-white' type="text" placeholder='Full Name' name='name' onChange={(e) => { setFullName(e.target.value) }} />
                    </div>

                    
                    <div>
                        <input className='w-full p-2 outline-none my-2 bg-white' type="password" placeholder='Password' name='password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>

                    
                    <div>
                        <input className='w-full p-2 outline-none my-2 bg-white' type="password" placeholder='Confirm Password' name='confirmPassword' onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </div>

                    <input type='submit' value="Submit" className='bg-[#39447F] w-full py-2 text-center my-2 cursor-pointer rounded text-white' />
                    
                    <p className='text-[#39447F] text-[1em] text-center hover:underline cursor-pointer '>
                        <Link to="/">
                            Already have an account?
                            <span className='font-bold'>Log in </span></Link>
                    </p>
                </form>
            </div>
        </div>
    )
}



export default SignUp;