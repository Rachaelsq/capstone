import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button.js";
import "../styling/styles.css";
/* end of imports */

export default class Navbar extends Component {
render() {
    return (
        <NavWrapper
        className="navbar navbar-expand-sm navbar-dark"
        id="navbarFlexId"
        >
            <Link to="/" className="nav-link">
                home
            </Link>
            <Link to="/MoodPage" className="nav-link">
                mood
            </Link>
            <Link to="/SelfCarePage" className="nav-link">
                self care
            </Link>
            <Link to="/FitnessPage" className="nav-link">
                fitness
            </Link>
            <Link to="/DailyCheckInPage" className="nav-link">
                daily check in
            </Link>
        </NavWrapper>
    );
}
}

//styled component

//all you have to do to get data into a component is to import the data

const NavWrapper = styled.nav`
/* background: rgb(138,22,220, 0.5); */
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
padding 0 0;
padding-right: 15px;
max-height: 40px;

.nav-link {
        color: white !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        transition: all 0.5s ease-in-out;

    &:hover{
        background: #8C86C6;
        border-radius: 14px;
        color: white;
    }
    }
`;
