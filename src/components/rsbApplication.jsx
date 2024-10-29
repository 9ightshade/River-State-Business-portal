import Nav from "./nav";
import sections from "../sections";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        photo: '',
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
        degreeCertificate: '',
        curriculumVitae: '',
        evidenceOfAbilityToPay: '',
        oLevelResult: '',
        nyscExemptionLetter: '',
        emailOfNextOfKin: '',
        telephoneNumberOfNextOfKin: '',
        relationshipWithNextOfKin: '',
        nameOfNextOfKin: '',
        addressOfNextOfKin: ''

    })



    const userId = localStorage.getItem('_id')
    // console.log('working...');
    
    const token = localStorage.getItem('token')

    // console.log( userId);

    const startUrl = `https://portal.rsubs.org/api/application/${userId}/start`;
    const saveUrl = `https://portal.rsubs.org/api/applications/${userId}/save`;
    const resumeUrl = `https://portal.rsubs.org/api/application/${userId}/resume`;
    const submitUrl = `https://portal.rsubs.org/api/applications/${userId}/submit`
    const navigate = useNavigate();


    console.log(formData);

    const saveForm = async () => {
        console.log('save working....');
        console.log(userId);

        try {
            const response = await axios.put(saveUrl,formData, { headers: { Authorization: `Bearer ${token}` } })
            console.log(`success`);
            console.log(response);

        } catch (error) {
            console.log(error);

        }

    }


    const NextStep = () => {
        setStep(step + 1);
    };

    const PrevStep = () => {
        setStep(step - 1);
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


    
    const handleSubmit = async (e) => {
        // e.preventDefault()
        console.log(`submit form ...`);
        try {
            const reponse = await axios.post(submitUrl, formData, { headers: { Authorization: `Bearer ${token}` } })

            console.log(reponse);

        } catch (error) {
            console.log(error);

        }

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

    return (
        <div>
            <Nav />
            <h1 className="text-center text-gray-500 text-[1.3rem]" >
                Full-Time MBA Admissions
            </h1>

            {/* <button className="bg-blue-700 text-white p-3 " onClick={saveForm}  >
                test send form data
            </button>

            <button className="bg-blue-700 text-white p-3 ml-4 " onClick={submitForm}  >
                test submit form data
            </button> */}
            <div className="container px-7 flex justify-between gap-4  " >

                <div className="sections flex gap-2 flex-col w-1/3  text-gray-500 " >
                    {
                        sections.map((section) => (
                            <button
                                className=" py-[.7em] border-none rounded"
                                style={{
                                    backgroundColor: `${step === section.id ? '#1e3a8a' : '#F3F1F1'}`,
                                    color: `${step === section.id ? 'white' : '#6b7280'}`
                                }}
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


                <form className="form bg-[#F3F1F1] w-full px-4 py-3 " onSubmit={(e) => {
                    e.preventDefault()
                }} >
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
                                onClick={() => {
                                    NextStep()
                                    // saveForm()
                                }}
                                className="next-btn bg-[#39447F] text-white py-2 px-5 border-none rounded "
                            >
                                Next
                            </button>
                        }
                        {
                            step === sections.length && <button
                                onClick={() => {
                                    handleSubmit()
                                }}
                                className="next-btn bg-[#39447F] text-white py-2 px-5 border-none rounded "
                            >
                                <Link to={'/student'} >
                                    Submit
                                </Link>
                            </button>
                        }
                    </div>

                </form>





            </div>

        </div>

    )




};


export default RsbApplication;