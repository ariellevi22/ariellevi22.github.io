import EvergyLogo from "@/assets/logos/evergy";
import GarminLogo from "@/assets/logos/garmin";
import NelnetLogo from "@/assets/logos/nelnet";
import ZoomLogo from "@/assets/logos/zoom";

import evergy2021Photo from "@/assets/photos/evergy-2021.jpg";
import garmin2022Photo from "@/assets/photos/garmin-2022.jpg";
import garmin2023Photo from "@/assets/photos/garmin-2023.png";
import nelnetDesignStudio2021Photo from "@/assets/photos/nelnet-design-studio-2021.png";
import nelnetDesignStudio2022Photo from "@/assets/photos/nelnet-design-studio-2022.png";
import zoom2020Photo from "@/assets/photos/zoom-2020.jpg";

import { ExperienceItem } from "@/types";

/** Data for the website's Experience section */
const experienceData: ExperienceItem[] = [
    {
        id: "garmin-2023",
        title: "Software Engineer",
        organization: "Garmin",
        href: "https://www.garmin.com/company/about-garmin/",
        startDate: "August 2023",
        location: "Olathe, KS",
        responsibilities: [
            "Develop new features, improvements, and bug fixes for the Garmin Connect web application, enhancing the experience for 25 million users",
        ],
        technologies: [
            "React.js",
            "JavaScript",
            "TypeScript",
            "HTML/CSS",
            "Node.js",
            "GraphQL",
            "Cloudflare",
        ],
        photo: garmin2023Photo,
        photoPosition: "50% 27%",
        logo: GarminLogo,
        color: { light: "#000000", dark: "#ffffff" },
    },
    {
        id: "nelnet-design-studio-2022",
        title: "Development Manager Intern",
        organization: "Nelnet",
        organizationNote: "via UNL Design Studio Capstone",
        href: "https://nelnetinc.com/nelnet-diversified-services/",
        startDate: "August 2022",
        endDate: "May 2023",
        location: "Lincoln, NE",
        responsibilities: [
            "Co-led and mentored a team of 5 web developers in UI/UX design, agile processes, software engineering, and software architecture",
            "Developed a web application to consolidate loan program data from 10+ systems into 1 central knowledgebase, eliminating inconsistencies and enabling call center agents to quickly find answers to customer questions",
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "React.js",
            "HTML/CSS",
            "AWS",
        ],
        photo: nelnetDesignStudio2022Photo,
        photoPosition: "33% 38%",
        logo: NelnetLogo,
        color: { light: "#8DC319" },
    },
    {
        id: "garmin-2022",
        title: "Software Engineer Intern",
        organization: "Garmin",
        href: "https://www.garmin.com/company/about-garmin/",
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
        photo: garmin2022Photo,
        logo: GarminLogo,
        color: { light: "#000000", dark: "#ffffff" },
    },
    {
        id: "nelnet-design-studio-2021",
        title: "Software Developer Intern",
        organization: "Nelnet",
        organizationNote: "via UNL Design Studio Capstone",
        href: "https://nelnetinc.com/nelnet-business-services/",
        startDate: "September 2021",
        endDate: "May 2022",
        location: "Lincoln, NE",
        responsibilities: [
            "Developed a web application enabling universities to manage events, venues, and ticket sales, decreasing the event creation timeline from multiple days to under an hour",
            "Designed interactive wireframes and defined full-stack architecture to guide product development",
            "Mentored a first-year computer science student teammate in React.js front-end development",
        ],
        technologies: ["React.js", "TypeScript", "HTML/CSS", "Figma"],
        photo: nelnetDesignStudio2021Photo,
        logo: NelnetLogo,
        color: { light: "#8DC319" },
    },
    {
        id: "evergy-2021",
        title: "Application Developer Intern",
        organization: "Evergy",
        href: "https://www.evergy.com/about-evergy/company-overview",
        startDate: "June 2021",
        endDate: "August 2021",
        location: "Kansas City, MO",
        responsibilities: [
            "Created an internal company chatbot empowering 2,000+ associates to find relevant information across multiple systems, including HR data, payroll, and policies and procedures",
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
        photo: evergy2021Photo,
        logo: EvergyLogo,
        color: { light: "#004E9A", dark: "#317CC0" },
    },
    {
        id: "zoom-2020",
        title: "Technical Support Engineer Intern",
        organization: "Zoom",
        href: "https://www.zoom.us/about/",
        startDate: "May 2020",
        endDate: "August 2020",
        location: "Overland Park, KS",
        responsibilities: [
            "Assisted over 500 customers via tickets, calls, chats, and social media to address questions, troubleshoot issues, resolve bugs, and consider feature requests",
            "Analyzed technical support procedures during the COVID-19 pandemic, including help center documentation and 60,000 support tickets, to present support leaders with ideas for improvement",
        ],
        photo: zoom2020Photo,
        photoPosition: "80% 15%",
        logo: ZoomLogo,
        color: { light: "#0b5cff" },
    },
];

export default experienceData;
