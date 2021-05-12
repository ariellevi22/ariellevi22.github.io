import { ReactChildren } from '../../globals';
import { createUseStyles } from 'react-jss';
import * as CSS from 'csstype';

type IconButtonGroupProps = {
    justifyContent?: CSS.Property.JustifyContent,
    children: ReactChildren,
}

const useStyles = createUseStyles<"iconButtonGroup", IconButtonGroupProps>({
    iconButtonGroup: {
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        fontSize: "1.1em",
        justifyContent: data => data.justifyContent ? data.justifyContent : undefined,
    },
})

/**
 * A React component representing a container for a group of icon buttons
 * 
 * Props:
 * * `justifyContent` whether the container should be left-aligned, center-aligned, etc.
 * * `children` the icon buttons to put inside the container
 */
const IconButtonGroup = (props: IconButtonGroupProps) => {
    const styles = useStyles(props);

    return (
        <div className={styles.iconButtonGroup}>
            {props.children}
        </div>
    );
}

export default IconButtonGroup;