import React from 'react';

import unlLogo from '../Assets/UNL_Logo.png';
import unlPhoto from '../Assets/UNL_Photo.jpg';

import bvnLogo from '../Assets/BVN_Logo.png';
import bvnPhoto from '../Assets/BVN_Photo.jpg';

export const EDUCATION = [
	{
        id: 1,
		school: "University of Nebraska-Lincoln",
		location: "Lincoln, NE",
		degree: "Bachelor of Science in Computer Science",
		content: (
			<div>
				<p><b>Major:</b> Computer Science</p>

				<p><b>Minors:</b> Business and Mathematics</p>

				<p><b>Timeline:</b> August 2019 &ndash; May 2023</p>

				<p>
                    <b>Jeffrey S. Raikes School of Computer Science and Management:</b> The
                    Raikes School at the University of Nebraska-Lincoln is a selective, 
					interdisciplinary honors program integrating innovative business concepts 
					into a traditional computer science curriculum, with an emphasis on 
					practical and real-world experience taught through collaborative projects.
				</p>
			</div>
        ),
        photo: unlPhoto,
		logo: unlLogo,
	},
	{
        id: 0,
		school: "Blue Valley North High School",
		location: "Overland Park, KS",
		degree: "High School",
		content: (
			<div>
				<p><b>Timeline:</b> August 2015 &ndash; May 2019</p>
			</div>
        ),
        photo: bvnPhoto,
        logo: bvnLogo,
	},
];