import { ReactChildren } from '../../models';
import { createUseStyles } from 'react-jss';

type IconButtonGroupProps = {
    style?: React.CSSProperties,
    children: ReactChildren,
}

/**
 * A React component representing a container for a group of icon buttons
 * 
 * Props:
 * * `style` optional styling for the container
 * * `children` the icon buttons to put inside the container
 */
const IconButtonGroup = (props: IconButtonGroupProps) => {
    const styles = useStyles(props);

    return (
        <div className={styles.root} style={props.style}>
            {props.children}
        </div>
    );
}

/**
 * Creates the icon button group's styles
 */
const useStyles = createUseStyles<"root", IconButtonGroupProps>({
    root: {
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        fontSize: "1.1em",
    },
});

export default IconButtonGroup;