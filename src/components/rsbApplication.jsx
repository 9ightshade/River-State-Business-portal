import Nav from "./nav";
import sections from "../sections";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Course from "./forms/course";
import PersonalInfo from "./forms/personalInfo";
import EmergencyContact from "./forms/emergencyContact";
import Citizenship from "./forms/citizenship";
import WorkExperience from "./forms/workExp";
import RsubsQualification from "./forms/rsubsQualification";
import Qualifications from "./forms/qaulifications";
import ProgramFinancing from "./forms/programFinacing";
import Attachment from "./forms/attachement";
import axios from "axios";
function RsbApplication() {

    const [step, setStep] = useState(1);
    const [isFileUploaded, setIsFileUploaded] = useState(false)

    const [formData, setFormData] = useState({
        programmeTitle: '',
        courseTitle: '',
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        sex: '',
        maritalStatus: '',
        dateOfBirth: '',
        address: '',
        religion: '',
        phone: '',
        physicalChallenge: '',
        photo: null,
        nationality: '',
        countryOfResidence: '',
        primaryLanguage: '',
        stateOfOrigin: '',
        postQualificationExperienceYears: '',
        managerialExperienceYears: '',
        highestQualification: '',
        classOfDegree: '',
        factorsMotivatingMBA: '',
        factorsHinderingMBA: '',
        institutionName: '',
        institutionType: '',
        certificateAwarded: '',
        startDate: '',
        endDate: '',
        fundingMethod: '',
        degreeCertificate: null,
        curriculumVitae: null,
        evidenceOfAbilityToPay: null,
        oLevelResult: null,
        nyscExemptionLetter: null,
        emailOfNextOfKin: '',
        telephoneNumberOfNextOfKin: '',
        relationshipWithNextOfKin: '',
        nameOfNextOfKin: '',
        addressOfNextOfKin: ''

    })

    const startUrl = "https://portal.rsubs.org/api/application/:id/start";
    const saveUrl = "https://portal.rsubs.org/api/application/:id/save";
    const resumeUrl = "https://portal.rsubs.org/api/application/:id/resume";
    const submitUrl = "https://portal.rsubs.org/api/application/:id/submit";
    const navigate = useNavigate();


    const NextStep = () => {
        setStep(step + 1);
        // const saveOnClick = async () => {
        //     try {
        //         const res = await axios.post(saveUrl, formData)
        //         console.log(res);
        //         console.log('success');
        //         navigate('/studentDashboard')

        //     } catch (error) {
        //         console.log(error.message);
        //         navigate('/error')

        //     }


        // }
        // saveOnClick()
        // // console.log(`current step:${step}`);
        // // console.log(formData);


    };

    const PrevStep = () => {
        setStep(step - 1);
        // const saveOnClick = async () => {
        //     try {
        //         const res = await axios.post(saveUrl, formData)
        //         console.log(res);
        //         console.log('success');
        //         navigate('/studentDashboard')

        //     } catch (error) {
        //         console.log(error.message);
        //         navigate('/error')

        //     }


        // }
        // saveOnClick()
        // console.log(`current step:${step}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] })

        const fileUpload = async () => {
            files ? console.log(files) : 'file absent'

        }

        fileUpload()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log(`step:${step} and section.lenght:${sections.length}`);


    }




    const handleClick = (sectionId) => {
        console.log(sectionId);

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
            case 5:
                setStep(5)
                break;
            case 6:
                setStep(6)
                break;
            case 7:
                setStep(7)
                break;
            case 8:
                setStep(8)
                break;
            case 9:
                setStep(9)
                break;
            default:
                setStep(1)
                break;
        }
    }


    useEffect(() => {
        console.log(formData);

    }, [formData])



    return (
        <div>
            <Nav />
            <h1 className="text-center text-gray-500 text-[1.3rem]" >
                Full-Time MBA Admissions
            </h1>


            <div className="container px-7 flex justify-between gap-4  " >

                <div className="sections flex gap-2 flex-col w-1/3  text-gray-500 " >
                    {
                        sections.map((section) => (
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


                <form className="form bg-[#F3F1F1] w-full px-4 py-3 " onSubmit={handleSubmit} >
                    {
                        sections.map((section) =>
                            step === section.id && (
                                <div key={section.id} >
                                    <h2 className='text-[1.5rem] mb-[20px] text-[#39447F] font-bold'
                                        key={section.id}
                                    >
                                        {section.label}
                                    </h2>
                                    {step === 1 && <Course
                                        nextStep={NextStep}
                                        handleChange={handleChange}
                                        values={formData}
                                    />}
                                    {step === 2 && <PersonalInfo

                                        handleChange={handleChange}
                                        values={formData}
                                        handleFileChange={handleFileChange}
                                    />}
                                    {step === 3 && <EmergencyContact

                                        handleChange={handleChange}
                                        values={formData}
                                    />}
                                    {step === 4 && <Citizenship
                                        nextStep={NextStep}
                                        handleChange={handleChange}
                                        values={formData}
                                    />}
                                    {step === 5 && <WorkExperience
                                        nextStep={NextStep}
                                        handleChange={handleChange}
                                        values={formData}
                                    />}
                                    {step === 6 && <RsubsQualification
                                        nextStep={NextStep}
                                        handleChange={handleChange}
                                        values={formData}
                                    />}
                                    {step === 7 && <Qualifications
                                        nextStep={NextStep}
                                        handleChange={handleChange}
                                        values={formData}
                                    />}
                                    {step === 8 && <ProgramFinancing
                                        nextStep={NextStep}
                                        handleChange={handleChange}
                                        values={formData}
                                    />}
                                    {step === 9 && <Attachment
                                        nextStep={NextStep}
                                        handleChange={handleChange}
                                        values={formData}
                                        handleFileChange={handleFileChange}
                                    />}
                                </div>

                            )

                        )
                    }


                    <div className="navigation-btn flex justify-between " >
                        {
                            step > 1 && <button
                                onClick={PrevStep}
                                className="prev-btn bg-[#39447F] text-white p-3 border-none rounded "
                            >
                                Previous
                            </button>
                        }
                        {
                            step < sections.length && <button
                                onClick={NextStep}
                                className="next-btn bg-[#39447F] text-white py-2 px-5 border-none rounded "
                            >
                                Next
                            </button>
                        }
                        {
                            step === sections.length && <button
                                onClick={handleSubmit}
                                className="next-btn bg-[#39447F] text-white py-2 px-5 border-none rounded "
                            >
                                Submit
                            </button>
                        }
                    </div>

                </form>





            </div>


        </div>

    )




};


export default RsbApplication;