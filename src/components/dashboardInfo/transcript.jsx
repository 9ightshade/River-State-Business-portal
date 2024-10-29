import axios from "axios";
import { useState } from "react";

function Transcript() {


    const [data, setData] = useState({
        fullName: '',
        registrationNumber: '',
        emailAddress: '',
        phoneNumber: '',
        courseOfStudy: '',
        admissionYear: '',
        graduationYear: '',
        recieverEmail: '',
        organizationName: ''
    })
    const transcriptURL = "https://portal.rsubs.org/api/transcript-requests"


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });

        console.log(data);

    }


    const submitTranscript = async (e) => {
        e.preventDefault()

        try {
            // const token = localStorage.getItem('token')

            console.log(data);
            
            const response = await axios.post(transcriptURL, data
                // {
                //      headers: { Authorization: `Bearer ${token}` }
                // }
            )
            console.log(response.data);



        } catch (error) {
            console.log(error);

        }

    }




    return (
        <form className="bg-white flex flex-col gap-3 text-gray-500 p-4" onSubmit={submitTranscript} >
            <h1 className="font-bold text-lg" >
                Request Transcript
            </h1>
            <div className="flex gap-3" >
                <div className="flex flex-col w-1/2 gap-2" >
                    <input type="text" name="fullName" id="fullName" placeholder="Fullname" required className="bg-gray-100 py-2 px-4 rounded" onChange={
                        handleInputChange
                    } />

                    <input type="text" required name="registrationNumber" id="registrationNumber" placeholder="Reg no:" className="bg-gray-100 py-2 px-4 rounded" onChange={handleInputChange} />

                    <input type="email" required name="emailAddress" id="emailAddress" placeholder="Email" className="bg-gray-100 py-2 px-4 rounded" onChange={handleInputChange} />

                    <input type="tel" required name="phoneNumber" id="phoneNumber" placeholder="Phone Number" className="bg-gray-100 py-2 px-4 rounded" onChange={handleInputChange} />


                    <input type="text" required name="courseOfStudy" id="courseOfStudy" placeholder="Course/Field of Study:" className="bg-gray-100 py-2 px-4 rounded" onChange={handleInputChange} />
                </div>

                <div className="flex flex-col gap-2 w-1/2" >
                    <input type="number" required name="admissionYear" id="admissionYear" placeholder="Admission Year" className="bg-gray-100 py-2 px-4 rounded" onChange={handleInputChange} />
                    <input type="number" required name="graduationYear" id="graduationYear" placeholder="Graduation Year" className="bg-gray-100 py-2 px-4 rounded" onChange={handleInputChange} />
                    <input type="email" required name="recieverEmail" id="recieverEmail" placeholder="Reciever Email" className="bg-gray-100 py-2 px-4 rounded" onChange={handleInputChange} />
                    <input type="text" required name="organizationName" id="organizationName" placeholder="Organization Name" className="bg-gray-100 py-2 px-4 rounded" onChange={handleInputChange} />

                    <input type="submit" value="Request Transcript" className="block bg-blue-900 text-white py-3 cursor-pointer font-semibold rounded" />
                </div>
            </div>

        </form>
    )
}

export default Transcript;