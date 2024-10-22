function AdminHomePanel() {

    return (
        <div className="text-[#39447F]" >
            <div className="student-details bg-white p-4 " >
                <h1>Students</h1>

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
                <h2>
                    Applications
                </h2>
                <p>
                    Total No of Applications:
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