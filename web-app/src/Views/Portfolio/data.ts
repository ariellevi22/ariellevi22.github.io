import { PortfolioItem } from "../../models";
import { cookBook, personalWebsite, toGather } from "./Assets";

/**
 * Data for the website's portfolio section
 */
const portfolioData: PortfolioItem[] = [
    {
        id: "personal-website",
        title: "Personal Website",
        description: `
            To combine my passions for code, writing, and design, I created this
            personal portfolio website that showcases my experiences,
            accomplishments, and interests.
        `,
        technologies: ["React", "TypeScript", "HTML/CSS", "Figma"],
        website: "#top",
        codeWebsite: "https://github.com/alevi22/alevi22.github.io",
        logo: personalWebsite.logo,
        photo: personalWebsite.photo,
    },
    {
        id: "togather",
        title: "ToGather Web Application",
        description: `
            ToGather is an application aiming to simplify safe event planning
            for friends and families during the COVID-19 pandemic.
            Working within a team of five computer science students,
            I designed and developed the front-end web application.
        `,
        technologies: ["React", "TypeScript", "HTML/CSS", "Figma"],
        logo: toGather.logo,
        color: { lightTheme: "#439A9C" },
        photo: toGather.photo,
    },
    {
        id: "cookbook",
        title: "CookBook Web Application Prototype",
        description: `
            CookBook is a recipe-sharing application that inspires connection through food.
            Collaborating with another UI/UX designer, I created a design system,
            wireframes, and prototypes for the application based on feedback from
            user research and usability tests.
        `,
        technologies: ["Figma"],
        website:
            "https://www.figma.com/proto/JRMVmUiVrQukBG2sXGKbLY/Prototype-Final?node-id=2%3A3&starting-point-node-id=2%3A3&scaling=contain",
        logo: cookBook.logo,
        color: { lightTheme: "#6176A9" },
        photo: cookBook.photo,
    },
];

export default portfolioData;
