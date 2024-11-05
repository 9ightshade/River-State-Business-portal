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
    const email = localStorage.getItem('email');
    const [formData, setFormData] = useState({

        course: { programmeTitle: '', courseTitle: '' },
        personalInformation: { title: '', first_name: '', middle_name: '', last_name: '', email: email, gender: '', maritalStatus: '', dateOfBirth: '', address: '', religion: '', phone: '', physical_challenge: '', photo: '' },
        emergencyContact: { name: '', relationship: '', phone: '', email: '' },
        citizenship: { nationality: '', countryOfResidency: '', primaryLanguage: '', stateOfOrigin: '' },
        workExperience: { postQualificationExperienceYears: 0, managerialExperienceYears: 0 },
        lbsProgrammeQualification: { highestQualification: '', classOfDegree: '', factorsMotivatingMBA: '', factorsHinderingMBA: '' },
        qualifications: [{ institutionName: '', institutionType: '', certificateAwarded: '', startDate: '', endDate: '' }],
        programmeFinancing: { fundingMethod: '' },
        attachments: { degreeCertificate: '', curriculumVitae: '', evidenceOfAbilityToPay: '', oLevelResult: '', nyscExemptionLetter: '' },
        lastSavedStep: 'Started',


    })


    const NextStep = () => {
        setStep(step + 1);
    };

    const PrevStep = () => {
        setStep(step - 1);
    };


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value })

    // };


    const handleChange = (section, key, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: value,
            },
        }));
    };



    const userId = localStorage.getItem('_id')
    // console.log('working...');

    const token = localStorage.getItem('token')

    // console.log( userId);

    const startUrl = `https://portal.rsubs.org/api/application/start`;
    // const saveUrl = `https://portal.rsubs.org/api/applications/${userId}/save`;
    // const resumeUrl = `https://portal.rsubs.org/api/application/${userId}/resume`;
    // const submitUrl = `https://portal.rsubs.org/api/applications/${userId}/submit`
    const navigate = useNavigate();


    // console.log(formData);

    // const startForm = async () => {
    //     console.log('start....');
    //     console.log(userId);

    //     try {
    //         const response = await axios.post(startUrl, formData, { headers: { Authorization: `Bearer ${token}` } })
    //         console.log(`success`);
    //         console.log(response);

    //     } catch (error) {
    //         console.log(error);

    //     }

    // }





    //updates form data based on user input


    // const handleFileChange = (e) => {
    //     const { name, files } = e.target;
    //     setFormData({ ...formData, [name]: files[0] })

    //     const fileUpload = async () => {
    //         files ? console.log(files) : 'file absent'

    //     }

    //     fileUpload()
    // }

    const testURL = ' https://httpbin.org/post';

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(`submit form ...`);
        console.log('final form:', formData);

        try {
            const reponse = await axios.post(startUrl, formData,
                // { headers: { Authorization: `Bearer ${token}` } }
            )

            console.log(reponse);
            // navigate('/student')
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
            <h1 className="text-center text-gray-500 text-[1.3rem]" onClick={() => {
                console.log(formData);

            }} >
                Full-Time MBA Admissions
            </h1>

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
                                        data={formData.course}
                                        onChange={(key, value) => handleChange('course', key, value)}
                                    />}
                                    {step === 2 && <PersonalInfo
                                        data={formData.personalInformation}
                                        onChange={(key, value) => handleChange('personalInformation', key, value)}
                                    />}
                                    {step === 3 && <EmergencyContact
                                        data={formData.emergencyContact} onChange={(key, value) => handleChange('emergencyContact', key, value)}
                                    />}
                                    {step === 4 && <Citizenship
                                        data={formData.citizenship} onChange={(key, value) => handleChange('citizenship', key, value)}
                                    />}
                                    {step === 5 && <WorkExperience
                                        data={formData.workExperience} onChange={(key, value) => handleChange('workExperience', key, value)}
                                    />}
                                    {step === 6 && <RsubsQualification
                                        data={formData.lbsProgrammeQualification} onChange={(key, value) => handleChange('lbsProgrammeQualification', key, value)}
                                    />}
                                    {step === 7 && <Qualifications
                                        data={formData.qualifications} onChange={(index, key, value) => {
                                            const newQualifications = [...formData.qualifications];
                                            newQualifications[index][key] = value;
                                            setFormData({ ...formData, qualifications: newQualifications });
                                        }}
                                    />}
                                    {step === 8 && <ProgramFinancing
                                        data={formData.programmeFinancing} onChange={(key, value) => handleChange('programmeFinancing', key, value)}
                                    />}
                                    {step === 9 && <Attachment
                                        data={formData.attachments} onChange={(key, value) => handleChange('attachments', key, value)}
                                    />}
                                </div>

                            )

                        )
                    }

                    <div className="navigation-btn flex justify-between " >
                        {
                            step > 1 && <div
                                onClick={PrevStep}
                                className="prev-btn bg-[#39447F] text-white p-3 border-none rounded "
                            >
                                Previous
                            </div>
                        }
                        {
                            step < sections.length && <div
                                onClick={NextStep}
                                className="next-btn bg-[#39447F] text-white py-2 px-5 border-none rounded "
                            >
                                Next
                            </div>
                        }
                        {
                            step === sections.length && <button
                                type="submit" onClick={handleSubmit}
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