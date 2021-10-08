// Zoom assets
import zoomLogo from '../Assets/Zoom/Zoom_Logo.png';
import zoomPhoto from '../Assets/Zoom/Zoom_Photo.jpg';

// Evergy assets
import evergyLogo from '../Assets/Evergy/Evergy_Logo.png';
import evergyLogoAlt from '../Assets/Evergy/Evergy_Logo_Alt.png';
import evergyPhoto from '../Assets/Evergy/Evergy_Photo.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from './Section';
import Link from '../Components/Link';
import SimpleGrid from './SimpleGrid';
import Card from '../Components/Card';
import { useTheme } from 'react-jss';
import { AppTheme } from '../theme';
import ChipGroup from '../Components/Chip/ChipGroup';
import Chip from '../Components/Chip/Chip';
import React from 'react';

/**
 * A React container for "Experience" section elements and data
 */
const Experience = () => {
    const theme = useTheme<AppTheme>();

    return (
        <Section id="Experience">
            <h1>Experience</h1>

            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1}>
                {experienceData.map(experience => {
                    return (
                        <Card logoSrc={(experience.logoAlt && theme.type === "dark") ? experience.logoAlt : experience.logo}
                            imgSrc={experience.photo} color={experience.color} key={experience.id}
                        >
                            <h2>{experience.jobTitle}</h2>
                            
                            <p>
                                <em>
                                    <Link href={experience.companyWebsite} openWithNewTab>
                                        {experience.companyName}
                                    </Link> &bull; {experience.location} &bull; {`${experience.startDate} to ${experience.endDate ? experience.endDate : "Present"}`}
                                </em>
                            </p>
                            
                            <p>{experience.companyDescription}</p>
                            
                            <ul>
                                {experience.responsibilities.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                            
                            {experience.technologies ?
                                <React.Fragment>
                                    <h3>Technologies Used</h3>

                                    <ChipGroup>
                                        {experience.technologies.map(technology => <Chip key={technology}>{technology}</Chip>)}
                                    </ChipGroup>
                                </React.Fragment> : undefined
                            }
                        </Card>
                    )
                })}
            </SimpleGrid>
        </Section>
    );
}

type ExperienceData = {
    id: number,
    jobTitle: string,
    companyName: string,
    startDate: string,
    endDate?: string,
    location: string,
    companyDescription: string,
    responsibilities: string[],
    technologies?: string[],
    companyWebsite: string,
    photo: string,
    logo: string,
    logoAlt?: string,
    color?: string,
}

const experienceData: ExperienceData[] = [
    // Evergy
    {
        id: 1,
        jobTitle: "Application Developer Intern",
        companyName: "Evergy",
        startDate: "June 2021",
        endDate: "August 2021",
        location: "Kansas City, MO",
        companyDescription: "Evergy delivers power to 1.7 million customers in Kansas and Missouri, integrating traditional sources of energy with innovative approaches to empower a better future.",
        responsibilities: [
            "Designed, developed, and implemented a chatbot to empower employees to easily find relevant corporate information across multiple systems, including HR data, payroll, and policies and procedures",
            "Created an API-based integration with internal project databases and an enhanced user interface for project managers, significantly reducing the amount of time needed to record project data",
            "Assisted with automating a data validation process of 1,600 SharePoint sites as part of an on-premise to cloud migration project"
        ],
        technologies: ["Power Virtual Agents", "Power Automate", "SQL", "Groovy", "Jira API", "Power Apps", "SharePoint"],
        companyWebsite: "https://evergy.com",
        photo: evergyPhoto,
        logo: evergyLogo,
        logoAlt: evergyLogoAlt,
        color: "#77BC40",
    },

    // Zoom
    {
        id: 0,
        jobTitle: "Technical Support Engineer Intern",
        companyName: "Zoom",
        startDate: "May 2020",
        endDate: "August 2020",
        location: "Overland Park, KS",
        companyDescription: "Zoom helps organizations bring their teams together with a reliable cloud platform for video conferencing, content sharing, messaging, and phone across all devices.",
        responsibilities: [
            "Assisted over 500 customers throughout the summer via tickets, calls, chats, and social media to address questions, troubleshoot issues, resolve bugs, and consider feature requests",
            "Collaborated with the support, engineering, and social media teams to resolve issues and help customers achieve success using Zoom’s platform",
            "Performed an analysis of Zoom support tickets, documentation, and procedures during the COVID-19 pandemic to present support management with recommendations for future support",
        ],
        companyWebsite: "https://zoom.us",
        photo: zoomPhoto,
        logo: zoomLogo,
        color: "#2D8CFF",
    },
];

export default Experience;