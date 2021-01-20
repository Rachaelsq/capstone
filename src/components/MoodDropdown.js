import React, { useState } from "react";
import "../styling/moodpagestyling.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

/* end of imports */

export default function App() {
return (
        <div id="dropdownContainer">
            <h3> :( </h3>
        <div class="form-check" id="checkboxes">
            <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            />
                <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
                </label>
        </div>
        </div>
);
}
