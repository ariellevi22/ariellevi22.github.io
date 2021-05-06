import React from 'react';

// UNL assets
import unlLogo from '../Assets/UNL/UNL_Logo.png';
import unlPhoto from '../Assets/UNL/UNL_Photo.jpg';

// BVN assets
import bvnLogo from '../Assets/BVN/BVN_Logo.png';
import bvnPhoto from '../Assets/BVN/BVN_Photo.jpg';

import IEducationData from '../Models/IEducationData';
import ModalCard from '../Components/ModalCard/ModalCard';
import { pluralize } from '../utils';

/**
 * React container for "Education" section elements and data
 */
const Education = () => {
    return (
        <section id="Education">
            <h1>Education</h1>	

            <div className="grid-2">
                {educationData.map(education => {
                    let timelineInfo = (
                        <div>
                            <h3>Timeline</h3>
                            <p>{education.startDate} &ndash; {education.endDate}</p>
                        </div>
                    );

                    let majorInfo;
                    if (education.majors) {
                        majorInfo = (
                            <div>
                                <h3>{pluralize("Major", education.majors.length)}</h3>
                                <p>{education.majors.join(", ")}</p>
                            </div>
                        );
                    }

                    let minorInfo;
                    if (education.minors) {
                        minorInfo = (
                            <div>
                                <h3>{pluralize("Minor", education.minors.length)}</h3>
                                <p>{education.minors.join(", ")}</p>
                            </div>
                        );
                    }
                    
                    let educationInfo;
                    if (majorInfo && minorInfo) {
                        educationInfo = (
                            <div className="grid-3">
                                {majorInfo}
                                {minorInfo}
                                {timelineInfo}
                            </div>
                        );
                    } else if (majorInfo) {
                        educationInfo = (
                            <div className="grid-2">
                                {majorInfo}
                                {timelineInfo}
                            </div>
                        );
                    } else if (minorInfo) {
                        educationInfo = (
                            <div className="grid-2">
                                {minorInfo}
                                {timelineInfo}
                            </div>
                        );
                    } else {
                        educationInfo = timelineInfo;
                    }

                    return (
                        <ModalCard
                            heading={education.school}
                            subheading={[education.location, education.degree].join(" \u2022 ")}
                            imgSrc={education.photo}
                            logoSrc={education.logo}
                            alt={education.school}
                            key={education.id}
                        >
                            {educationInfo}

                            {education.additionalInfo?.map(info => {
                                return (
                                    <React.Fragment>
                                        <h3>{info.heading}</h3>
                                        <p>{info.text}</p>
                                    </React.Fragment>
                                );
                            })}

                            <h3>What I Learned</h3>
                            <p>{education.classes.join(", ")}</p>
                        </ModalCard>
                    );
                })}
            </div>
        </section>
    );
}

/**
 * Education data
 */
const educationData: IEducationData[] = [
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
    },
    
    // BVN
    {
        id: 0,
        school: "Blue Valley North High School",
        location: "Overland Park, KS",
        degree: "High School",
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
    },
];

export default Education;