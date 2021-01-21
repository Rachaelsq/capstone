import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "./context/MedicineGlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";


export const Addmedicine = () => {
    const [name, setName] = useState("");
    const [directions, setDirections] = useState("");
    const { addMedicine, medicines } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
    const newMedicine = {
        id: medicines.length + 1,
        name,
        directions
    };
        addMedicine(newMedicine);
    };

    return (
        <Fragment>
        <div>
            <form onSubmit={onSubmit}>
            <div>
                <label
                htmlFor="name"
                >
                Name of medicine
                </label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name of medicine"
                />
            </div>
{/* 
===========
directions
============
 */}
            <div >
                <label
                htmlFor="directions"
            >
                directions
                </label>
                <input
                value={directions}
                onChange={(e) => setDirections(e.target.value)}
                type="text"
                placeholder="Enter directions"
                />
            </div>
{/* 
===========
ADD MEDICINE
============
 */}
            <div className="flex items-center justify-between">
                <button>
                Add Medicine
                </button>
            </div>
            <div>
                <Link to="/">Cancel</Link>
            </div>
            </form>
        </div>
        </Fragment>
    );
};
