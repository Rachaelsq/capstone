import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";

import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MoodDropdown from "../components/MoodDropdown";
import CalendarScript2 from "../components/CalendarScript2";
import Journal from "../components/Journal";

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
    <div class="container-fluid dailyContainer" style={{ color: "white" }}>
        <h3> this is a daily check in</h3>
        <div class="row" style={{ color: "white" }}>
        <div class="col-sm d-flex justify-content-center ">{dailyJournal}</div>

        <div class="col-sm d-flex justify-content-center "></div>

        <div class="col-sm d-flex justify-content-center "></div>

        <div
            class="col-sm d-flex justify-content-center align-items-end"
            id="appCalendarId"
        ></div>
        </div>
    </div>
);
}
