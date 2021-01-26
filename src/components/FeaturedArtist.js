import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/selfCare.css";
/* import { ButtonContainer } from "./Button.js";
 */import "../styling/styles.css";
import { Carousel } from "react-bootstrap";

/* end of imports */

export default function FeaturedArtist() {
return (
        <div id="artContainer">
            <h3> Featured Art</h3>
            <Carousel>
        <Carousel.Item>
            <img
                id="artId"
                className=" w-90 img-fluid art"
                src="https://images.unsplash.com/photo-1601489333662-97b194e8a356?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                alt="First slide"
            />
                <Carousel.Caption>
                    <h3>Severin Candrian</h3>
                </Carousel.Caption>
                </Carousel.Item>
        <Carousel.Item>
            <img
                id="artId"
                className="w-90 img-fluid art"
                src="https://images.unsplash.com/photo-1598880942562-8cf3cf728312?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                alt="Third slide"
            />
                <Carousel.Caption>
                <h3>Severin Candrian</h3>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                id="artId"
                className=" w-90 img-fluid art"
                src="https://images.unsplash.com/photo-1599224473702-3e955ef70efe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                alt="Third slide"
            />
                <Carousel.Caption>
                <h3>Severin Candrian</h3>
                </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </div>
);
}
