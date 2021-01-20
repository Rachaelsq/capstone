import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
import Navbar from "src\components\Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";




/*
=============== 
HOME PAGE
=============== 

*/ const HomePage = () => (
    <div className="App">
    <div class="container">
        <h1 class="display-4">welcome home.</h1>
        <section section id="featureCardsSectionId">
            <FeatureCards />
        </section>
        <hr />
        <QuoteApi />
        <hr />
            <div class="col-sm d-flex justify-content-center">
                <SignupForm />
            </div>
    </div>
    </div>
);
//end homepage

export default HomePage;
