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
    // Personal website
    {
        id: "personal-website",
        title: "Personal Website",
        description: `
            To combine my passions for code, writing, and design, I created this
            personal portfolio website that showcases my experiences,
            accomplishments, and interests.
        `,
        responsibilities: [],
        technologies: ["TypeScript", "React.js", "HTML", "CSS", "Figma"],
        website: "#top",
        codeWebsite: "https://github.com/alevi22/alevi22.github.io",
        logo: personalWebsiteLogo,
        logoAlt: personalWebsiteLogoAlt,
        photo: personalWebsitePhoto,
    },

    // ToGather
    {
        id: "togather",
        title: "ToGather",
        description: `
            ToGather is an application for safely supporting connections
            between friends and family members during the COVID-19 pandemic.
        `,
        responsibilities: [
            "Designed and developed a web application aimed to simplify safe event planning for friends and families during the COVID-19 pandemic",
            "Collaborated with front-end, back-end, and database developers in an agile team environment",
        ],
        technologies: ["TypeScript", "React.js", "HTML", "CSS", "Figma"],
        logo: toGatherLogo,
        logoAlt: toGatherLogoAlt,
        photo: toGatherPhoto,
        color: "#439A9C",
    },

    // CookBook
    {
        id: "cookbook",
        title: "CookBook",
        description:
            "CookBook is a recipe-sharing application that inspires connection through food.",
        responsibilities: [
            "Collaborated with another UI/UX designer to create a design system, wireframes, and prototypes",
            "Iterated and evolved the product design based on feedback from user research and usability tests",
        ],
        technologies: ["Figma"],
        website:
            "https://www.figma.com/proto/JRMVmUiVrQukBG2sXGKbLY/Prototype-Final?node-id=2%3A3&starting-point-node-id=2%3A3&scaling=contain",
        logo: cookBookLogo,
        logoAlt: cookBookLogoAlt,
        photo: cookBookPhoto,
        color: "#6176A9",
    },
];

export default portfolioData;
