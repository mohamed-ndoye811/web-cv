import React from "react";

export default function Icon(props) {
	let languages = [
		{
			img: "c_plus",
			name: "C++",
		},
		{
			img: "c_sharp",
			name: "C#",
		},
		{
			img: "css",
			name: "CSS3",
		},
		{
			img: "html",
			name: "HTML5",
		},
		{
			img: "js",
			name: "JavaScript",
		},
		{
			img: "reactjs",
			name: "React",
		},
		{
			img: "ruby",
			name: "Ruby",
		},
		{
			img: "svelte",
			name: "Svelte",
		},
	];

	return (
		<>
			<img
				src={
					"./img/programming-languages/" +
					languages.find((pl) => pl.img === props.src).img +
					".svg"
				}
				alt={props.alt}
				className='iconImg'></img>
		</>
	);
}
