import Container from "../container";
import styles from "./section.module.css";

/** A container for a section of the app */
const Section = ({ children, className, ...props }: SectionProps) => {
  const sectionClassNames = [styles.section, className].join(" ");

  return (
    <section {...props} className={sectionClassNames}>
      <Container>{children}</Container>
    </section>
  );
};

type SectionProps = React.HTMLAttributes<HTMLElement>;

export default Section;
