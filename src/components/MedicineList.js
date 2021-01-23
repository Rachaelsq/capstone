
import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";

const MedicineList = () => {
const { medicines, removeMedicineInfo, editMedicineInfo } = useContext(
    GlobalContext
);
return (
    <Fragment>
        {medicines.length > 0 ? (
        <Fragment>
            {medicines.map((medicine) => (
                <div className="" key={medicine.id}>
                    <div className="">
                        <p className="">{medicine.name}</p>
                        <p className="">{medicine.directions}</p>
                    </div>
                <div className="">
                    <Link to={`/edit/${medicine.id}`}>
                        <button
                        onClick={() => editMedicineInfo(medicine.id)}
                        className=""
                        ></button>
                    </Link>
                        <button
                        onClick={() => removeMedicineInfo(medicine.id)}
                        className=""
                        ></button>
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