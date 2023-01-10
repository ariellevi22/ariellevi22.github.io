import { createUseStyles } from "react-jss";

/**
 * A React component representing a container for a group of icon buttons
 */
const IconButtonGroup = (props: IconButtonGroupProps) => {
  const styles = useStyles(props);

  return (
    <div className={styles.root} style={props.style}>
      {props.children}
    </div>
  );
};

/**
 * Creates the icon button group's styles
 */
const useStyles = createUseStyles<"root", IconButtonGroupProps>({
  root: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
});

/**
 * Props for the icon button group
 */
type IconButtonGroupProps = {
  /** Optional styling for the container */
  style?: React.CSSProperties;

  /** The icon buttons to place inside the container */
  children: React.ReactNode;
};

export default IconButtonGroup;
