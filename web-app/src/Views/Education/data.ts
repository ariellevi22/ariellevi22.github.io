import { EducationItem } from "../../Types";
import { logos, photos } from "./Assets";

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
                text: `
                    The Raikes School at the University of Nebraska-Lincoln is a selective
                    honors program integrating innovative business concepts into a computer
                    science curriculum with an emphasis on real-world experience taught
                    through collaborative projects.
                `,
            },
        ],
        logo: logos.unl,
        photo: photos.unl2023,
        color: { lightTheme: "#DD1A32" },
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
        logo: logos.bvn,
        photo: photos.bvn2019,
        color: { lightTheme: "#143C7D" },
    },
];

export default educationData;
