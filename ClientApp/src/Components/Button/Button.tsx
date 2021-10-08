import React from 'react';
import { createUseStyles } from 'react-jss';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';

const useStyles = createUseStyles({
    button: {
        padding: "0.3em 0.5em",
    },
});

/**
 * A React component representing a button
 */
const Button = (props: ButtonBaseProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const styles = useStyles();

    return (
        <ButtonBase {...props} className={[styles.button, props.className].join(" ")}>{props.children}</ButtonBase>
    );
}

export default Button;