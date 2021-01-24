
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
                <p className="text-gray-900 leading-none">{medicine.name}</p>
                <p className="text-gray-600">{medicine.directions}</p>
                <span className="inline-block text-sm font-semibold mt-1">
                    {medicine.location}
                </span>
            </div>
            <div className="flex-auto text-right px-4 py-2 m-2">
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
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
    )}
    </Fragment>
);
};

export default MedicineList;