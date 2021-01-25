import React from 'react';

// UNL assets
import unlLogo from '../Assets/UNL_Logo.png';
import unlPhoto from '../Assets/UNL_Photo.jpg';

// BVN assets
import bvnLogo from '../Assets/BVN_Logo.png';
import bvnPhoto from '../Assets/BVN_Photo.jpg';

export const EDUCATION = [
	// UNL
	{
        id: 1,
		school: "University of Nebraska-Lincoln",
		location: "Lincoln, NE",
		degree: "Bachelor of Science in Computer Science",
		content: (
			<React.Fragment>
				<h3>Major</h3>
				<p>Computer Science</p>

				<h3>Minors</h3>
				<p>Business and Mathematics</p>

				<h3>Timeline</h3>
				<p>August 2019 &ndash; May 2023</p>

				<h3>Jeffrey S. Raikes School of Computer Science and Management</h3>
				<p>
                    The Raikes School at the University of Nebraska-Lincoln is a selective, 
					interdisciplinary honors program integrating innovative business concepts 
					into a traditional computer science curriculum, with an emphasis on 
					practical and real-world experience taught through collaborative projects.
				</p>

				<h3>Relevant Coursework</h3>
				<p>
					Data Structures (Java), Algorithms (JavaScript),
					Computer Systems Engineering (C), Unix Programming,
					Statistics (R and Python), Innovation Processes (Design Thinking)
				</p>
			</React.Fragment>
        ),
        photo: unlPhoto,
		logo: unlLogo,
	},
	
	// BVN
	{
        id: 0,
		school: "Blue Valley North High School",
		location: "Overland Park, KS",
		degree: "High School",
		content: (
			<React.Fragment>
				<h3>Timeline</h3>
				<p>August 2015 &ndash; May 2019</p>

				<h3>Relevant Coursework</h3>
				<p>
					Honors Java Programming (Java), Web Design (HTML and CSS),
					Graphic Design, Computer Graphics/Desktop Publishing
				</p>
			</React.Fragment>
        ),
        photo: bvnPhoto,
        logo: bvnLogo,
	},
];