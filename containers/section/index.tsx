import { clsx } from "@/utils/css";
import Container from "../container";
import styles from "./section.module.css";

/** A container for a section of the app */
const Section = ({ children, className, ...props }: SectionProps) => {
    const sectionClassNames = clsx(styles.section, className);

    return (
        <Container as="section" {...props} className={sectionClassNames}>
            {children}
        </Container>
    );
};

/** Props for the {@linkcode Section} component */
type SectionProps = React.JSX.IntrinsicElements["section"];

export default Section;
