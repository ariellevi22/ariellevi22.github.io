import { createUseStyles } from "react-jss";
import { screenSizes } from "../Global";

/**
 * A React component representing a container for app content
 */
const Container = (props: ContainerProps) => {
    const styles = useStyles();

    const containerClasses = [styles.root];
    if (props.className) {
        containerClasses.push(props.className);
    }

    return (
        <div className={[styles.root, props.className].join(" ")}>
            {props.children}
        </div>
    );
};

/**
 * Creates the container's styles
 */
const useStyles = createUseStyles({
    root: {
        width: "85%",
        maxWidth: screenSizes.medium - 150,
        margin: "auto",
        "& > :not(div):last-child": {
            marginBottom: 0,
        },
    },
});

/**
 * Props for the container component
 */
type ContainerProps = {
    /** Any CSS class to style the container */
    className?: string;

    /** Any content to place inside the container */
    children: React.ReactNode;
};

export default Container;
