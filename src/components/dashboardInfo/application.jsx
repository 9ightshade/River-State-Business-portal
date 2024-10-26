function ApplicationDashboard() {
    return (
        <table className="text-gray-500  " >
            <thead>
                <tr className="bg-white font-bold " >
                    <td className="p-3">
                        ApplicationID
                    </td>
                    <td className="p-3">
                        Name
                    </td>
                    <td className="p-3">
                        Email
                    </td>
                    <td className="p-3">
                        Program
                    </td>
                    <td className="p-3">
                        Status
                    </td>
                </tr>
                <hr  className="h-3" />
            </thead>
            
            <tbody>
                <tr className="bg-white" >
                    <td className="p-3">
                        App/000008
                    </td>
                    <td className="p-3">
                        Emem Etim application
                    </td>
                    <td className="p-3">
                        backendtest@gmail.com
                    </td>
                    <td className="p-3">
                        Full time MBA Admission
                    </td>
                    <td className="p-3 flex">
                        Not submited  <button
                        className="bg-blue-900 text-[.9vw] text-white py-2 px-3 rounded"
                        >Continue Application</button>
                    </td>
                </tr>
            </tbody>


        </table>
    )
}

export default ApplicationDashboard;