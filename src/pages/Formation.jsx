import { React, useEffect } from "react";
import anime from "animejs";

//---- Component imports
import PageTitle from "../components/PageTitle";

export default function Formation(props) {
	let educationList = [
		{
			key: 1,
			name: "Baccalauréat scientifique option",
			school: "Lycée bonaparte, toulon",
			year: 2018,
			state: "finished",
		},
		{
			key: 2,
			name: "DUT Génie Électrique et Informatique Industrielle",
			school: "Université de Toulon, Campus la Garde",
			year: 2020,
			state: "finished",
		},
		{
			key: 3,
			name: "Formation développeur web et applications mobiles",
			school: "Greta du var",
			year: 2021,
			state: "finished",
		},
		{
			key: 4,
			name: "Titre professionnel développeur web",
			school: "Greta du var",
			year: 2021,
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
									key={education.key}>
									<div className='year'>{education.year}</div>
									<div className='name'>{education.name}</div>
									<div className='school'>{education.school}</div>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</>
	);
}
