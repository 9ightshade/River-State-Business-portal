function EmergencyContact({ values, handleChange }) {


    return (
        <div className="text-gray-500 text-[1.1rem] outline-none">
            <div className="nameofKin" >
                <label htmlFor="nextOfKin">
                    Name
                </label>
                <input type="text" value={values.nameOfNextOfKin} onChange={handleChange} name="nameOfNextOfKin" id="nextOfKin" className="block p-2 w-full" required />
            </div>

            <div className="flex items-center justify-between" >
                <div className="relationshipWithnextOfKin" >
                    <label htmlFor="relationshipWithnextOfKin">
                        Relationship
                    </label>
                    <select value={values.relationshipWithNextOfKin} onChange={handleChange} name="relationshipWithNextOfKin" id="relationshipWithnextOfKin" className="block p-2  " required >
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
                    <input type="email" value={values.emailOfNextOfKin} required
                        onChange={handleChange}
                        name="emailOfNextOfKin" id="email" className="block p-2" />
                </div>


                <div className="phone" >
                    <label htmlFor="phone">
                        Phone
                    </label>
                    <input type="tel"
                        onChange={handleChange}
                        value={values.telephoneNumberOfNextOfKin}
                        name="telephoneNumberOfNextOfKin" id="phone" className="block p-2" />
                </div>
            </div>


            <div className="address" >
                <label htmlFor="address">
                    Address
                </label>
                <textarea
                    value={values.addressOfNextOfKin}
                    onChange={handleChange} 
                    name="addressOfNextOfKin" id="address"
                    className=" block w-full my-5 " ></textarea>
            </div>



        </div>
    )
}

export default EmergencyContact;