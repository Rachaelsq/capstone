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
        location: ""
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
        <div className="w-full max-w-sm container mt-20 mx-auto">
            <form onSubmit={onSubmit}>
            <div className="w-full mb-5">
                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
                >
                Name of medicine
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                    value={selectedUser.name}
                    onChange={(e) => handleOnChange("name", e.target.value)}
                    type="text"
                    placeholder="Enter name"
                />
            </div>
            <div className="w-full  mb-5">
                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="location"
                >
                Location
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                    value={selectedUser.location}
                    onChange={(e) => handleOnChange("location", e.target.value)}
                    type="text"
                    placeholder="Enter location"
                />
            </div>
            <div className="w-full  mb-5">
                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="directions"
                >
                Directions
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                    value={selectedUser.directions}
                    onChange={(e) => handleOnChange("directions", e.target.value)}
                    type="text"
                    placeholder="Enter directions"
                />
            </div>
            <div className="flex items-center justify-between">
                <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
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