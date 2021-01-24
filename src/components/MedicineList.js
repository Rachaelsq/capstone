
import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";

const MedicineList = () => {
    const { medicines, removeMedicine, editMedicine } = useContext(GlobalContext);
return (
    <Fragment>
        
        {medicines.length > 0 ? (
    <Fragment>
        {medicines.map((medicine) => (
            <div
                className="flex items-center bg-gray-100 mb-10 shadow"
                key={medicine.id}
            >
            <div className="flex-auto text-left px-4 py-2 m-2">
                <p>{medicine.name}</p>
                <p>{medicine.directions}</p>
            </div>
            <div className="flex-auto text-right">
                <Link to={`/edit/${medicine.id}`}>
                    <button
                        onClick={() => editMedicine(medicine.id)}
                        className="editButton"
                    >
                    Edit
                    </button>
                </Link>
                <button
                    onClick={() => removeMedicine(medicine.id)}
                    className="deleteButton"
                >
                    Delete
                </button>
                </div>
            </div>
            ))}
        </Fragment>
        ) : (
        <p>No data</p>
    )}
    </Fragment>
);
};

export default MedicineList;