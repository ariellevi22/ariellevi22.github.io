import React from 'react';

// UNL assets
import unlLogo from '../Assets/UNL/UNL_Logo.png';
import unlPhoto from '../Assets/UNL/UNL_Photo.jpg';

// BVN assets
import bvnLogo from '../Assets/BVN/BVN_Logo.png';
import bvnPhoto from '../Assets/BVN/BVN_Photo.jpg';

import Card from '../Components/Card';
import { pluralize } from '../utils';
import SimpleGrid from './SimpleGrid';
import Section from './Section';
import { noSpacing } from '../globals';

/**
 * A React container for "Education" section elements and data
 */
const Education = () => {
    return (
        <Section id="Education">
            <h1>Education</h1>

            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1}>
                {educationData.map(education => {
                    // Create a component for the education's major
                    let majorInfo;
                    if (education.majors) {
                        majorInfo = (
                            <div>
                                <h3>{pluralize("Major", education.majors.length)}</h3>
                                <p>{education.majors.join(", ")}</p>
                            </div>
                        );
                    }

                    // Create a component for the education's minor
                    let minorInfo;
                    if (education.minors) {
                        minorInfo = (
                            <div>
                                <h3>{pluralize("Minor", education.minors.length)}</h3>
                                <p>{education.minors.join(", ")}</p>
                            </div>
                        );
                    }
                    
                    // Combine the timeline, major, and minor components as needed
                    let educationInfo;
                    if (majorInfo && minorInfo) {
                        // If both major info and minor info are given, create a two-column display for the major and minor
                        educationInfo = (
                            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1} rowGap={0}>
                                {majorInfo}
                                {minorInfo}
                            </SimpleGrid>
                        );
                    } else {
                        // If a major and/or minor is not given, there is no education data to show
                        educationInfo = undefined;
                    }

                    return (
                        <Card logoSrc={education.logo} imgSrc={education.photo} key={education.id} color={education.color}>
                            <h2>{education.school}</h2>

                            <p>
                                <em>
                                    {[
                                        education.location,
                                        education.degree,
                                        `${education.startDate} to ${education.endDate ? education.endDate : "Present"}`
                                    ].join(" \u2022 ")}
                                </em>
                            </p>

                            {educationInfo}

                            {education.additionalInfo?.map((info, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <h3>{info.heading}</h3>
                                        <p>{info.text}</p>
                                    </React.Fragment>
                                );
                            })}

                            <h3>What I Learned</h3>
                            <p className={noSpacing}>{education.classes.join(", ")}</p>
                        </Card>
                    );
                })}
            </SimpleGrid>
        </Section>
    );
}

type EducationData = {
    id: number,
    school: string,
    location: string,
    degree: string,
    majors?: string[],
    minors?: string[],
    startDate: string,
    endDate?: string,
    classes: string[],
    additionalInfo?: {heading: string, text: string}[],
    photo: string,
    logo: string,
    color?: string,
}

/**
 * Education data
 */
const educationData: EducationData[] = [
    // UNL
    {
        id: 1,
        school: "University of Nebraska-Lincoln",
        location: "Lincoln, NE",
        degree: "Bachelor of Science, Computer Science",
        majors: ["Computer Science"],
        minors: ["Business", "Mathematics"],
        startDate: "August 2019",
        endDate: "May 2023",
        classes: [
            "Software Engineering", "Data Structures (Java)", "Algorithms (JavaScript)",
            "Machine Learning (R)", "Innovation Processes (Design Thinking)",
            "Computer Systems Engineering (C)", "Unix Programming"
        ],
        additionalInfo: [
            {
                heading: "Jeffrey S. Raikes School of Computer Science and Management",
                text: `
                    The Raikes School at the University of Nebraska-Lincoln is a selective,
                    interdisciplinary honors program integrating innovative business concepts
                    into a traditional computer science curriculum, with an emphasis on practical
                    and real-world experience taught through collaborative projects.
                `,
            }
        ],
        photo: unlPhoto,
        logo: unlLogo,
        color: "#DD1A32",
    },
    
    // BVN
    {
        id: 0,
        school: "Blue Valley North High School",
        location: "Overland Park, KS",
        degree: "High School Diploma",
        startDate: "August 2015",
        endDate: "May 2019",
        classes: [
            "Beginning Programming (Java)",
            "Web Design (HTML and CSS)",
            "Graphic Design",
            "Computer Graphics/Desktop Publishing"
        ],
        photo: bvnPhoto,
        logo: bvnLogo,
        color: "#143C7D",
    },
];

export default Education;