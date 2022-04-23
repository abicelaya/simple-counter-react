import propTypes from "prop-types";
import React, { useState } from "react";

//include images into your bundle

//create your first component
const Counter = (prop) => {
	let secStr = String(prop.segundos);

	return (
		<div className="d-flex justify-content-center">
			<i class="fa-solid fa-clock-three"></i>
			<div className="seis">{secStr[secStr.length - 6] ?? "0"}</div>
			<div className="cinco">{secStr[secStr.length - 5] ?? "0"}</div>
			<div className="cuatro">{secStr[secStr.length - 4] ?? "0"}</div>
			<div className="tres">{secStr[secStr.length - 3] ?? "0"}</div>
			<div className="dos">{secStr[secStr.length - 2] ?? "0"}</div>
			<div className="uno">{secStr[secStr.length - 1] ?? "0"}</div>
		</div>
	);
};

Counter.propTypes = {
	segundos: propTypes.number,
};

export default Counter;
