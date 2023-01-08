import React, { useEffect, useState } from "react";
import csvData from "../../instruments.json";
import "./Tables.css";
import { Link } from "react-router-dom";

const Table = () => {
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	const fetchData = () => {
	// 		fetch('./instruments.json')
	// 			.then(response => response.json())
	// 			.then(json => setData(json))
	// 			.catch(e => {
	// 				console.log("error", e);
	// 		})
	// 	}
	// 	fetchData();
	// },[])

	const [value, setValue] = useState("");
	const [dataSource, setDataSource] = useState(csvData);
	const [tableFilter, setTableFilter] = useState([]);

	const filterData = (e) => {
		if (e.target.value !== "") {
			setValue(e.target.value);
			const filterTable = dataSource.filter((o) =>
				Object.keys(o).some((k) =>
					String(o[k])
						.toLocaleLowerCase()
						.includes(e.target.value.toLocaleLowerCase())
				)
			);
			setTableFilter([...filterTable]);
		} else {
			setValue(e.target.value);
			setDataSource([...dataSource]);
		}
	};

	return (
		<div className="main_container mt-5">
			<div className="search_bar input-group mb-3">
				<div className="constainer_title">
					<p>SbStock</p>
				</div>
				<div>
					<input
						type="text"
						className="form-control"
						placeholder="Search"
						aria-label="Username"
						aria-describedby="basic-addon1"
						value={value}
						onChange={filterData}
					/>
				</div>
			</div>

			<table className="table_container table table-striped">
				<thead>
					<tr>
						<th scope="col">Symbol</th>
						<th scope="col">Name</th>
						<th scope="col">Sector</th>
						<th scope="col">Valid Till</th>
					</tr>
				</thead>
				<tbody>
					{value.length > 0
						? tableFilter.map((data) => {
								return (
									<tr>
										<td>{data.Symbol}</td>
										<td>{data.Name}</td>
										<td>{data.Sector}</td>
										<td>{data.Validtill}</td>
									</tr>
								);
						  })
						: dataSource.map((data) => {
								return (
									<tr>
										<Link to="/quotes">
											<td>{data.Symbol}</td>
									</Link>
											<td>{data.Name}</td>
											<td>{data.Sector}</td>
											<td>{data.Validtill}</td>
										</tr>
								);
						  })}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
