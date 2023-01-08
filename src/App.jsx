import "./App.css";
import Quotes from "./components/quotes/Quotes";
import Table from "./components/tables/Tables";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Table />}></Route>
					<Route exact path="/quotes" element={<Quotes />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
