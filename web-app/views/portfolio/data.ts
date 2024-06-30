import CookBookLogo from "@/assets/logos/cookbook";
import ToGatherLogo from "@/assets/logos/togather";
import LogoIcon from "@/components/logo-icon";

import cookBookPhoto from "@/assets/photos/cookbook.png";
import personalWebsitePhoto from "@/assets/photos/personal-website.png";
import toGatherPhoto from "@/assets/photos/togather.png";

import { PortfolioItem } from "@/types";

/** Data for the website's portfolio section */
const portfolioData: PortfolioItem[] = [
    {
        id: "personal-website",
        title: "Personal Website",
        description:
            "To combine my passions for code, writing, and design, I created this personal portfolio website that showcases my experiences, accomplishments, and interests.",
        technologies: ["React.js", "TypeScript", "HTML/CSS", "Figma"],
        website: "/#top",
        codeWebsite: "https://github.com/ariellevi22/ariellevi22.github.io",
        logo: LogoIcon,
        photo: personalWebsitePhoto,
    },
    {
        id: "togather",
        title: "ToGather Web App",
        description:
            "ToGather is an application aiming to simplify safe event planning for friends and families during the COVID-19 pandemic. Working within a team of 5 computer science students, I designed and developed the front-end web application.",
        technologies: ["React.js", "TypeScript", "HTML/CSS", "Figma"],
        logo: ToGatherLogo,
        color: { light: "#439A9C" },
        photo: toGatherPhoto,
    },
    {
        id: "cookbook",
        title: "CookBook Web App Prototype",
        description:
            "CookBook is a recipe-sharing application that inspires connection through food. Collaborating with a UI/UX design classmate, I created a design system, wireframes, and prototypes for the application based on feedback from user research and usability tests.",
        technologies: ["Figma"],
        website:
            "https://www.figma.com/proto/VdFLUObQi7DC6YG2EooRcG/CookBook?type=design&node-id=2-3&t=cgjYHM2rZxra2p6S-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3",
        logo: CookBookLogo,
        color: { light: "#6176A9" },
        photo: cookBookPhoto,
    },
];

export default portfolioData;
