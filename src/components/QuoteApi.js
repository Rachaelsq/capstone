import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

/* end of imports */

const QuoteApi = (props) => (
<div>
    <h1> {props.name}</h1>
    <h1> {props.attribution}</h1>
</div>
);

export default QuoteApi;
