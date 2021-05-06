import React from 'react';

// Zoom assets
import zoomLogo from '../Assets/Zoom/Zoom_Logo.png';
import zoomPhoto from '../Assets/Zoom/Zoom_Photo.jpg';

// Components
import ModalCard from '../Components/ModalCard/ModalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * React container for "Experience" section elements and data
 */
const Experience = () => {
    return (
        <section id="Experience">
            <h1>Experience</h1>

            <div className="grid-3 priority-grid">
                {experienceData.map(experience => {
                    return (
                        <ModalCard
                            heading={experience.jobTitle}
                            subheading={[experience.companyName, experience.location, experience.timeline].join(" \u2022 ")}
                            imgSrc={experience.photo}
                            logoSrc={experience.logo}
                            alt={experience.companyName}
                            key={experience.id}
                        >
                            <p>
                                <b>{experience.companyDescription}</b> <a href={experience.companyWebsite} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="info-circle"/>
                                </a>
                            </p>

                            <ul>
                                {experience.jobDescription.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                        </ModalCard>
                    )
                })}
            </div>
        </section>
    );
}

interface IExperienceData {
    id: number,
    jobTitle: string,
    companyName: string,
    timeline: string,
    location: string,
    companyDescription: string,
    jobDescription: string[],
    companyWebsite: string,
    photo: string,
    logo: string,
}

const experienceData: IExperienceData[] = [
    // Zoom
    {
        id: 0,
        jobTitle: "Technical Support Engineer Intern",
        companyName: "Zoom",
        timeline: "May 2020 \u2013 August 2020",
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