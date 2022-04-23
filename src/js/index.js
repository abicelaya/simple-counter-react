//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "@fortawesome/fontawesome-svg-core";

//import your own components
import Counter from "./component/counter.jsx";

//render your react application
let count = 0;

setInterval(() => {
	ReactDOM.render(
		<Counter segundos={count} />,
		document.querySelector("#app")
	);
	count = count + 1;
}, 1000);
