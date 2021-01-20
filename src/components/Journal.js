import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MoodDropdown from "../components/MoodDropdown";
import CalendarScript2 from "../components/CalendarScript2";
import { ButtonContainer } from "./Button.js";
import "../styling/styles.css";
/* end of imports */



export default function App({ journalEntry, handleClick, setJournalEntry }) {
    return (
        <div id="journalContainer">
        <div id="topJournalButtons">
            <button>Delete latest entry</button>
            <button class="journalButton">Create new entry</button>
        </div>
            <h3 id="journalTitle"> Journal</h3>
        <div id="textAreaId">
            <textarea
            placeholder="Write about your day..."
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            ></textarea>
        </div>
        <div id="saveButton">
            <ButtonContainer onClick={handleClick}>Save</ButtonContainer>
        </div>
        </div>
    );
}
