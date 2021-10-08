import { ReactChildren } from '../globals';
import { createUseStyles } from 'react-jss';

type ContainerProps = {
    className?: string,
    children: ReactChildren,
}

const useStyles = createUseStyles({
    container: {
        width: "80%",
        maxWidth: "1100px",
        margin: "auto",
    },
});

/**
 * A React component representing a container for app content
 * 
 * Props:
 * * `className` any class name to style the container
 * * `children` any content to put inside the container
 */
const Container = (props: ContainerProps) => {
    const styles = useStyles();

    return (
        <div className={[styles.container, props.className].join(" ")}>
            {props.children}
        </div>
    );
}

export default Container;