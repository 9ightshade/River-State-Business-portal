function Transcript() {

    return (
        <form className="bg-white flex flex-col gap-3 text-gray-500 p-4" >
            <h1>
                Request Transcript
            </h1>

            <input type="text" name="fullName" id="fullName" placeholder="Fullname" className="bg-gray-100 py-2 px-4 rounded" />

            <input type="text" name="registrationNumber" id="registrationNumber" placeholder="Reg no:" className="bg-gray-100 py-2 px-4 rounded" />

            <input type="email" name="emailAddress" id="emailAddress" placeholder="Email" className="bg-gray-100 py-2 px-4 rounded" />

            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" className="bg-gray-100 py-2 px-4 rounded" />


            <input type="text" name="courseOfStudy" id="courseOfStudy" placeholder="Course/Field of Study:" className="bg-gray-100 py-2 px-4 rounded" />
        </form>
    )
}

export default Transcript;