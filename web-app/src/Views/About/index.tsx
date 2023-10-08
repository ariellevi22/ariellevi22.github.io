import { Link } from "../../Components";
import { Section } from "../../Containers";

/**
 * "About" section
 */
const About = () => {
  return (
    <Section id="about">
      <h2>About</h2>

      <p>
        Hi there, I&rsquo;m Ariel! I am a software engineer and UI/UX designer
        passionate about technology and its ability to make the world a better
        place. I strive to craft intuitive, memorable experiences for
        people&mdash;to realize the full potential of technology to improve our
        world.
      </p>

      <p>
        I recently joined{" "}
        <Link
          href="https://www.garmin.com/en-US/company/about-garmin/"
          openWithNewTab
        >
          Garmin
        </Link>{" "}
        as a software engineer, where I am excited to keep learning and growing
        my skills!
      </p>
    </Section>
  );
};

export default About;
