import "./scss/main.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import OpeningLoader from "./components/OpeningLoader";

// PAGES IMPORTS
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Competences from "./pages/Competences";
import Formation from "./pages/Formation";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";

// COMPONENTS IMPORTS
import Menu from "./components/Menu";

function App() {
	// States definitions
	const [opnLoadDisplay, setopnLoadDisplay] = useState(true); // The state of the opening Loader
	const [pageContentDisplay, setpageContentDisplay] = useState(false);
	const [startContentAnimations, setStartContentAnimations] = useState(false);

	// Opening Loader display toggle
	const opnLoadToggle = () => {
		setopnLoadDisplay(!opnLoadDisplay);
	};

	const pageContentDisplayToggle = () => {
		setpageContentDisplay(!pageContentDisplay);
	};

	const startContentAnimationsToggle = () => {
		setStartContentAnimations(!startContentAnimations);
	};

	useEffect(() => {
		setTimeout(() => {
			pageContentDisplayToggle();
		}, 1200);
	}, []);

	let routesList = [
		{
			path: "/",
			component: <Home startAnimations={startContentAnimations}></Home>,
		},
		{
			path: "/formation",
			component: (
				<Formation startAnimations={startContentAnimations}></Formation>
			),
		},
		{
			path: "/competences",
			component: (
				<Competences startAnimations={startContentAnimations}></Competences>
			),
		},
		{
			path: "/experience",
			component: (
				<Experience startAnimations={startContentAnimations}></Experience>
			),
		},
		{
			path: "/contact",
			component: <Contact startAnimations={startContentAnimations}></Contact>,
		},
	];

	return (
		<>
			{opnLoadDisplay && (
				<OpeningLoader
					finishedToggle={opnLoadToggle}
					startPageAnimation={startContentAnimationsToggle}
				/>
			)}

			{pageContentDisplay && (
				<>
					<Menu startAnimations={startContentAnimations}></Menu>
					<Routes>
						{routesList.map((route, index) => {
							return (
								<Route
									key={index}
									path={route.path}
									element={route.component}
								/>
							);
						})}
						<Route component={PageNotFound}></Route>
					</Routes>
				</>
			)}
		</>
	);
}

export default App;
