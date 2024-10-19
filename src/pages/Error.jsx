import axios from "axios";
import { useEffect, useState } from "react";

function Error() {

    const fetchUsersURL = "https://portal.rsubs.org/api/users";
    // const [userData, setUserData] = useState([])
    useEffect(() => {
        // console.log('testing');




    }, [])


    const handleClick = async () => {
        console.log('clicked');
        try {
            const res = await axios.get(fetchUsersURL, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            console.log(res.data);
            
            console.log(localStorage.getItem('token'));

            res?.data.map((users) => {
                users['email'] === localStorage.getItem('email') ? console.log(users['']) : 'could not find user'

            })






        } catch (error) {
            console.log(error.message);

        }

    }

    return (

        <div>
            <h1 className="text-center text-blue-700 text-[2rem] " onClick={() => {
                handleClick()
            }} >
                Error page
            </h1>



        </div>


    )

}



export default Error;
