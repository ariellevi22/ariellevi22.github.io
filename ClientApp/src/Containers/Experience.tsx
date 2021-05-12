// Zoom assets
import zoomLogo from '../Assets/Zoom/Zoom_Logo.png';
import zoomPhoto from '../Assets/Zoom/Zoom_Photo.jpg';

import ModalCard from '../Components/ModalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from './Section';
import Link from '../Components/Link';
import SimpleGrid from './SimpleGrid';

/**
 * React container for "Experience" section elements and data
 */
const Experience = () => {
    return (
        <Section id="Experience">
            <h1>Experience</h1>

            <SimpleGrid numColumnsLarge={3} numColumnsMedium={2} numColumnsSmall={1} priority>
                {experienceData.map(experience => {
                    return (
                        <ModalCard
                            heading={experience.jobTitle}
                            subheading={
                                [
                                    experience.companyName, experience.location,
                                    `${experience.startDate} to ${experience.endDate ? experience.endDate : "Present"}`
                                ].join(" \u2022 ")
                            }
                            imgSrc={experience.photo}
                            logoSrc={experience.logo}
                            key={experience.id}
                        >
                            <p>
                                <b>{experience.companyDescription}</b> <Link href={experience.companyWebsite} openWithNewTab aria-label={`Learn more about ${experience.companyName}`}>
                                    <FontAwesomeIcon icon="info-circle"/>
                                </Link>
                            </p>

                            <ul>
                                {experience.jobDescription.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                        </ModalCard>
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
}

const experienceData: ExperienceData[] = [
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
    },
];

export default Experience;