function Attachment({ nextStep, prevStep, oLevelResult, degreeCertificate, evidenceOfAbilityToPay, curriculumVitae, handleChange, nyscExemptionLetter, values}) {


    return (

        <div className=" flex flex-wrap text-gray-500 text-[1.1rem] outline-none gap-4 my-8 " >
            <div className="degreeCertificate" >
                <label htmlFor="degreeCertificate">
                    Degree Certificate
                </label>
                <input type="file" value={values.degreeCertificate} name="degreeCertificate" id="degreeCertificate" className="block w-full p-3" />
            </div>


            <div className="curriculumVitae" >
                <label htmlFor="curriculumVitae">
                    Curiculum Vitae
                </label>
                <input type="file" name="curriculumVitae" id="curriculumVitae" className="block w-full p-3" />
            </div>

            <div className="evidenceOfAbilityToPay" >
                <label htmlFor="evidenceOfAbilityToPay">
                    Evidence of Ability To Pay
                </label>
                <input type="file" name="evidenceOfAbilityToPay" id="evidenceOfAbilityToPay" className="block w-full p-3" />
            </div>

            <div className="oLevelResult" >
                <label htmlFor="oLevelResult">
                    O level Result
                </label>
                <input type="file" name="oLevelResult" value={oLevelResult}  id="oLevelResult" className="block w-full p-3" />
            </div>
            
            {/* <p className="text-center text-blue-800 text-sm">File uploaded</p>
            <div className="h-1.5 w-full bg-green-500 rounded-full"></div> */}

            <div className="nyscExemptionLetter" >
                <label htmlFor="nyscExemptionLetter">
                    Nysc Exemption Letter
                </label>
                <input type="file" name="nyscExemptionLetter" id="nyscExemptionLetter" className="block w-full p-3" />
            </div>

        </div>

    )
}

export default Attachment;