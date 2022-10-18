import { createUseStyles } from "react-jss";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

/**
 * A React component representing a button
 */
const Button = (props: ButtonBaseProps) => {
    const styles = useStyles();

    return (
        <ButtonBase
            {...props}
            className={[styles.root, props.className].join(" ")}
        >
            {props.children}
        </ButtonBase>
    );
};

/**
 * Creates the button's styles
 */
const useStyles = createUseStyles({
    root: {
        padding: "0.25rem 0.5rem",
        borderRadius: "0.5rem",
    },
});

export default Button;
