import { useTheme } from "@emotion/react";
import { ChildrenProps } from "../../Types";

/** A component for an informational chip */
const Chip = ({ children }: ChipProps) => {
  const theme = useTheme();

  return (
    <li
      css={{
        backgroundColor: theme.colors.backgroundTertiary,
        borderRadius: "1rem",
        padding: "0.25rem 0.5rem",
        display: "inline-block",
        margin: 0,
      }}
    >
      {children}
    </li>
  );
};

/** Props for the chip component */
type ChipProps = ChildrenProps;

export default Chip;
