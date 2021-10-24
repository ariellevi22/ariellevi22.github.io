import bvnLogo from '../Assets/BVN/BVN_Logo.png';
import bvnPhoto from '../Assets/BVN/BVN_Photo.jpg';
import unlLogo from '../Assets/UNL/UNL_Logo.png';
import unlPhoto from '../Assets/UNL/UNL_Photo.jpg';

import { EducationData } from '../models';

const educationData: EducationData[] = [
    // UNL
    {
        id: 1,
        school: "University of Nebraska-Lincoln",
        location: "Lincoln, NE",
        degree: "Bachelor of Science, Computer Science",
        majors: ["Computer Science"],
        minors: ["Business", "Mathematics"],
        startDate: "August 2019",
        endDate: "May 2023",
        classes: [
            "Software Engineering", "Data Structures (Java)", "Algorithms (JavaScript)",
            "Machine Learning (R)", "Innovation Processes (Design Thinking)",
            "Computer Systems Engineering (C)", "Unix Programming"
        ],
        additionalInfo: [
            {
                heading: "Jeffrey S. Raikes School of Computer Science and Management",
                text: `
                    The Raikes School at the University of Nebraska-Lincoln is a selective,
                    interdisciplinary honors program integrating innovative business concepts
                    into a traditional computer science curriculum, with an emphasis on practical
                    and real-world experience taught through collaborative projects.
                `,
            }
        ],
        photo: unlPhoto,
        logo: unlLogo,
        color: "#DD1A32",
    },

    // BVN
    {
        id: 0,
        school: "Blue Valley North High School",
        location: "Overland Park, KS",
        degree: "High School Diploma",
        startDate: "August 2015",
        endDate: "May 2019",
        classes: [
            "Beginning Programming (Java)",
            "Web Design (HTML and CSS)",
            "Graphic Design",
            "Computer Graphics/Desktop Publishing"
        ],
        photo: bvnPhoto,
        logo: bvnLogo,
        color: "#143C7D",
    },
];

export default educationData;