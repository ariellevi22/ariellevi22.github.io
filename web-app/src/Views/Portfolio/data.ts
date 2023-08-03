import { PortfolioItem } from "../../Types";
import {
    cookBookLogo,
    cookBookPhoto,
    personalWebsiteLogo,
    personalWebsitePhoto,
    toGatherLogo,
    toGatherPhoto,
} from "./Assets";

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
        technologies: ["React.js", "TypeScript", "HTML/CSS", "Figma"],
        website: "#top",
        codeWebsite: "https://github.com/ariellevi22/ariellevi22.github.io",
        logo: personalWebsiteLogo,
        photo: personalWebsitePhoto,
    },
    {
        id: "togather",
        title: "ToGather Web App",
        description: `
            ToGather is an application aiming to simplify safe event planning
            for friends and families during the COVID-19 pandemic.
            Working within a team of five computer science students,
            I designed and developed the front-end web application.
        `,
        technologies: ["React.js", "TypeScript", "HTML/CSS", "Figma"],
        logo: toGatherLogo,
        color: { lightTheme: "#439A9C" },
        photo: toGatherPhoto,
    },
    {
        id: "cookbook",
        title: "CookBook Web App Prototype",
        description: `
            CookBook is a recipe-sharing application that inspires connection through food.
            Collaborating with another UI/UX designer, I created a design system,
            wireframes, and prototypes for the application based on feedback from
            user research and usability tests.
        `,
        technologies: ["Figma"],
        website:
            "https://www.figma.com/proto/JRMVmUiVrQukBG2sXGKbLY/Prototype-Final?node-id=2%3A3&starting-point-node-id=2%3A3&scaling=contain",
        logo: cookBookLogo,
        color: { lightTheme: "#6176A9" },
        photo: cookBookPhoto,
    },
];

export default portfolioData;
