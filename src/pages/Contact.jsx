import React from "react";

//---- Component imports
import PageTitle from "../components/PageTitle";

export default function Works(props) {
	return (
		<>
			<PageTitle title='contact'></PageTitle>
			<main className='contactPage'>
				<ul className='contactList'>
					<li>
						<a
							href='https://github.com/mohamed-ndoye811'
							target='_blank'
							rel='noreferrer'>
							Github
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/mohamed-ndoye-4687a1189/'
							target='_blank'
							rel='noreferrer'>
							LinkedIn
						</a>
					</li>
					<li>
						<a href='mailto:NdoyeMD@outlook.fr'>Mail</a>
					</li>
					<li>
						<a
							href='https://www.frontendmentor.io/profile/mohamed-ndoye811'
							target='_blank'
							rel='noreferrer'>
							Front End Mentor
						</a>
					</li>
				</ul>
			</main>
		</>
	);
}
