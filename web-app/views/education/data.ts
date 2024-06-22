import UnlLogo from "@/assets/logos/unl";
import unl2023Photo from "@/assets/photos/unl-2023.jpg";

import { EducationItem } from "@/types";

/** Data for the website's Education section */
const educationData: EducationItem[] = [
    {
        id: "unl-2023",
        school: "University of Nebraska-Lincoln",
        href: "https://www.unl.edu/",
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
        color: "#DD1A32",
    },
];

export default educationData;
