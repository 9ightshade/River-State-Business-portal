import { useState } from "react";
import bgimage from "../assets/png/background_img.png"
import axios from "axios";

function Reset() {

    const [email, setEmail] = useState("");
    let errorMessage;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        setEmail(formData.get("email"));


        console.log(`Email:${email}`);


        try {
            const response = await axios.post("api endpoint", {
                email: email,
            })
            console.log(`success`);
            console.log(response);


        } catch (error) {
            errorMessage = error.message;
            console.log(errorMessage);

        }

    }

    return (

        <div className=" h-[80vh] flex justify-center items-center " style={{
            backgroundImage: `url(${bgimage})`
        }} >

            <form action="" method="post" className="login-form" onSubmit={handleSubmit} >
                <h1 className="text-[#172554] text-center text-[3rem] font-bold " >
                    Reset Password
                </h1>
                <label htmlFor="email" className="text-[#374151] cursor-pointer text-[20px]" >
                    Email
                    <div>
                        <input type="email" name="email" id="email" placeholder="email" className="  py-1 px-3 rounded outline-none w-full"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                </label>




                <button type="submit" className="text-white w-full py-2 rounded my-3 text-[1.4rem] bg-[#172554] hover:bg-[#111c41] mt-8" >
                    Confirrm
                </button>
            </form>

        </div>


    )

};

export default Reset;