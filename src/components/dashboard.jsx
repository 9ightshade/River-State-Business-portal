import Nav from "./nav";
import dashboard from "../dashboard";
import { useState } from "react";
import Home from "./dashboardInfo/home";
import ApplicationDashboard from "./dashboardInfo/application";
import Payment from "./dashboardInfo/payment";
import Transcript from "./dashboardInfo/transcript";

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
                                className="py-[.7em] border-none rounded"
                                style={{
                                    backgroundColor: `${step === section.id ? '#1e3a8a' : '#F3F1F1'}`,
                                    color: `${step === section.id ? 'white' : '#6b7280'}`
                                }}
                                
                                key={section.id}

                                onClick={() => { handleClick(section.id) }}
                            >
                                {

                                }
                                {
                                    section.label
                                }
                            </button>
                        ))
                    }
                </div>


                <div className=" bg-[#F3F1F1] w-full px-4 py-3 mb-4 " >
                    {
                        step === 1 && <Home />
                    }
                    {
                        step === 2 && <ApplicationDashboard />
                    }

                    {
                        step === 3 && <Payment />
                    }

                    {
                        step === 4 && <Transcript />
                    }


                </div>
            </div>

        </div>

    )




};


export default StudentDashboard;