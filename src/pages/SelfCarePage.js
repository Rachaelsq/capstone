import React from "react";
// import Calendar from "react-calendar";
/* import Navbar from "../components/Navbar.js";
 */
import "bootstrap/dist/css/bootstrap.min.css";
import FeelGoodBox from "../components/FeelGoodBox.js";
import FeaturedArtist from "../components/FeaturedArtist.js";
import "../styling/selfCare.css";
import CalendarScript2 from "../components/CalendarScript2.js";



/* import CalendarScript2 from "src\components\CalendarScript2.js";
 */


/* end of imports */


/*
=============== 
SELF CARE PAGE
=============== 
*/
const SelfCarePage = () => (
    <div className="App">
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm d-flex justify-content-center">
                <FeaturedArtist />
            </div>

        <div class="col-sm d-flex justify-content-center align-items-end"
            id="appCalendarId">
            <FeelGoodBox />
            <CalendarScript2 />
        </div>
        </div>
    </div>
    </div>
);

  //end self care

  export default SelfCarePage;
