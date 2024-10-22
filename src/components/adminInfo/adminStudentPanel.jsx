import axios from "axios";
import { useEffect, useState } from "react";

function AdminStudentPanel() {

    const [students, setStudents] = useState();
    const [page, setPage] = useState(1);
    const fetchUsersURL = "https://portal.rsubs.org/api/users"
    let studentArray = null;

    const nextPage = () => {
        console.log(studentArray);
        setPage(page + 1)


    }

    const prevPage = () => {
        setPage(page - 1)
    }

    const pagination = () => {

        const startIndex = (page - 1) * 8
        const endIndex = startIndex + 8
        studentArray = students?.slice(startIndex, endIndex);
        console.log(students);
        console.log(studentArray);
    }

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

    useEffect(() => {
        fetchStudents()
        
            
    }, [])

    console.log(students);
    pagination()


    return (
        <div>
            <table className=" relative text-[#39447F]" >


                <thead>
                    <tr>
                        <td className="p-2" >
                            Student ID
                        </td>
                        <td className="p-2" >
                            Name
                        </td>
                        <td className="p-2" >
                            Email
                        </td>
                        <td className="p-2" >
                            Verified
                        </td>
                    </tr>
                </thead>


                <tbody className="relative" >



                    {
                        !students && <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-full absolute top-1/2 left-1/2 ">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce"></div>
                                <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce delay-100"></div>
                                <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>

                    }

                    {
                        studentArray?.map((student) => (
                            <tr key={student._id} >

                                <td className="p-2" >
                                    {
                                        student._id
                                    }
                                </td>

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
                                <td className="p-2" >
                                    {
                                        student.isVerified === true ? <div className="bg-green-500 h-2 w-2 rounded-full " ></div> :
                                            <div className="bg-red-500 w-2 h-2 rounded-full" ></div>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            {
                page > 1 && <button
                    onClick={prevPage}
                    className="prev-btn bg-[#39447F] text-white p-3 border-none rounded "
                >
                    Prev
                </button>
            }
            <span className=" text-[#39447F] bg-white border-gray-500 p-3" >
             { page}
            </span>
            {
                page < students?.length && <button
                    onClick={() => {
                        pagination()
                        nextPage()
                    }}
                    className="next-btn bg-[#39447F] text-white p-3 border-none rounded "
                >
                    Next
                </button>
            }
        </div>

    )
}

export default AdminStudentPanel;