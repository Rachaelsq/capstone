import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; //
import { ButtonContainer } from "./Button.js";
import "../styling/styles.css";

const FeatureCard = (props) => (
  <section>
    <h5> {props.subtitle} </h5>
    <p> {props.description} </p>
  </section>
);

export default FeatureCard;
