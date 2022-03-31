import { React, useEffect } from "react";
import anime from "animejs";

//---- Component imports
import PageTitle from "../components/PageTitle";

export default function Formation(props) {
	let educationList = [
		{
			name: "Option Informatique et science du numérique",
			school: "Lycée bonaparte, toulon",
			year: 2018,
			state: "finished",
			diploma: "Baccalauréat scientifique",
		},
		{
			name: "Génie Électrique et Informatique Industrielle",
			school: "Université de Toulon, Campus la Garde",
			year: 2020,
			diploma: "Diplome universitaire technologique",
			state: "finished",
		},
		{
			name: "développeur web et web mobile",
			school: "Greta du var",
			year: 2021,
			diploma: "Titre professionnel ",
			state: "finished",
		},
	];

	function loadEnterAnimation(duration) {
		let tl = anime.timeline();

		tl.add({
			targets: ".educationCard",
			translateY: [150, 0],
			opacity: [0, 1],
			easing: "easeOutQuint",
			duration: duration,
			delay: anime.stagger(125),
		});
	}

	useEffect(() => {
		anime({
			targets: ".container, .pageTitle",
			opacity: [0, 0],
		});

		if (props.startAnimations) {
			setTimeout(() => {
				anime({
					targets: ".container",
					opacity: [0, 1],
				});

				anime({
					targets: ".pageTitle",
					opacity: [0, 0.2],
				});
				loadEnterAnimation(1200);
			}, 800);
		}
	});

	return (
		<>
			<PageTitle title='Formation' />
			<main className='educationPage'>
				<div className='container educationContainer'>
					<div className='educationList'>
						{educationList.reverse().map((education, index) => {
							return (
								<div
									className={
										education.state === "finished"
											? "educationCard"
											: "educationCard educationCard-current"
									}
									key={index}>
									<p className='diploma'>{education.diploma}</p>
									<p className='year'>{education.year}</p>
									<p className='name'>{education.name}</p>
									<p className='school'>{education.school}</p>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</>
	);
}
