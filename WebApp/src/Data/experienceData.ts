import { ExperienceItem } from "../models";
import zoomLogo from "../Assets/Zoom/Logo.png";
import zoomPhoto from "../Assets/Zoom/Photo.jpg";
import evergyLogo from "../Assets/Evergy/Logo.png";
import evergyLogoAlt from "../Assets/Evergy/Logo_Alt.png";
import evergyPhoto from "../Assets/Evergy/Photo.jpg";
import nelnetLogo from "../Assets/Nelnet/Logo.png";
import nelnetPhoto from "../Assets/Nelnet/Photo.png";

const experienceData: ExperienceItem[] = [
    // Nelnet (Design Studio)
    {
        id: "nelnet-design-studio",
        title: "Student Software Developer (via UNL Design Studio)",
        companyName: "Nelnet",
        startDate: "September 2021",
        endDate: "May 2022",
        location: "Lincoln, NE",
        responsibilities: [
            `
                Developed a web application for higher-education institutions
                and communities to streamline event management, event discovery, and ticket sales
            `,
            `
                Created interactive wireframes and defined full-stack architecture
                to guide product development
            `,
            `   
                Collaborated with project sponsors, product managers, coaches, and software developers
                in an agile team environment to fulfill the project vision
            `,
        ],
        technologies: ["React.js", "TypeScript", "HTML", "CSS", "Figma"],
        companyWebsite:
            "https://nelnetinc.com/businesses/nelnet-campus-commerce/",
        photo: nelnetPhoto,
        isForegroundPhoto: true,
        logo: nelnetLogo,
        color: "#8DC319",
    },

    // Evergy
    {
        id: "evergy",
        title: "Application Developer Intern",
        companyName: "Evergy",
        startDate: "June 2021",
        endDate: "August 2021",
        location: "Kansas City, MO",
        responsibilities: [
            `
                Designed, developed, and implemented a chatbot to empower employees
                to easily find relevant corporate information across multiple systems,
                including HR data, payroll, and policies and procedures
            `,
            `
                Created an API-based integration with internal project databases
                and an enhanced user interface for project managers,
                significantly reducing the amount of time needed to record project data
            `,
            `
                Helped automate a data validation process of 1,600 SharePoint sites
                as part of a cloud migration project
            `,
        ],
        technologies: [
            "Power Virtual Agents",
            "Power Automate",
            "SQL",
            "Groovy",
            "Jira API",
            "SharePoint",
        ],
        companyWebsite: "https://www.evergy.com/about-evergy/company-overview",
        photo: evergyPhoto,
        logo: evergyLogo,
        logoAlt: evergyLogoAlt,
        color: "#004E9A",
    },

    // Zoom
    {
        id: "zoom",
        title: "Technical Support Engineer Intern",
        companyName: "Zoom",
        startDate: "May 2020",
        endDate: "August 2020",
        location: "Overland Park, KS",
        responsibilities: [
            `
                Assisted over 500 customers throughout the summer via tickets, calls, chats,
                and social media to address questions, troubleshoot issues, resolve bugs,
                and consider feature requests
            `,
            `
                Analyzed technical support procedures during the COVID-19 pandemic,
                including help center documentation and 60,000 support tickets,
                to present support management with recommendations for the future
            `,
        ],
        companyWebsite: "https://explore.zoom.us/en/about/",
        photo: zoomPhoto,
        logo: zoomLogo,
        color: "#2D8CFF",
    },
];

export default experienceData;
