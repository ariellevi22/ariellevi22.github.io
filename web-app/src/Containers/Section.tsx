/** @jsxImportSource @emotion/react */

import Container from "./Container";
import { navbarHeight } from "../Global";
import { ChildrenProps } from "../Types";

/**
 * A React component representing a container for a section of the app
 */
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

/**
 * Props for the section component
 */
type SectionProps = Required<ChildrenProps> & {
  /** An optional ID for the container (for example, to set up links to certain parts of the webpage) */
  id?: string;
};

export default Section;
