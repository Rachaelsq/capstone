import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { useHistory, Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";

const Editmedicine = (route) => {
    let history = useHistory();
    const { medicines, editMedicine } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({
        id: null,
        name: "",
        directions: "",
    });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const medicineId = currentUserId;
        const selectedUser = medicines.find(
        (med) => med.id === parseInt(medicineId)
        );
        setSeletedUser(selectedUser);
      // eslint-disable-next-line
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        editMedicine(selectedUser);
        history.push("/");
    };

    const handleOnChange = (userKey, value) =>
        setSeletedUser({ ...selectedUser, [userKey]: value });

    if (!selectedUser || !selectedUser.id) {
        return <div>sdf</div>;
    }

    return (
        <Fragment>
        <div id="editContainer">
            <form onSubmit={onSubmit}>
            <div className="w-full mb-5">
                <label
                htmlFor="name"
                >
                Name of medicine
                </label>
                <input
                    value={selectedUser.name}
                    onChange={(e) => handleOnChange("name", e.target.value)}
                    type="text"
                    placeholder="Enter name"
                />
            </div>
            <div className="w-full  mb-5">
                <label
                htmlFor="directions"
                >
                Directions
                </label>
                <input
                    value={selectedUser.directions}
                    onChange={(e) => handleOnChange("directions", e.target.value)}
                    type="text"
                    placeholder="Enter directions"
                />
            </div>
            <div className="flex items-center justify-between">
                <button id="editMedicine">
                Edit medicine
                </button>
            </div>
            <div className="text-center mt-4 text-gray-500">
                <Link to="/">Cancel</Link>
            </div>
            </form>
        </div>
        </Fragment>
    );
};

export default Editmedicine;