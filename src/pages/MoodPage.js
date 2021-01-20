import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
import Navbar from "src\components\Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";



/* import CalendarScript2 from "src\components\CalendarScript2.js";
 */


/* end of imports */
/*
=============== 
MOOD PAGE
===============
*/

const MoodPage = () => {
    const [userId, setUserId] = useState(222);
    const [journalEntryArray, setJournalEntryArray] = useState([
        {
        journalEntry:
        "Today I coded until my eyes were blurry. Blue light glasses? Trash.",
        Date: "Jan 25th 2020",
        UserId: 111
        },
        {
        journalEntry:
        " I drank some tea today. You know what I could use more of? Tea.",
        Date: "Jan 25th 2020",
        UserId: 222
        },
        {
        journalEntry:
        "Dear diary, today I stepped on Rachaels keyboard. It felt great. Meow.",
        Date: "Jan 25th 2020",
        UserId: 333
        }
    ]);

    const [journalEntry, setJournalEntry] = useState("");

    useEffect(() => {
    const updatedList = journalEntryArray.filter(
        (entry) => userId === entry.UserId
    );
    setJournalEntryArray(updatedList);
    }, [journalEntryArray, journalEntry]);

    function handleClick(e) {
        e.preventDefault();
        console.log(journalEntry);
        const newArray = journalEntryArray;
        newArray.push({
        UserId: userId,
        journalEntry: journalEntry,
        Date: new Date().getMonth()
    });
    setJournalEntryArray(newArray);
    }

    return (
        <div className="App">
        <div class="container-fluid">
            <div class="row">
            <div class="col-sm d-flex justify-content-center">
                <Journal
                    journalEntry={journalEntry}
                    handleClick={handleClick}
                    setJournalEntry={setJournalEntry}
                />
            </div>

            <div class="col-sm d-flex justify-content-center">
                <MeditationTimer />
                <JournalList list={journalEntryArray} />
            </div>

            <div class="col-sm d-flex justify-content-center">
                <MoodDropdown />
            </div>

            <div
                class="col-sm d-flex justify-content-center align-items-end"
                id="appCalendarId"
            >
                <CalendarScript2 />
            </div>
        </div>
        </div>
    </div>
    );
};

export default MoodPage;
