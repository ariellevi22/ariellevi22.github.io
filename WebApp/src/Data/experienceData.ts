import { ExperienceItem, Organization } from "../models";
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

const garminData: Organization = {
    name: "Garmin",
    website: "https://www.garmin.com/en-US/company/about-garmin/",
    logo: garminLogo,
    logoAlternate: garminLogoAlt,
    photo: garminPhoto,
    color: "#000000",
    colorAlternate: "#FFFFFF",
};

const nelnetData: Organization = {
    name: "Nelnet",
    website: "https://nelnetinc.com/businesses/nelnet-campus-commerce/",
    photo: nelnetPhoto,
    logo: nelnetLogo,
    logoAlternate: nelnetLogoAlt,
    color: "#8DC319",
};

const evergyData: Organization = {
    name: "Evergy",
    website: "https://www.evergy.com/about-evergy/company-overview",
    photo: evergyPhoto,
    logo: evergyLogo,
    logoAlternate: evergyLogoAlt,
    color: "#004E9A",
    colorAlternate: "#317CC0",
};

const zoomData: Organization = {
    name: "Zoom",
    website: "https://explore.zoom.us/en/about/",
    photo: zoomPhoto,
    logo: zoomLogo,
    color: "#2D8CFF",
};

const experienceData: ExperienceItem[] = [
    {
        id: "garmin-2022",
        title: "Software Engineer Intern",
        organization: garminData,
        startDate: "May 2022",
        endDate: "August 2022",
        location: "Olathe, KS",
        responsibilities: [
            "Created a user interface and API endpoints to help engineers better identify components for new product designs, saving $100,000+ per year",
            "Enhanced internal application user experience for 5,000 users by streamlining data selection and navigation",
            "Developed webservices and implemented data validation to simplify product lifecycle management",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "JavaScript",
            "jQuery",
            "HTML/CSS",
            "Elasticsearch",
            "SQL",
        ],
    },
    {
        id: "nelnet-design-studio-2021",
        title: "Software Developer (via UNL Design Studio)",
        organization: nelnetData,
        startDate: "September 2021",
        endDate: "May 2022",
        location: "Lincoln, NE",
        responsibilities: [
            "Developed a web application for event ticket management, including event administration, discovery, and sales, decreasing the event creation timeline from multiple days to under an hour",
            "Designed interactive wireframes and defined full-stack architecture to guide product development",
            "Mentored an intern in React.js front-end development",
        ],
        technologies: ["React", "TypeScript", "HTML/CSS", "Figma"],
    },
    {
        id: "evergy-2021",
        title: "Application Developer Intern",
        organization: evergyData,
        startDate: "June 2021",
        endDate: "August 2021",
        location: "Kansas City, MO",
        responsibilities: [
            "Created a chatbot empowering 2,000+ associates to find relevant information across multiple systems, including HR data, payroll, and policies and procedures",
            "Integrated internal project databases with an enhanced user interface for project managers in Jira, reducing the time needed to record project data by up to 90%",
        ],
        technologies: [
            "Power Virtual Agents",
            "Power Automate",
            "SQL",
            "Groovy",
            "Jira API",
            "SharePoint",
        ],
    },
    {
        id: "zoom-2020",
        title: "Technical Support Engineer Intern",
        organization: zoomData,
        startDate: "May 2020",
        endDate: "August 2020",
        location: "Overland Park, KS",
        responsibilities: [
            "Assisted over 500 customers via tickets, calls, chats, and social media to address questions, troubleshoot issues, resolve bugs, and consider feature requests",
            "Analyzed technical support procedures during the COVID-19 pandemic, including help center documentation and 60,000 support tickets, to present support leaders with ideas for improvement",
        ],
    },
];

export default experienceData;
