import React from 'react';

// UNL assets
import unlLogo from '../Assets/UNL/UNL_Logo.png';
import unlPhoto from '../Assets/UNL/UNL_Photo.jpg';

// BVN assets
import bvnLogo from '../Assets/BVN/BVN_Logo.png';
import bvnPhoto from '../Assets/BVN/BVN_Photo.jpg';

// Components
import ModalCard from '../Components/ModalCard/ModalCard';

/**
 * React container for "Education" section elements and data.
 */
const Education = () => {
    return (
        <section id="Education">
            <h1>Education</h1>	

            <div className="grid-2">
                {EDUCATION_DATA.map(education => {
                    return (
                        <ModalCard
                            heading={education.school}
                            subheading={[education.location, education.degree].join(" \u2022 ")}
                            imgSrc={education.photo}
                            logoSrc={education.logo}
                            alt={education.school}
                            key={education.id}
                        >
                            {education.content}
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
const EDUCATION_DATA = [
    // UNL
    {
        id: 1,
        school: "University of Nebraska-Lincoln",
        location: "Lincoln, NE",
        degree: "Bachelor of Science, Computer Science",
        content: (
            <React.Fragment>
                <div className="grid-3">
                    <div>
                        <h3>Major</h3>
                        <p>Computer Science</p>
                    </div>

                    <div>
                        <h3>Minors</h3>
                        <p>Business and Mathematics</p>
                    </div>
                    
                    <div>
                        <h3>Timeline</h3>
                        <p>August 2019 &ndash; May 2023</p>
                    </div>
                    
                </div>
                <h3>Jeffrey S. Raikes School of Computer Science and Management</h3>
                <p>
                    The <a href="https://raikes.unl.edu" target="_blank" rel="noopener noreferrer">Raikes School</a> at
                    the University of Nebraska-Lincoln is a selective, 
                    interdisciplinary honors program integrating innovative business concepts 
                    into a traditional computer science curriculum, with an emphasis on 
                    practical and real-world experience taught through collaborative projects.
                </p>

                <h3>What I Learned</h3>
                <p>
                    Software Engineering, Data Structures (Java), Algorithms (JavaScript),
                    Machine Learning (R), Innovation Processes (Design Thinking),
                    Computer Systems Engineering (C), Unix Programming
                </p>
            </React.Fragment>
        ),
        photo: unlPhoto,
        logo: unlLogo,
    },
    
    // BVN
    {
        id: 0,
        school: "Blue Valley North High School",
        location: "Overland Park, KS",
        degree: "High School",
        content: (
            <React.Fragment>
                <h3>Timeline</h3>
                <p>August 2015 &ndash; May 2019</p>

                <h3>What I Learned</h3>
                <p>
                    Beginning Programming (Java), Web Design (HTML and CSS),
                    Graphic Design, Computer Graphics/Desktop Publishing
                </p>
            </React.Fragment>
        ),
        photo: bvnPhoto,
        logo: bvnLogo,
    },
];

export default Education;