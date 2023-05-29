/** @jsxImportSource @emotion/react */

import { navbarHeight } from "../../Global";
import { ChildrenProps } from "../../Types";
import Container from "./Container";

/** A container for a section of the app */
const Section = (props: SectionProps) => {
  const { id, children } = props;

  return (
    <section
      id={id}
      css={{
        paddingTop: `${navbarHeight + 0.5}rem`,
        "&:last-child": {
          paddingBottom: `${navbarHeight + 0.5}rem`,
        },
      }}
    >
      <Container>{children}</Container>
    </section>
  );
};

/** Props for the section component */
type SectionProps = ChildrenProps & {
  /** An ID for the container */
  id?: string;
};

export default Section;
