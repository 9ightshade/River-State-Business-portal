import axios from "axios";
import bgimage from "../assets/png/background_img.png"
import { useEffect, useState } from "react";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    let errorMessage;
    const URL = "https://portal.rsubs.org/api/users/login";
    const storeUrl = "https://fakestoreapi.com/products/categories";





    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        setEmail(formData.get("email"));
        setPassword(formData.get("password"));

        console.log(`Email:${email}`);
        console.log(`password:${password}`);

        try {
            const response = await axios.post("https://portal.rsubs.org/api/users/login", {
                email: email,
                password: password
            })
            console.log(`success`);
            console.log(response);


        } catch (error) {
            errorMessage = error.message;
            console.log(errorMessage);

        }
    }


    //fetch endpoint
    useEffect(() => {
        try {
            const response = axios.get(storeUrl);
            setData(response.data);
            console.log(data);

        } catch (error) {
            console.log("error code testing", error);
        }

    }, []);



    return (

        <div className="login-page h-[80vh] flex justify-center items-center " style={{
            backgroundImage: `url(${bgimage})`
        }} >

            <form action="" method="post" className="login-form" onSubmit={handleSubmit} >
                <h1 className="text-[#172554] text-center text-[3rem] font-bold " >
                    Login
                </h1>
                <label htmlFor="email" className="text-[#374151] cursor-pointer text-[20px]" >
                    Email
                    <div>
                        <input type="email" name="email" id="email" placeholder="email" className="outline  py-1 px-3 rounded outline-none"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                </label>

                <label htmlFor="password" className="text-[#374151] cursor-pointer text-[20px]" >
                    Password
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" className="  py-1 px-3 rounded outline-none"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                </label>


                <button type="submit" className="text-white w-full py-2 rounded my-3 text-[1.4rem] bg-[#172554] hover:bg-[#111c41] mt-8" >
                    Log in
                </button>


                <div className="flex justify-between text-[#172554] gap-5" >
                    <p className="hover:underline cursor-pointer" >
                        Don&apos;t  have an account
                    </p>
                    <p className="hover:underline cursor-pointer" >
                        Create Profile
                    </p>
                </div>


            </form>
        </div>

    )

}

export default SignIn;