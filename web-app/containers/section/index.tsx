import Container from "../container";
import styles from "./section.module.css";

/** A container for a section of the app */
const Section = ({ children, className, ...props }: SectionProps) => {
    const sectionClassNames = [styles.section, className].join(" ");

    return (
        <Container component="section" {...props} className={sectionClassNames}>
            {children}
        </Container>
    );
};

/** Props for the section component */
type SectionProps = React.HTMLAttributes<HTMLElement>;

export default Section;
