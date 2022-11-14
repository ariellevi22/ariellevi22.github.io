import Container from "./Container";
import { navbarHeight } from "../globals";
import { createUseStyles } from "react-jss";

/**
 * A React component representing a container for a section of the app
 */
const Section = (props: SectionProps) => {
    const styles = useStyles();

    return (
        <section id={props.id} className={styles.section}>
            <Container>{props.children}</Container>
        </section>
    );
};

/**
 * Creates the section's styles
 */
const useStyles = createUseStyles({
    section: {
        paddingTop: `${navbarHeight + 0.5}rem`,
        "&:last-child": {
            paddingBottom: `${navbarHeight + 0.5}rem`,
        },
    },
});

/**
 * Props for the section component
 */
type SectionProps = {
    /** An optional ID for the container (for example, to set up links to certain parts of the webpage) */
    id?: string;

    /** Any content to put inside the container */
    children: React.ReactNode;
};

export default Section;
