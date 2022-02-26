import { ReactChildren } from "../models";
import { createUseStyles } from "react-jss";
import { screenSizes } from "../globals";

type ContainerProps = {
    className?: string;
    children: ReactChildren;
};

/**
 * A React component representing a container for app content
 *
 * Props:
 * * `className` any class name to style the container
 * * `children` any content to put inside the container
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

export default Container;
