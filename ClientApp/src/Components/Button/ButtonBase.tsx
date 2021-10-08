import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { scaleFactors } from '../../globals';
import { AppTheme } from '../../theme';
import Link from '../Link';

export type ButtonBaseProps = {
    isTransparent?: boolean,
    href?: string,
    backgroundColor?: string,
    textColor?: string,
    hoverBackgroundColor?: string,
    hoverTextColor?: string,
}

/**
 * Creates the button's styles
 */
const useStyles = createUseStyles<"buttonBase", ButtonBaseProps, AppTheme>({
    buttonBase: data => ({
        fontSize: "1em",
        backgroundColor: data.isTransparent ? "transparent" : (data.backgroundColor ? data.backgroundColor : data.theme.colors.accentPrimary),
        color: data.isTransparent ? "inherit" : (data.textColor ? data.textColor : data.theme.colors.textSecondary),
        border: "none",
        boxShadow: data.isTransparent ? "none" : data.theme.shadows.shadow,
        transition: data.theme.transition,

        '&:hover': {
            backgroundColor: data.isTransparent ? "transparent" : (data.hoverBackgroundColor ? data.hoverBackgroundColor : data.theme.colors.textPrimary),
            color: data.hoverTextColor ? data.hoverTextColor : (data.isTransparent ? data.theme.colors.accentPrimary : data.theme.colors.textSecondary),
            cursor: "pointer",
            boxShadow: data.isTransparent ? "none" : data.theme.shadows.hoverShadow,
            transform: data.isTransparent ? "none" : `scale(${1 + scaleFactors.small})`,
        },
        
        '&:active': {
            transform: data.isTransparent ? "none" : `scale(${1 - scaleFactors.small})`,
        },
    })
});

/**
 * A React component representing a simple wrapper for an HTML `<button>`. This component is extended
 * in components such as `Button` and `IconButton` for simplicity.
 */
const ButtonBase = (props: ButtonBaseProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({...props, theme});

    // Separate out the props so that irrelevant props are not passed into the HTML button
    const {isTransparent, href, backgroundColor, textColor, hoverBackgroundColor, hoverTextColor, children, ...buttonProps} = props;

    // Create the general HTML button
    let buttonBase = (
        <button {...buttonProps} className={[styles.buttonBase, props.className].join(" ")}>{children}</button>
    );

    if (href) {
        // If the button should link somewhere, wrap it in a link tag
        return (
            <Link href={href} openWithNewTab>{buttonBase}</Link>
        );
    } else {
        // If the button does not need to link anywhere, just return it
        return buttonBase;
    }
}

export default ButtonBase;