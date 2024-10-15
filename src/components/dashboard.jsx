import Nav from "./nav";
import dashboard from "../dashboard";
import { useState } from "react";

function StudentDashboard() {

    const [step, setStep] = useState(1);



    const handleClick = (sectionId) => {

        switch (sectionId) {
            case 1:
                setStep(1)
                break;

            case 2:
                setStep(2)
                break;
            case 3:
                setStep(3)
                break;
            case 4:
                setStep(4)
                break;
            default:
                setStep(1)
                break;
        }
        console.log(sectionId, step);

    }




    return (
        <div>
            <Nav />


            <div className="container py-4 px-7 flex justify-between gap-4  " >

                <div className="sections flex gap-2 flex-col w-1/3  text-gray-500 h-[400px] " >
                    {
                        dashboard.map((section) => (
                            <button
                                className="bg-[#F3F1F1] py-[.7em] border-none rounded"
                                key={section.id}

                                onClick={() => { handleClick(section.id) }}
                            >
                                {
                                    section.label
                                }
                            </button>
                        ))
                    }
                </div>


                <div className=" bg-[#F3F1F1] w-full px-4 py-3 h-[400px] " >


                </div>
            </div>

        </div>

    )




};


export default StudentDashboard;