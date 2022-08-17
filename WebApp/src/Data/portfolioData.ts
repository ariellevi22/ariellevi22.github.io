import { PortfolioItem } from "../models";
import personalWebsitePhoto from "../Assets/PersonalWebsite/Photo.png";
import personalWebsiteLogo from "../Assets/PersonalWebsite/Logo.svg";
import personalWebsiteLogoAlt from "../Assets/PersonalWebsite/Logo_Alt.svg";
import toGatherLogo from "../Assets/ToGather/Logo.svg";
import toGatherLogoAlt from "../Assets/ToGather/Logo_Alt.svg";
import toGatherPhoto from "../Assets/ToGather/Photo.png";
import cookBookLogo from "../Assets/CookBook/Logo.svg";
import cookBookLogoAlt from "../Assets/CookBook/Logo_Alt.svg";
import cookBookPhoto from "../Assets/CookBook/Photo.png";

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
        logo: { main: personalWebsiteLogo, alternate: personalWebsiteLogoAlt },
        photo: personalWebsitePhoto,
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
        logo: { main: toGatherLogo, alternate: toGatherLogoAlt },
        color: { main: "#439A9C" },
        photo: toGatherPhoto,
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
        logo: { main: cookBookLogo, alternate: cookBookLogoAlt },
        color: { main: "#6176A9" },
        photo: cookBookPhoto,
    },
];

export default portfolioData;
