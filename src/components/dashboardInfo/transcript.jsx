function Transcript() {

    return (
        <form className="bg-white flex flex-col gap-3 text-gray-500 p-4" >
             <h1 className="" >
                Request Transcript
            </h1> 

            <input type="text" name="fullName" id="fullName" placeholder="Fullname" required className="bg-gray-100 py-2 px-4 rounded" />

            <input type="text" required name="registrationNumber" id="registrationNumber" placeholder="Reg no:" className="bg-gray-100 py-2 px-4 rounded" />

            <input type="email" required name="emailAddress" id="emailAddress" placeholder="Email" className="bg-gray-100 py-2 px-4 rounded" />

            <input type="tel" required name="phoneNumber" id="phoneNumber" placeholder="Phone Number" className="bg-gray-100 py-2 px-4 rounded" />


            <input type="text" required name="courseOfStudy" id="courseOfStudy" placeholder="Course/Field of Study:" className="bg-gray-100 py-2 px-4 rounded" />

            <input type="number" required name="admissionYear" id="admissionYear" placeholder="Admission Year" className="bg-gray-100 py-2 px-4 rounded" />
            <input type="number" required name="graduationYear" id="graduationYear" placeholder="Graduation Year" className="bg-gray-100 py-2 px-4 rounded" />
            <input type="email" required name="recieverEmail" id="recieverEmail" placeholder="Reciever Email" className="bg-gray-100 py-2 px-4 rounded" />
            <input type="text" required name="organizationName" id="organizationName" placeholder="Organization Name" className="bg-gray-100 py-2 px-4 rounded" />

            <input type="submit" value="Request Transcript"  className="bg-blue-900 text-white py-3 rounded" />
        </form>
    )
}

export default Transcript;