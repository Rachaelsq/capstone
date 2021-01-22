import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { useHistory, Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";

export const Editmedicine = (route) => {
    let history = useHistory();
    const { medicines, editMedicine } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({
        id: null,
        name: "",
        directions: ""
    });
    const currentUserId = route.match.params.id;

useEffect(() => {
    const medicineId = currentUserId;
    const selectedUser = medicines.find(
        (emp) => emp.id === parseInt(medicineId)
        );
        setSeletedUser(selectedUser);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        editMedicine(selectedUser);
        history.push("/FitnessPage");
    };

    const handleOnChange = (userKey, value) =>
        setSeletedUser({ ...selectedUser, [userKey]: value });

if (!selectedUser || !selectedUser.id) {
    return <div>not selected user</div>;
}

return (
    <Fragment>
        <div>
            <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name of medicine</label>
                <input
                value={selectedUser.name}
                onChange={(e) => handleOnChange("name", e.target.value)}
                type="text"
                placeholder="Enter name of medicine"
                />
            </div>
{/* 
===========
DIRECTIONS
===========
*/}
        <div>
            <label htmlFor="directions">directions</label>
            <input
                value={selectedUser.directions}
                onChange={(e) => handleOnChange("directions", e.target.value)}
                type="text"
                placeholder="Enter directions for medication"
                />
        </div>
        <div className="flex items-center justify-between">
            <button>Edit medicine</button>
        </div>
        <div>
            <Link to="/">Cancel</Link>
        </div>
            </form>
        </div>
    </Fragment>
);
};