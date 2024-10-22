import axios from "axios";
import { useState } from "react";

function AdminStudentPanel() {

    const [students, setStudents] = useState();

    const fetchUsersURL = "https://portal.rsubs.org/api/users"

    const fetchStudents = async () => {

        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(fetchUsersURL, {
                headers: { Authorization: `Bearer ${token}` }
            })

            setStudents(response.data);



        } catch (error) {
            console.log(error);

        }

    }


    return (
        <table className="text-[#39447F]" >
            <thead>
                <tr onClick={fetchStudents}>
                    <td className="p-2" >
                        Name
                    </td>
                    <td className="p-2" >
                        Email
                    </td>
                </tr>
            </thead>


            <tbody  >
                {
                    students?.map((student) => (
                        <tr key={student._id} >
                            <td className="p-2" >
                                {
                                    student.name
                                }
                            </td>
                            <td className="p-2" >
                                {
                                    student.email
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )
}

export default AdminStudentPanel;