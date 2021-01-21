import React, { Fragment, useContext } from "react";
import { GlobalContext } from "./context/MedicineGlobalState";
import { Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";


/* export const Medicinelist = () => {
    const { medicines, removeMedicineInfo, editMedicineInfo } = useContext(GlobalContext);    
 */



    const MedicineList = () => {
        const [state, setState] = useContext(GlobalContext);
        
        return (
        <>
            <h1> example component</h1>
            <p> Name:{state.name} </p>
            <p> Email:{state.email} </p>
            <button onClick={handleClick}>Click me to see a new user</button>
        </>
        );
    };
      export default MedicineList;