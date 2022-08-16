import { EducationItem, School } from "../models";
import bvnLogo from "../Assets/BVN/Logo.svg";
import bvnPhoto from "../Assets/BVN/Photo.jpg";
import unlLogo from "../Assets/UNL/Logo.svg";
import unlPhoto from "../Assets/UNL/Photo.jpg";

const unlData: School = {
    name: "University of Nebraska-Lincoln",
    photo: unlPhoto,
    logo: unlLogo,
    color: "#DD1A32",
};

const bvnData: School = {
    name: "Blue Valley North High School",
    photo: bvnPhoto,
    logo: bvnLogo,
    color: "#143C7D",
};

const educationData: EducationItem[] = [
    {
        id: "unl-2023",
        school: unlData,
        degree: "B.S., Computer Science",
        majors: ["Computer Science"],
        minors: ["Business", "Mathematics"],
        graduationDate: "May 2023",
        classes: [
            "Software Engineering",
            "Data Structures (Java)",
            "Algorithms (JavaScript)",
            "User Interface Design (Figma)",
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
    },
    {
        id: "bvn-2019",
        school: bvnData,
        degree: "High School Diploma",
        graduationDate: "May 2019",
        classes: [
            "Beginning Programming (Java)",
            "Web Design (HTML/CSS)",
            "Graphic Design",
            "Computer Graphics/Desktop Publishing",
        ],
    },
];

export default educationData;
