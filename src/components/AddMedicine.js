import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";


const Addmedicine = () => {
    const [name, setName] = useState("");
    const [directions, setDirections] = useState("");
    const {medicines, addMedicine} = useContext(GlobalContext);
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
        <div id="addMedContainer">
            <form onSubmit={onSubmit}>
            <div className="w-full mb-5">
                <label
                    htmlFor="name"
                >
                Name of medicine
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={directions}
                    onChange={(e) => setDirections(e.target.value)}
                    type="text"
                    placeholder="Enter directions"
                />
                </div>
                <div >
                <button className="addMedBtn">
                    Add medicine
                </button>
            </div>
            <div >
                <Link to="/">Cancel</Link>
            </div>
            </form>
        </div>
        </Fragment>
    );
};

export default Addmedicine;