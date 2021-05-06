import React from 'react';

/**
 * React container for "About" section elements and data.
 */
const About = () => {
    return (
        <section id="About">
            <h1>About</h1>

            <p>
                Hi there, I’m Ariel! I am an undergraduate computer science student at the
                University of Nebraska-Lincoln’s <a href="https://raikes.unl.edu/" target="_blank" rel="noopener noreferrer">Raikes School</a> of
                Computer Science and Management who is passionate about technology
                and its ability to make the world a better place.
            </p>

            <p>
                This past summer, I worked at <a href="https://zoom.us" target="_blank" rel="noopener noreferrer">Zoom</a> as
                a technical support engineer intern, helping customers achieve success using
                Zoom’s products during the difficult times of the COVID-19 pandemic.
                This upcoming summer, I will be working as an application developer intern
                at <a href="https://evergy.com" target="_blank" rel="noopener noreferrer">Evergy</a>,
                where I am excited to continue to grow my skillset and apply my learning to a real-world environment.
            </p>
        </section>
    );
}

export default About;