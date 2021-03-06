import React, { useState } from "react";
// import Calendar from "react-calendar";
/* import Navbar from "../components/Navbar";
 */
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureCards from "../components/FeatureCards";
import QuoteApi from "../components/QuoteApi";
import Quotes from "../components/Quotes";
import ToDoHeader from "../components/ToDoHeader";

import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import SignupForm from "../components/SignupForm";
import { ButtonContainer } from "../components/Button.js";
import "../styling/styles.css";
import Logo3 from "../images/Logo3.png";

/*
=============== 
HOME PAGE
=============== 

*/ function HomePage () {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    return(
    <div className="App">
{/*         <img id="Logo3" src={Logo3} />
 */}
    <div class="container">
        
        <h1 class="display-4">welcome home.</h1>
        <section section id="featureCardsSectionId">
            <FeatureCards />
        </section>

        <section id="todoSection">
        <div id="todoContainer" >
        <div class="todoCol" >     
        <ToDoForm 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        />
        <ToDoList  setTodos={setTodos} todos={todos} />
        </div>
        </div>
        </section>
{/* class="col-sm d-flex justify-content-center" */}




        <hr />
        <QuoteApi />
        <Quotes />
        <hr />
            <div class="col-sm d-flex justify-content-center">
                <SignupForm />
            </div>
            
    </div>

    </div>
    
);
}
//end homepage

export default HomePage;
