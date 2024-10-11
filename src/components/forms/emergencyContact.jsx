function EmergencyContact() {


    return (
        <div className="text-gray-500 text-[1.1rem] outline-none">
            <div className="nameofKin" >
                <label htmlFor="nextOfKin">
                    Name
                </label>
                <input type="text" name="nameOfNextOfKin" id="nextOfKin" className="block p-2 w-full" />
            </div>

            <div className="flex items-center justify-between" >
                <div className="relationshipWithnextOfKin" >
                    <label htmlFor="relationshipWithnextOfKin">
                        Relationship
                    </label>
                    <select name="relationshipWithNextOfKin" id="relationshipWithnextOfKin" className="block p-2 " >
                        <option value="select">--Select--</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                    </select>
                </div>

                <div className="email my-3 " >
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="emailOfNextOfKin" id="email" className="block p-2" />
                </div>


                <div className="phone" >
                    <label htmlFor="phone">
                        Phone
                    </label>
                    <input type="tel" name="telephoneNumberOfNextOfKin" id="phone" className="block p-2" />
                </div>
            </div>


            <div className="address" >
                <label htmlFor="address">
                    Address
                </label>
                <textarea name="addressOfNextOfKin" id="address" className=" block w-full my-5 " ></textarea>
            </div>



        </div>
    )
}

export default EmergencyContact;