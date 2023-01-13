/** @jsxImportSource @emotion/react */

import { ChildrenProps } from "../Types";

/**
 * A React component representing a container for a group of chips
 */
const ChipGroup = (props: ChipGroupProps) => (
  <ul
    css={{
      padding: 0,
      margin: 0,
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap",
    }}
  >
    {props.children}
  </ul>
);

/**
 * Props for the chip group component
 */
type ChipGroupProps = ChildrenProps;

export default ChipGroup;
