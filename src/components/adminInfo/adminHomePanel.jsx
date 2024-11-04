import { useState, useEffect } from "react";
import axios from "axios";
function AdminHomePanel() {

    const [students, setStudents] = useState();
    const [applicationsArray, setApplicationsArray] = useState();
    const userId = localStorage.getItem('_id')
    // const totalApplications= (applicationsArray.length);
    console.log(userId);

    const fetchUsersURL = `https://portal.rsubs.org/api/users/${userId}`


    const fetchApplicationAllURL = "https://portal.rsubs.org/api/applications";


    const fetchApplications = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(fetchApplicationAllURL, {
                headers: { Authorization: `Bearer ${token}` }
            })

            console.log(response.data.applications);

            setApplicationsArray(response.data.applications);


        } catch (error) {
            console.log(error);

        }

    }
    // 6710ee2c64769a1870a3b854

    const applicationIds = ["6724deed947e348216ca6415", "6724db9f947e348216ca6407","6700f1ea42fa1f03bd0466c2", "6700ece642fa1f03bd0466bc", "6700eba142fa1f03bd0466b7"]





    const fetchStudents = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(fetchUsersURL, {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(response.data);

            setStudents(response.data);

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        fetchApplications()


    }, [])

    // console.log(applicationsArray);


    return (
        <div className="text-[#39447F]" >
            <div onClick={fetchStudents} className="student-details bg-white p-4 " >
                <h1 >Students</h1>

                <p>
                    Total No of students:
                </p>
            </div>

            <div className="payment-details bg-white mt-3 p-4 " >
                <h2>
                    Payment Details
                </h2>
                <p>
                    Account Name:
                </p>
                <p>
                    Account Number:
                </p>
                Bank Name:
            </div>

            <div className="application-details bg-white mt-3 p-4 ">
                <h2 >
                    Applications
                </h2>
                <p>
                    Total No of Applications:{
                        // totalApplications
                    }
                </p>
                <p>
                    Pending Applications:
                </p>
                <p>
                    Completed Applications:
                </p>
            </div>


            <div className="transcript-details bg-white mt-3 p-4 ">
                <h2>
                    Transcripts
                </h2>
                <p>
                    Total Transcript Request:
                </p>

            </div>


        </div>
    )
}

export default AdminHomePanel;