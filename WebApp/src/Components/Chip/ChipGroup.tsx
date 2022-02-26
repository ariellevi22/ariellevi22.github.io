import { createUseStyles } from "react-jss";
import { ReactChildren } from "../../models";

type ChipGroupProps = {
    style?: React.CSSProperties;
    children: ReactChildren;
};

/**
 * A React component representing a container for a group of chips
 *
 * Props:
 * * `style` optional styling for the container
 * * `children` the chips to put inside the container
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

export default ChipGroup;
