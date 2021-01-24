import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import { ButtonContainer } from "./Button.js";
import "../styling/styles.css";
/* end of imports */

const FeatureCards = (props) => {
const featurecards = [
    {
    subtitle: "Mood",
    description:
        "Express yourself in your journal, meditate, and log your moods for the day. "
    },
    {
    subtitle: "Self care ",
    description:
        "Take care of yourself. here are reminders of what makes life worth living & what is beautiful. "
    },
    {
    subtitle: "Fitness ",
    description:
        "Remember to take your medications, check in with your body, and track your food intake. "
    }
];

return (
    <React.Fragment>
    <div class="card" id="featureCards">
        <div class="card-body">
            {featurecards.map((featurecard) => (
            <div>
                <div id="featureCard">
                    <FeatureCard class="featureTitle"
                    subtitle=
                   
                    {featurecard.subtitle}
                            
                    description={featurecard.description}
                    />
                </div>
            </div>
            ))}
        </div>
    </div>
    </React.Fragment>
);
};

export default FeatureCards;
