import React, { useState } from "react";
/* import { render } from "react-dom";
 */
import "../styling/calendarStyles2.css";
import "../styling/styles.css";
//import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "../styling/styles.css";



export default function App() {
const [value, onChange] = useState(new Date());
const now = Date.now();
return (
    <React.Fragment>
        <div id="calendarContainer">
            <Calendar onChange={onChange} value={value} />
        <div id="selectedDateContainer">
          {/* {console.log(value)} */}
            {value.toString()}
            {console.log(now)}
            {now.toString()}
        </div>
        </div>
    </React.Fragment>
);
}

//const now is the current time and date. we are going to use that to target the current date and make it a current color. we are also going to use that target to take us to the daily check in page

// onClickDay
// (value, event) => alert('Clicked day: ', value)
