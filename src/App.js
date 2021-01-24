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
import "./styling/styles.css";
//pages
import DailyCheckInPage from "./pages/DailyCheckInPage.js";
import HomePage from "./pages/HomePage.js";
import MoodPage from "./pages/MoodPage.js";
import SelfCarePage from "./pages/SelfCarePage.js";
import FitnessPage from "./pages/FitnessPage.js";
import  AddMedicine  from "./components/AddMedicine";
import  Editmedicine from "./components/Editmedicine";
import MedicineList from "./components/MedicineList.js";

import { GlobalProvider } from "./context/GlobalState";
//end pages

//components
import FeatureCards from "./components/FeatureCards.js";
import SignupForm from "./components/SignupForm.js";
import MoodDropdown from "./components/MoodDropdown.js";
import CalendarScript2 from "./components/CalendarScript2";
import MeditationTimer from "./components/MeditationTimer";
import Journal from "./components/Journal";
import JournalList from "./components/JournalList";
import Navbar from "./components/Navbar";
import QuoteApi from "./components/QuoteApi";
import Quotes from "./components/Quotes";

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
          <Route path="/FitnessPage" exact component={FitnessPage} />
          <Route path="/SelfCarePage" exact component={SelfCarePage} />
          <Route path="/DailyCheckInPage" exact component={DailyCheckInPage} />
        {/*   <Route path="/add" exact component={Addmedicine} />
          <Route path="/edit/:id" exact component={Editmedicine} /> */}
        </Switch>
        {/* <Navbar2 /> */}
      </React.Fragment>
    </Router>
  );
}
