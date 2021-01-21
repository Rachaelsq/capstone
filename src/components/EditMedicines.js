import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "./context/MedicineGlobalState";
import { useHistory, Link } from "react-router-dom";
import "../styling/styles.css";
import "../styling/fitnessStyling.css";

export const Editmedicine = (route) => {
    const { medicines, editMedicine } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({
        id: null,
        name: "",
        directions: "",
        });
    const currentUserId = route.match.params.id;

useEffect(() => {

}, []);


return (
    <Fragment>
       
    </Fragment>
);
};
