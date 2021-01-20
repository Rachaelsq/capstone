import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import QuoteApi from "./QuoteApi";
/* end of imports */

/*
=============== 
API
===============
*/

/*
=============== 
EXPORT
===============
*/
export default function App() {
const Quotes = (props) => {
    const quotes = [
        { name: "this is a quote", attribution: "this is the attribution" },
        { name: "this is a quote", attribution: "this is the attribution" },
        { name: "this is a quote", attribution: "this is the attribution" },
        { name: "this is a quote", attribution: "this is the attribution" },
        { name: "this is a quote", attribution: "this is the attribution" },
        { name: "this is a quote", attribution: "this is the attribution" },
        { name: "this is a quote", attribution: "this is the attribution" },
        { name: "this is a quote", attribution: "this is the attribution" },
        { name: "this is a quote", attribution: "this is the attribution" }
    ];
};

return (
        <div class="card" id="quoteContainer">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>
                Knowing how to be solitary is central to the art of loving. When
                we can be alone, we can be with others without using them as a
                means of escape.
                <h1>
                {/* {quotes.map((quote) => (
        <Quote name={quote.name} attribution={quote.attribution} />
      ))}         */}
                </h1>
                </p>
                    <footer class="blockquote-footer">
                        <cite title="Source Title">Bell Hooks</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
);
}
