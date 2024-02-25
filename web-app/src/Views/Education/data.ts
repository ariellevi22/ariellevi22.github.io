import { BvnLogo, UnlLogo } from "../../Assets";
import { EducationItem } from "../../Types";
import { bvn2019Photo, unl2023Photo } from "./Assets";

/**
 * Data for the website's Education section
 */
const educationData: EducationItem[] = [
    {
        id: "unl-2023",
        school: "University of Nebraska-Lincoln",
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
                text: "The Raikes School at the University of Nebraska-Lincoln is a selective honors program integrating innovative business concepts into a computer science curriculum with an emphasis on real-world experience taught through collaborative projects.",
            },
        ],
        logo: UnlLogo,
        photo: unl2023Photo,
        color: { light: "#DD1A32" },
    },
    {
        id: "bvn-2019",
        school: "Blue Valley North High School",
        degree: "High School Diploma",
        graduationDate: "May 2019",
        classes: [
            "Beginning Programming (Java)",
            "Web Design (HTML/CSS)",
            "Graphic Design",
        ],
        logo: BvnLogo,
        photo: bvn2019Photo,
        color: { light: "#143C7D" },
    },
];

export default educationData;
