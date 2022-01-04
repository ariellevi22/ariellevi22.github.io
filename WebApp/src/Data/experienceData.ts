import zoomLogo from '../Assets/Zoom/Zoom_Logo.png';
import zoomPhoto from '../Assets/Zoom/Zoom_Photo.jpg';
import evergyLogo from '../Assets/Evergy/Evergy_Logo.png';
import evergyLogoAlt from '../Assets/Evergy/Evergy_Logo_Alt.png';
import evergyPhoto from '../Assets/Evergy/Evergy_Photo.jpg';
import nelnetLogo from '../Assets/Nelnet/Nelnet_Logo.png';
import nelnetPhoto from '../Assets/Nelnet/Nelnet_Photo.jpg';

import { ExperienceData } from '../models';

const experienceData: ExperienceData[] = [
    // Nelnet (Design Studio)
    {
        id: 2,
        jobTitle: "Student Software Developer (via UNL Design Studio)",
        companyName: "Nelnet",
        startDate: "September 2021",
        endDate: undefined,
        location: "Lincoln, NE",
        companyDescription: `
            Nelnet Campus Commerce delivers payment technology for a smarter campus,
            building better experiences for higher-education institutions and their communities.
            Design Studio is the capstone learning experience at the University of Nebraska-Lincoln's Raikes School,
            where student teams partner with regional or national businesses to create innovative,
            software-based solutions that fulfill business needs.
        `,
        responsibilities: [
            `
                Develop a web application for higher-education institutions
                and communities to streamline event management, event discovery, and ticket sales
            `,
            `
                Create interactive wireframes and define full-stack architecture
                to guide product development
            `,
            `   
                Collaborate with project sponsors, product managers, coaches, and software developers
                in an agile team environment to fulfill the project vision
            `
        ],
        technologies: ["React.js", "TypeScript", "HTML", "CSS"],
        companyWebsite: "https://nelnetinc.com/businesses/nelnet-campus-commerce/",
        photo: nelnetPhoto,
        logo: nelnetLogo,
        color: "#8DC319",
    },

    // Evergy
    {
        id: 1,
        jobTitle: "Application Developer Intern",
        companyName: "Evergy",
        startDate: "June 2021",
        endDate: "August 2021",
        location: "Kansas City, MO",
        companyDescription: `
            Evergy delivers power to 1.8 million customers in Kansas and Missouri, integrating
            traditional sources of energy with innovative approaches to empower a better future.
        `,
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
                Assisted with automating a data validation process of 1,600 SharePoint sites
                as part of an on-premise to cloud migration project
            `
        ],
        technologies: [
            "Power Virtual Agents",
            "Power Automate",
            "SQL",
            "Groovy",
            "Jira API",
            "Power Apps",
            "SharePoint"
        ],
        companyWebsite: "https://www.evergy.com/about-evergy/company-overview",
        photo: evergyPhoto,
        logo: evergyLogo,
        logoAlt: evergyLogoAlt,
        color: "#004E9A",
    },

    // Zoom
    {
        id: 0,
        jobTitle: "Technical Support Engineer Intern",
        companyName: "Zoom",
        startDate: "May 2020",
        endDate: "August 2020",
        location: "Overland Park, KS",
        companyDescription: `
            Zoom helps organizations bring their teams together with a reliable cloud platform
            for video conferencing, content sharing, messaging, and phone across all devices.
        `,
        responsibilities: [
            `
                Assisted over 500 customers throughout the summer via tickets, calls, chats,
                and social media to address questions, troubleshoot issues, resolve bugs,
                and consider feature requests
            `,
            `
                Collaborated with the support, engineering, and social media teams
                to resolve issues and help customers achieve success using Zoom's platform
            `,
            `
                Performed an analysis of Zoom support tickets, documentation, and procedures
                during the COVID-19 pandemic to present support management with recommendations
                for future support
            `,
        ],
        companyWebsite: "https://explore.zoom.us/en/about/",
        photo: zoomPhoto,
        logo: zoomLogo,
        color: "#2D8CFF",
    },
];

export default experienceData;