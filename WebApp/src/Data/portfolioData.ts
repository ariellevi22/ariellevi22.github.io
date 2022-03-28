import personalWebsitePhoto from "../Assets/PersonalWebsite/Personal_Website_Photo.png";
import personalWebsiteLogo from "../Assets/PersonalWebsite/Personal_Website_Logo.png";
import personalWebsiteLogoAlt from "../Assets/PersonalWebsite/Personal_Website_Logo_Alt.png";
import toGatherLogo from "../Assets/ToGather/ToGather_Logo.png";
import toGatherLogoAlt from "../Assets/ToGather/ToGather_Logo_Alt.png";
import toGatherPhoto from "../Assets/ToGather/ToGather_Photo.png";

import { PortfolioItem } from "../models";

const portfolioData: PortfolioItem[] = [
    // Personal website
    {
        id: 0,
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
        id: 1,
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
];

export default portfolioData;
