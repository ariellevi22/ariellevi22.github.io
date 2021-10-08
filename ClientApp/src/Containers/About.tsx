import Link from '../Components/Link';
import { noSpacing } from '../globals';
import Section from './Section';

/**
 * A React container for "About" section elements and data
 */
const About = () => {
    return (
        <Section id="About">
            <h1>About</h1>

            <p>
                Hi there, I’m Ariel! I am an undergraduate computer science student at the
                University of Nebraska-Lincoln’s <Link href="https://raikes.unl.edu/" openWithNewTab>Raikes School</Link> of
                Computer Science and Management who is passionate about technology
                and its ability to make the world a better place.
            </p>

            <p className={noSpacing}>
                Last summer, I worked as an application developer intern at <Link href="https://evergy.com" openWithNewTab>Evergy</Link>,
                where I created tools and integrations to help employees be more productive at work.
                Currently, I am looking for front-end or full-stack software engineering internship opportunities
                for summer 2022 to continue to grow my skillset and apply my learning to a real-world environment.
            </p>
        </Section>
    );
}

export default About;