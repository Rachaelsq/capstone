import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { ButtonContainer } from "./Button.js";
import "../styling/styles.css";
/* end of imports */

export default function App() {
return (
<React.Fragment>
    <div id="signupFormContainer">
        <div id="signupForm">
            <form>
                <div class="form-group signupClass">
                    <label for="exampleInputEmail1">Email address</label>
                        <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        />
                            <small id="emailHelp" class="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <ButtonContainer>Sign Up!</ButtonContainer>
            </form>
        </div>
    </div>
    </React.Fragment>
);
}
