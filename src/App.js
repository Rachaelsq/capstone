import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "/stylingstyles.css";
//pages
import DailyCheckInPage from "./pages/DailyCheckInPage.js";
import HomePage from "./pages/HomePage.js";
import MoodPage from "./pages/MoodPage.js";
import SelfCarePage from "./pages/SelfCarePage.js";
/* import FitnessPage from "src/pages/FitnessPage.js";
 */
//end pages

//components
import FeatureCards from "./components/FeatureCards.js";
import SignupForm from "./components/SignupForm.js";
import MoodDropdown from "./components/MoodDropdown.js";
import QuoteApi from "./components/Quotes";
import CalendarScript2 from "./components/CalendarScript2";
import MeditationTimer from "./components/MeditationTimer";
import Journal from "./components/Journal";
import JournalList from "./components/JournalList";
import Navbar from "./components/Navbar";

//end components

/*
=============== 
END OF IMPORTS
===============
*/



/*
=============== 
EXPORTING APP
===============
*/
export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/MoodPage" exact component={MoodPage} />
          <Route path="/SelfCarePage" exact component={SelfCarePage} />
          <Route path="/DailyCheckInPage" exact component={DailyCheckInPage} />
        </Switch>
        {/* <Navbar2 /> */}
      </React.Fragment>
    </Router>
  );
}
