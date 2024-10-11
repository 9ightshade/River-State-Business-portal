function PersonalInfo({ nextStep, handleChange, values }) {

    return (

        <div className="text-gray-500 text-[1.1rem] outline-none" >
            <div className="title" >
                <label htmlFor="title">
                    Title
                </label>
                <select name="title" id="title" className="block p-3 outline-none w-1/2 my-4" >
                    <option value="select">--Select--</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                    <option value="Miss">Miss</option>
                    <option value="Prof">Prof</option>
                </select>
            </div>

            <div className="email my-3 " >
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name="email" id="email" className="block p-2 w-1/2" />
            </div>


            <div className="names flex justify-between " >
                <div>
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input type="text" name="firstName" id="firstname" className="block p-2 " />
                </div>
                <div>
                    <label htmlFor="middlename">
                        Middle Name
                    </label>
                    <input type="text" name="middleName" id="middlename" className="block p-2 " />
                </div>
                <div>
                    <label htmlFor="lastname">
                        Last Name
                    </label>
                    <input type="text" name="lastName" id="lastname" className="block p-2 " />
                </div>
            </div>

            <div className="flex items-center gap-4  justify-between flex-wrap md:flex-nowrap my-3" >
                <div className="basis-1/3" >
                    <label htmlFor="gender">
                        Sex
                    </label>
                    <select name="sex" id="gender" className="block p-3 outline-none my-1 w-full" >
                        <option value="select">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="basis-1/3">
                    <label htmlFor="marital-status">
                        Marital Status
                    </label>
                    <select name="maritalStatus" id="marital-status" className="block p-3 outline-none my-1 w-full" >
                        <option value="select">--Select--</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
                </div>

                <div className="basis-1/3">
                    <label htmlFor="date-of-birth">
                        Date Of Birth
                    </label>
                    <input type="date" name="dateOfBirth" id="date-of-birth" className="block p-2 w-full" />
                </div>

            </div>


            <div className="address" >
                <label htmlFor="address">
                    Address
                </label>
                <textarea name="address" id="address" className="w-full block" ></textarea>
            </div>


            <div className="flex  justify-between py-2" >
                <div className="religion" >
                    <label htmlFor="religion">
                        Religion
                    </label>
                    <select name="religion" id="religion" className="block" >
                        <option value="select">--Select--</option>
                        <option value="Christian">Christian</option>
                        <option value="Muslim">Muslim</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className="phone" >
                    <label htmlFor="phone">
                        Phone
                    </label>
                    <input type="tel" name="phone" placeholder="Your Phone Number" id="phone" className="block" />
                </div>



                <div className="disabilities" >
                    <label htmlFor="disabilities">
                        Disability
                    </label>
                    <textarea name="physicalChallenge" id="disablity" className="w-full block" ></textarea>
                </div>
            </div>

            <div className="photo mb-3 " >
                <label htmlFor="photo">
                    Upload Photo
                </label>
                <input type="file" name="photo" id="photo" className="block" />
            </div>

        </div>


    )
}


export default PersonalInfo;