import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReactChildren } from '../globals';

type ClickableProps = {
    className?: string,
    onClick: () => void,
    children: ReactChildren,
};

const useStyles = createUseStyles({
    clickable: {
        '&:hover': {
            cursor: "pointer",
        }
    }
})

/**
 * A React component representing a `<div>` that can be focused on and clicked
 */
const Clickable = (props: ClickableProps) => {
    const styles = useStyles();

    /**
     * Runs the `onClick` functionality if the user clicks enter while focused on the Clickable element
     * 
     * @param event a key press when focused on the Clickable element
     */
    const onClickEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            props.onClick();
        }
    }

    return (
        <div className={[styles.clickable, props.className].join(" ")} tabIndex={0} onClick={props.onClick} onKeyDown={onClickEnter}>
            {props.children}
        </div>
    )
}

export default Clickable;