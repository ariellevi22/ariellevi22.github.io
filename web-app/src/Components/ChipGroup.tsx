import { createUseStyles } from "react-jss";

/**
 * A React component representing a container for a group of chips
 */
const ChipGroup = (props: ChipGroupProps) => {
  const styles = useStyles();

  return (
    <ul className={styles.root} style={props.style}>
      {props.children}
    </ul>
  );
};

/**
 * Creates the chip group's styles
 */
const useStyles = createUseStyles({
  root: {
    padding: 0,
    margin: 0,
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
});

/**
 * Props for the chip group component
 */
type ChipGroupProps = {
  /** Optional styling for the container */
  style?: React.CSSProperties;

  /** The chips to put inside the container */
  children: React.ReactNode;
};

export default ChipGroup;
