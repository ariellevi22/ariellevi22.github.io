/** @jsxImportSource @emotion/react */

import Container from "./Container";
import { navbarHeight } from "../Global";
import { ChildrenProps } from "../Types";

/** A container for a section of the app */
const Section = (props: SectionProps) => (
  <section
    id={props.id}
    css={{
      paddingTop: `${navbarHeight + 0.5}rem`,
      "&:last-child": {
        paddingBottom: `${navbarHeight + 0.5}rem`,
      },
    }}
  >
    <Container>{props.children}</Container>
  </section>
);

/** Props for the section component */
type SectionProps = ChildrenProps & {
  /** An ID for the container */
  id?: string;
};

export default Section;
