import Link from "../../Components/Link";
import Section from "../../Containers/Section";

/**
 * A React container for "About" section elements and data
 */
const About = () => {
  return (
    <Section id="about">
      <h2>About</h2>

      <p>
        Hi there, I&rsquo;m Ariel! I am a software engineer, UI/UX designer, and
        computer science student passionate about technology and its ability to
        make the world a better place. I strive to craft intuitive, memorable
        experiences for people&mdash;to realize the full potential of technology
        to improve our world.
      </p>

      <p>
        Currently, I am studying computer science and business at the University
        of Nebraska-Lincoln&rsquo;s{" "}
        <Link href="https://raikes.unl.edu/" openWithNewTab>
          Raikes School
        </Link>
        . After graduation in May, I will join{" "}
        <Link
          href="https://www.garmin.com/en-US/company/about-garmin/"
          openWithNewTab
        >
          Garmin
        </Link>{" "}
        as a frontend software engineer, where I am excited to keep learning and
        growing my skills!
      </p>
    </Section>
  );
};

export default About;
