import React from "react";

const Form = ({
    handleChange,
    user,
    cities
}) => {
    return (
        <>
            <div className="addNewUserInput">
                <label className="addNewUserInputLabel">
                    Name
                </label>
                <input
                    value={user.name}
                    placeholder={"Eg. John"}
                    className="addNewUserInputBox"
                    type="text"
                    autoFocus={true}
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required={true}
                />
            </div>

            <div className="addNewUserInput">
                <label className="addNewUserInputLabel">
                    Email
                </label>
                <input
                    value={user.email}
                    placeholder={"Eg. john@gmail.com"}
                    className="addNewUserInputBox"
                    type="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                    required={true}
                />
            </div>

            <div className="addNewUserInput">
                <label className="addNewUserInputLabel">
                    Gender
                </label>
                <div className="addNewUserCheckBoxWrapper">
                    <input
                        checked={user.gender === "Male"}
                        className="addNewUserCheckBox"
                        type="checkbox"
                        onChange={(e) => handleChange("gender", "Male")}
                    />
                    <div className="addNewUserCheckBoxText">
                        Male
                    </div>
                </div>
                <div className="addNewUserCheckBoxWrapper">
                    <input
                        checked={user.gender === "Female"}
                        className="addNewUserCheckBox"
                        type="checkbox"

                        onChange={(e) => handleChange("gender", "Female")}
                    />
                    <div className="addNewUserCheckBoxText">
                        Female
                    </div>
                </div>
                <div className="addNewUserInput">
                    <label className="addNewUserInputLabel">
                        Date of Birth
                    </label>
                    <input
                        value={user.dob}
                        placeholder={"Eg. john@gmail.com"}
                        className="addNewUserCheckBoxDob"
                        type="date"
                        max={new Date().toISOString().slice(0, -14)}
                        onChange={(e) => handleChange("dob", e.target.value)}
                        required={true}
                    />
                </div>
                <div className="addNewUserInput">
                    <label className="addNewUserInputLabel">
                        City
                    </label>
                    <select
                        onChange={(e) => handleChange("city", e.target.value)}
                        value={user.city}
                        className="addNewUserSelect"
                        required={true}
                    >
                        {cities.map(item => <option value={item.name} key={item.name + item.id}>{item.name}</option>)}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Form
