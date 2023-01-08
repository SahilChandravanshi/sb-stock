import React from "react";
import { useEffect, useState } from "react";
import sampleOutput from "./sampleOutput.json";
import "./Quotes.css";
import axios from "axios";

const Quotes = () => {
	let API = "https://prototype.sbulltech.com/api/v2/quotes/OIL";

	const [data, setData] = useState([]);
	const getData=()=>{
	  fetch('https://prototype.sbulltech.com/api/v2/quotes/OIL'
	  ,{
	    headers : {
	      'Content-Type': 'application/json',
	      'Accept': 'application/json'
	     }
	  }
	  )
	    .then(function(response){
	      return response.json();
	    })
	    .then(function(myJson) {
	      setData(myJson)
	    });
	}
	useEffect(()=>{
	  getData()
	},[])

	// useEffect(() => {
	// 	async function fetchMoviesJSON() {
	// 		const response = await fetch(API);
	// 		const movies = await response.json();
	// 		return movies;
	// 	}
	// 	fetchMoviesJSON().then((movies) => {
	// 		setData(movies);
	// 	});
	// }, []);
	console.log(data)

	return (
		<div className="quote_container">
			{sampleOutput.payload.OIL.map((info) => {
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
			})}
		</div>
	);
};

export default Quotes;
