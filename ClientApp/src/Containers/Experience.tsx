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
                                    {
                                        [
                                            experience.companyName, experience.location,
                                            `${experience.startDate} to ${experience.endDate ? experience.endDate : "Present"}`
                                        ].join(" \u2022 ")
                                    }
                                </em>
                            </p>

                            <p>
                                {experience.companyDescription} <Link href={experience.companyWebsite} openWithNewTab>
                                    <FontAwesomeIcon icon="info-circle" aria-label={`Learn more about ${experience.companyName}`}/>
                                </Link>
                            </p>

                            <ul>
                                {experience.jobDescription.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
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
    jobDescription: string[],
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
        endDate: undefined,
        location: "Kansas City, MO",
        companyDescription: "Evergy delivers power to 1.7 million customers in Kansas and Missouri, integrating traditional sources of energy with innovative approaches to empower a better future.",
        jobDescription: [],
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
        jobDescription: [
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