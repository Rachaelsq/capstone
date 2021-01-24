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
import "../styling/fitnessStyling.css";
import "../styling/timerstyling.css";
import "../styling/journalstyling.css";
import MedicineGlobalState from "../context/GlobalState.js"
import AppReducer from "../context/AppReducer.js" 
import MedicineList from "../components/MedicineList";
import { Route, Switch } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalState.js";
import { GlobalContext } from "../context/GlobalState.js";
import  AddMedicine  from "../components/AddMedicine";
import  Editmedicine  from "../components/Editmedicine";
import { Link } from "react-router-dom";

/* end of imports */

/*
=============== 
FITNESS PAGE
===============
*/


const FitnessPage = () => {
    return (
        <GlobalProvider>
            <Switch>
                <Route path="/add" component={AddMedicine} exact />
                <Route path="/edit/:id" component={Editmedicine} exact />
                <>
                <div className="App">
        <div class="container-fluid">
        <div class="row">
            
            <div class="col-sm d-flex justify-content-center">
                
    <div id="medicineContainer">
        
    <h1 id="medicineLog">Medicine Log</h1>

            <Link to="/add">
            <button>
                <span>Add Medicine</span>
            </button>
            </Link>


            <div class="container-fluid">

                    <MedicineList />
            </div>
            </div>



</div>

        <div class="col-sm d-flex justify-content-center align-items-end"
            id="appCalendarId">
            <CalendarScript2 />
        </div>
        </div>
    </div>
    </div>
                </>
            </Switch>
        </GlobalProvider>
    );
}

export default FitnessPage;

