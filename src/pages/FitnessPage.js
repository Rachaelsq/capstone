import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
import Navbar from "../components/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Journal from "../components/Journal";
import MeditationTimer from "../components/MeditationTimer";
import JournalList from "../components/JournalList";
import MoodDropdown from "../components/MoodDropdown";
import CalendarScript2 from "../components/CalendarScript2";
import "../styling/moodpagestyling.css";
import "../styling/timerstyling.css";
import "../styling/journalstyling.css";
/* import MedicineGlobalState from "../context/MedicineGlobalState.js"
import MedicineAppReducer from "../context/MedicineAppReducer.js" */
import Medicinelist from "../components/MedicineList.js";
/* end of imports */
/*
=============== 
MOOD PAGE
===============
*/

const FitnessPage = () => (
    <div className="App">
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm d-flex justify-content-center">
                    <Medicinelist />
            </div>

        <div class="col-sm d-flex justify-content-center align-items-end"
            id="appCalendarId">
            <CalendarScript2 />
        </div>
        </div>
    </div>
    </div>
);

  //end self care

export default FitnessPage;

