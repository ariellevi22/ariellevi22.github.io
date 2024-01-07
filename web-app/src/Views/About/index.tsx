import { Link } from "../../Components";
import { Section } from "../../Containers";

/**
 * "About" section
 */
const About = () => (
  <Section id="about">
    <h2>About</h2>

    <p>
      Hi, I&rsquo;m Ariel! I am a software engineer passionate about building
      technology to make the world a better place. I craft web applications with
      a focus on clean code, beautiful design, and intuitive user experiences.
    </p>

    <p>
      As a software engineer at{" "}
      <Link href="https://www.garmin.com/company/about-garmin/" openWithNewTab>
        Garmin
      </Link>
      , I work with incredibly talented teammates to build{" "}
      <Link href="https://connect.garmin.com/" openWithNewTab>
        Garmin Connect
      </Link>
      , helping millions of people gain insights into their health and
      well-being. My technical proficiency revolves around React.js on the
      frontend and Node.js/Express.js on the backend, but I am always looking
      for new ways to learn and expand my skills!
    </p>
  </Section>
);

export default About;
