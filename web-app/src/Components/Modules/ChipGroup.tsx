import { ChildrenProps } from "../../Types";

/** A container for a group of chips */
const ChipGroup = ({ children }: ChipGroupProps) => (
  <ul
    css={{
      padding: 0,
      margin: 0,
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap",
    }}
  >
    {children}
  </ul>
);

/** Props for the chip group component */
type ChipGroupProps = ChildrenProps;

export default ChipGroup;
