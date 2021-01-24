import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";


const Addmedicine = () => {
    const [name, setName] = useState("");
    const [directions, setDirections] = useState("");
    const { addMedicine, medicines } = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const newMedicine = {
            id: medicines.length + 1,
            name,
            directions
        };
        addMedicine(newMedicine);
        history.push("/");
    };

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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter name"
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                    value={directions}
                    onChange={(e) => setDirections(e.target.value)}
                    type="text"
                    placeholder="Enter directions"
                />
                </div>
                <div className="flex items-center justify-between">
                <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add medicine
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

export default Addmedicine;