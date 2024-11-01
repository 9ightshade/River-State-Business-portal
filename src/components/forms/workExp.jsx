function WorkExperience() {
    return (
        <div className="text-gray-500 text-[1.1rem] outline-none gap-4 my-8 " >
            <div>
                <label htmlFor="postQualificationExperienceYears">
                    Post Qualification Experience <span className="block" >Years</span>
                </label>
                <input type="number" name="postQualificationExperienceYears" id="postQualificationExperienceYears" className="block p-2"  />
            </div>
            <div>
                <label htmlFor="managerialExperienceYears">
                    Managerial Experience<span className="block" >Years</span>
                </label>
                <input type="number" name="managerialExperienceYears" id="managerialExperienceYears" className="block p-2"  />
            </div>
        </div>
    )
}

export default WorkExperience;