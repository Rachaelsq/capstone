import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
import Navbar from "../components/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/dailyStyle.css";
import CalendarScript2 from "../components/CalendarScript2.js";
import MedicineList from "../components/MedicineList";
/* end of imports */

export default function DailyCheckInPage() {
const [dailyJournal, setDailyJournal] = useState("");
useEffect(() => {
if (localStorage.getItem("journalEntry")) {
    setDailyJournal(localStorage.getItem("journalEntry"));
    }
    console.log(dailyJournal, "daily journal");
    }, []);

    return (
        <div className="App">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm d-flex justify-content-center"></div>

                <div class="col-sm justify-content-center"></div>

                <div class="col-sm">
                    <MedicineList />
                </div>

                <div
                    class="col-sm d-flex justify-content-center"
                    id="appCalendarId"
                >
                    <CalendarScript2 />
                </div>
        </div>
        </div>
    </div>
    );
};


