import React from "react";
import sampleOutput from "./sampleOutput.json";
import "./Quotes.css";

const Quotes = () => {

	const displayData = sampleOutput.payload.OIL.map((info) => {
		return (
			<div className="quote">
				{/* <div className="quote_title">OIL</div> */}
				<div className="list-group quote_items">
					<a
						href="/"
						className="list-group-item list-group-item-action"
						aria-current="true"
					>
						<div className=" price d-flex w-100 justify-content-between">
							<h5 className="mb-1">Price : {info.price}</h5>
						</div>
						<p className="mb-1">Time : {info.time}</p>
						<small>Valid Till : {info.valid_till}</small>
					</a>
				</div>
			</div>
		);
	});
	return <div className="quote_container">{displayData}</div>;
};

export default Quotes;
