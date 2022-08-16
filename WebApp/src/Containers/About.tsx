import Link from "../Components/Link";
import Section from "./Section";

/**
 * A React container for "About" section elements and data
 */
const About = () => {
    return (
        <Section id="About">
            <h2>About</h2>

            <p>
                Hi there, I'm Ariel! I am an undergraduate computer science
                student at the University of Nebraska-Lincoln's{" "}
                <Link href="https://raikes.unl.edu/" openWithNewTab>
                    Raikes School
                </Link>{" "}
                of Computer Science and Management who is passionate about
                technology and its ability to make the world a better place.
            </p>
        </Section>
    );
};

export default About;
