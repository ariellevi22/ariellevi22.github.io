import { ExperienceItem } from "../models";
import zoomLogo from "../Assets/Zoom/Logo.svg";
import zoomPhoto from "../Assets/Zoom/Photo.jpg";
import evergyLogo from "../Assets/Evergy/Logo.svg";
import evergyLogoAlt from "../Assets/Evergy/Logo_Alt.svg";
import evergyPhoto from "../Assets/Evergy/Photo.jpg";
import nelnetLogo from "../Assets/Nelnet/Logo.svg";
import nelnetLogoAlt from "../Assets/Nelnet/Logo_Alt.svg";
import nelnetPhoto from "../Assets/Nelnet/Photo.png";
import garminLogo from "../Assets/Garmin/Logo.svg";
import garminLogoAlt from "../Assets/Garmin/Logo_Alt.svg";
import garminPhoto from "../Assets/Garmin/Photo.jpg";

const experienceData: ExperienceItem[] = [
    // Garmin
    {
        id: "garmin-2022",
        title: "Software Engineer Intern",
        companyName: "Garmin",
        startDate: "May 2022",
        endDate: undefined,
        location: "Olathe, KS",
        responsibilities: [
            "Creating a user interface to enable engineers to identify components for new products",
            "Enhancing the application user experience for 5,000 users by simplifying data selection and navigation",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "JavaScript",
            "jQuery",
            "HTML/CSS",
            "Elasticsearch",
        ],
        companyWebsite: "https://www.garmin.com/en-US/company/about-garmin/",
        logo: garminLogo,
        logoAlt: garminLogoAlt,
        photo: garminPhoto,
        color: "#000000",
        colorAlt: "#FFFFFF",
    },

    // Nelnet (Design Studio)
    {
        id: "nelnet-design-studio-2021",
        title: "Student Software Developer (via UNL Design Studio)",
        companyName: "Nelnet",
        startDate: "September 2021",
        endDate: "May 2022",
        location: "Lincoln, NE",
        responsibilities: [
            `
                Developed a web application for event ticket management,
                including event administration, discovery, and sales
            `,
            `Designed wireframes and interactive prototypes`,
            `Defined full-stack architecture to guide product development`,
            `
                Collaborated with project sponsors, product managers,
                and software developers in an agile team environment
            `,
            `Guided an intern in React front-end development`,
        ],
        technologies: ["React", "TypeScript", "HTML/CSS", "Figma"],
        companyWebsite:
            "https://nelnetinc.com/businesses/nelnet-campus-commerce/",
        photo: nelnetPhoto,
        logo: nelnetLogo,
        logoAlt: nelnetLogoAlt,
        color: "#8DC319",
    },

    // Evergy
    {
        id: "evergy-2021",
        title: "Application Developer Intern",
        companyName: "Evergy",
        startDate: "June 2021",
        endDate: "August 2021",
        location: "Kansas City, MO",
        responsibilities: [
            `
                Created a chatbot to empower employees to find relevant information
                across multiple systems, including HR data, payroll, and policies and procedures
            `,
            `
                Integrated internal project databases with an enhanced user interface
                for project managers in Jira, significantly reducing the time needed
                to record project data
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
        id: "zoom-2020",
        title: "Technical Support Engineer Intern",
        companyName: "Zoom",
        startDate: "May 2020",
        endDate: "August 2020",
        location: "Overland Park, KS",
        responsibilities: [
            `
                Assisted over 500 customers via tickets, calls, chats, and social media
                to address questions, troubleshoot issues, resolve bugs, and consider feature requests
            `,
            `
                Analyzed technical support procedures during the COVID-19 pandemic,
                including help center documentation and 60,000 support tickets,
                and presented support leaders with ideas for improvement
            `,
        ],
        companyWebsite: "https://explore.zoom.us/en/about/",
        photo: zoomPhoto,
        logo: zoomLogo,
        color: "#2D8CFF",
    },
];

export default experienceData;
