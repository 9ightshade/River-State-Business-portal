import { useEffect, useState } from "react";
import sections from "../sections";
import data from "../formData";


function ApplicationForm() {




    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        programmeTitle: '',
        courseTitle:'',
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email:'',
        sex: '',
        maritalStatus: '',
        dateOfBirth: '',
        address:'',
        religion:'',
        phone: '',
        physicalChallenge: '',
        photo: '',
        nationality: '',
        countryOfResidence: '',
        primaryLanguguae: '',
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
        evidenceOfAbilityToPay: [],
        oLevelResult: [],
        nyscExemptionLetter: []
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked ? [...formData[name], value] : formData[name].filter(item => item !== value)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleNext = () => {
        if (currentStep < sections.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isSectionCompleted = (sectionId) => {
        const section = data.find(sec => sec.id === sectionId);
        if (!section) {
            return true;
        }

        const sectionFields = section.fields || [];
        return sectionFields.every(field => {
            const value = formData[field.name];
            return Array.isArray(value) ? value.length > 0 : value !== '';
        });
    };

    const renderInputs = (fields) => {
        return fields.map((field) => (
            <div key={field.name} className={field.type === 'checkbox' ? 'w-full' : 'input-wrapper'}>
                <label htmlFor={field.name} className="block mb-1">
                    {field.label}
                </label>
                {field.type === 'select' ? (
                    <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="input-field"
                    >
                        {field.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                ) : field.type === 'checkbox' ? (
                    <div>
                        {field.options.map(option => (
                            <div key={option} className="checkbox-wrapper">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name={field.name}
                                        value={option}
                                        checked={formData[field.name].includes(option)}
                                        onChange={handleInputChange}
                                    />
                                    <span className="ml-2">{option}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                ) : (
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="input-field"
                    />
                )}
            </div>
        ));
    };


    useEffect(() => {
        console.log(sections.length);
        
        console.log(formData);
    })



    return (


        <div className='flex sm:m-10 gap-10'>
            <div className='sm:flex sm:flex-col w-[30%] hidden '>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => setCurrentStep(section.id)}
                        style={{
                            backgroundColor: currentStep === section.id
                                ? '#39447F'
                                : isSectionCompleted(section.id)
                                    ? '#696BDF'
                                    : '#F3F1F1',
                            color: currentStep === section.id || isSectionCompleted(section.id)
                                ? 'white'
                                : 'gray',
                            margin: '5px',
                            padding: '10px',
                            borderRadius: '5px',
                            textAlign: 'left',
                        }}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
            <div className='sm:w-[70%] w-full bg-[#F3F1F1] p-5 rounded-lg'>
                {sections.map((section) =>
                    currentStep === section.id ? (
                        <div key={section.id} className='w-full'>
                            <h3 className='text-[1.5rem] mb-[20px] text-[#39447F] font-bold'>{section.label}</h3>
                            <div className='flex flex-wrap gap-5'> {renderInputs(data.find(sec => sec.id === section.id)?.fields || [])}</div>

                        </div>
                    ) : null
                )}
                <div className="flex justify-between mt-4 bg-[] ">
                    {currentStep > 1 && <button onClick={handlePrevious} className="btn bg-[#39447F] text-white p-2 rounded border-none ">Previous</button>}
                    {currentStep < sections.length && <button onClick={handleNext} className="btn bg-[#39447F] text-white p-2 rounded border-none">Next</button>}
                    
                </div>
            </div>
        </div>
    )


}


export default ApplicationForm;