import axios from "axios";
import { useEffect, useState } from "react";

function Error() {

    const fetchUsersURL = "https://portal.rsubs.org/api/users";
    const [userData, setUserData] = useState([])
    useEffect(() => {





    }, [])


    const handleClick = async () => {
        console.log('clicked');
        const token = localStorage.getItem('token')

        console.log(token);

        if (token) {
            try {
                const res = await axios.get(fetchUsersURL, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                console.log(res.data);

                res?.data.map((users) => {
                    users['email'] === localStorage.getItem('email') ?
                        setUserData(users)
                        : 'could not find user'

                })
            } catch (error) {
                console.log(error);

            }

        }
        else {
            console.log('token expired');

        }
    }

    return (

        <div>
            <h1 className="text-center text-blue-700 text-[2rem] " onClick={() => {
                handleClick()
            }} >
                Error page
            </h1>

            <p>
                {userData.name}
            </p>
            <p>
                {userData.email}
            </p>
            

        </div>


    )

}



export default Error;
