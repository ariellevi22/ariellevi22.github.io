import { EducationItem } from "../models";
import bvnLogo from "../Assets/BVN/Logo.svg";
import bvnPhoto from "../Assets/BVN/Photo.jpg";
import unlLogo from "../Assets/UNL/Logo.svg";
import unlPhoto from "../Assets/UNL/Photo.jpg";

const educationData: EducationItem[] = [
    // UNL
    {
        id: "unl",
        school: "University of Nebraska-Lincoln",
        location: "Lincoln, NE",
        degree: "Bachelor of Science, Computer Science",
        majors: ["Computer Science"],
        minors: ["Business", "Mathematics"],
        startDate: "August 2019",
        endDate: "May 2023",
        classes: [
            "Software Engineering",
            "Data Structures (Java)",
            "Algorithms (JavaScript)",
            "User Interface Design",
            "Programming Language Concepts",
            "Machine Learning (R)",
            "Innovation Processes (Design Thinking)",
            "Computer Systems Engineering (C)",
            "Operating Systems Kernels (C)",
            "Unix Programming",
        ],
        additionalInfo: [
            {
                heading:
                    "Jeffrey S. Raikes School of Computer Science and Management",
                text: `
                    The Raikes School at the University of Nebraska-Lincoln is a selective,
                    interdisciplinary honors program integrating innovative business concepts
                    into a traditional computer science curriculum, with an emphasis on practical
                    and real-world experience taught through collaborative projects.
                `,
            },
        ],
        photo: unlPhoto,
        logo: unlLogo,
        color: "#DD1A32",
    },

    // BVN
    {
        id: "bvn",
        school: "Blue Valley North High School",
        location: "Overland Park, KS",
        degree: "High School Diploma",
        startDate: "August 2015",
        endDate: "May 2019",
        classes: [
            "Beginning Programming (Java)",
            "Web Design (HTML/CSS)",
            "Graphic Design",
            "Computer Graphics/Desktop Publishing",
        ],
        photo: bvnPhoto,
        logo: bvnLogo,
        color: "#143C7D",
    },
];

export default educationData;
