import React from "react";

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
