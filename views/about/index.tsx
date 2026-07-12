import Section from "@/containers/section";

/** About section */
const About = () => (
    <Section id="about">
        <h2>About</h2>

        <p>
            Hi, I&rsquo;m Ariel! I am a software engineer passionate about
            building technology to make the world a better place. I craft web
            applications with a focus on clean code, beautiful design, and
            intuitive user experiences.
        </p>

        <p>
            As a software engineer at{" "}
            <a
                href="https://www.garmin.com/company/about-garmin/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Garmin
            </a>
            , I work with a group of incredibly talented teammates to build{" "}
            <a
                href="https://connect.garmin.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Garmin Connect
            </a>{" "}
            and LiveTrack, helping millions of people gain insights into their
            health and well-being. My technical proficiency revolves around
            React.js on the frontend and Node.js/Express.js on the backend, but
            I am always looking for new ways to learn and expand my skills!
        </p>
    </Section>
);

export default About;
