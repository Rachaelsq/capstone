import React from "react";
/* import { ButtonContainer } from "./Button.js";
 */import "../styling/styles.css";

export default function JournalList(props) {
return (
    <div>
        {props.list.map((entry) => (
        <div>
            <p>{entry.Date}</p>
            <p>{entry.journalEntry}</p>
        </div>
        ))}
    </div>
);
}
