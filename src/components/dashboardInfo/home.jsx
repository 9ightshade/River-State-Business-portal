import { useEffect, useState } from "react";
import axios from "axios";
import profilePic from "../../assets/jpeg/testPassport.jpg"
function Home() {
    const [userData, setUserData] = useState([])
    const fetchUsersURL = "https://portal.rsubs.org/api/users";
    


    return (
        <div className="flex justify-between p-3 text-gray-500 gap-4" >
            <div className="upcoming-class bg-white p-5 w-1/2" >
                <h2>
                    Upcoming Classes/Events
                </h2>
            </div>

            <div className="profile bg-white p-5 flex flex-col gap-3 w-1/2 " >
                <h2>
                    Profile Details
                </h2>
                <div className="flex items-center gap-2 "  >
                    <div className="profile-pic w-[50px]  " >
                        <img src={profilePic} alt="#" className="w-full rounded-full" />
                    </div>
                    <p>
                    {userData.name}
                    </p>
                </div>

                <p className="email" >
                {userData.email}
                </p>
                <p className="phone-number" >
                    0802389911
                </p>
            </div>
        </div>
    )
}

export default Home;