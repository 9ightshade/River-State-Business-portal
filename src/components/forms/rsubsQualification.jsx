
function RsubsQualification() {




    return (
        <div className="text-gray-500 text-[1.1rem] outline-none gap-4 my-8 " >
            <div className="flex justify-between gap-5 " >
                <div className="highestQualification basis-1/2 " >
                    <label htmlFor="highestQualification">
                        Highest Qualification
                    </label>
                    <select required name="highestQualification" id="highestQualification" className="block w-full p-2" >
                        <option value="select">--Select--</option>
                        <option value="Master's Degree">Masters Degree</option>
                        <option value="Bachelor's Degree">Bachelors Degree</option>
                        <option value="HND">HND</option>
                    </select>
                </div>

                <div className="classOfDegree basis-1/2 " >
                    <label htmlFor="classOfDegree">
                        Class Of Degree
                    </label>
                    <select name="classOfDegree" required id="classOfDegree" className="block p-2 w-full" >
                        <option value="select">--Select--</option>
                        <option value="2.1 or First Class">2.1 or First Class</option>
                        <option value="equivalent of 2.2">Equivalent of 2.2</option>
                        <option value="others">others</option>
                    </select>
                </div>
            </div>



            <div className="factorsMotivatingMBA  my-5" >
                <label htmlFor="factorsMotivatingMBA">
                    Factors Motivating MBA
                </label>
                <textarea  required name="factorsMotivatingMBA" id="factorsMotivatingMBA" className="p-3 w-full block" ></textarea>
            </div>

            <div className="factorsHinderingMBA" >
                <label htmlFor="factorsHinderingMBA">
                    Factors Hindering MBA
                </label>
                <textarea name="factorsHinderingMBA" required id="factorsHinderingMBA" className="p-3 w-full block" ></textarea>
            </div>


        </div>
    )
}

export default RsubsQualification;