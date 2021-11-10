import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { scaleFactors } from '../../globals';
import { AppTheme } from '../../theme';
import Link from '../Link';

type ButtonBaseHTMLProps = React.HTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLAnchorElement>;

export type ButtonBaseProps = ButtonBaseHTMLProps & {
    isTransparent?: boolean,
    href?: string,
    backgroundColor?: string,
    textColor?: string,
    hoverBackgroundColor?: string,
    hoverTextColor?: string,
}

/**
 * A React component representing a simple wrapper for an HTML `<button>`. This component is extended
 * in components such as `Button` and `IconButton` for simplicity.
 */
const ButtonBase = (props: ButtonBaseProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });
    const buttonClasses = [styles.buttonBase, props.className].join(" ")

    // Separate out the props so that irrelevant props are not passed into the HTML element
    const { isTransparent, href, backgroundColor, textColor, hoverBackgroundColor, hoverTextColor, children, ...otherProps } = props;

    if (href) {
        // If the button should link somewhere, return a link tag styled as a button
        return (
            <Link
                {...otherProps}
                href={props.href}
                className={buttonClasses}
                role="button"
                openWithNewTab
            >
                {props.children}
            </Link>
        );
    } else {
        // If the button does not need to link anywhere, just return it
        return (
            <button {...otherProps} className={buttonClasses}>
                {props.children}
            </button>
        );
    }
}

/**
 * Creates the button base's styles
 */
const useStyles = createUseStyles<"buttonBase", ButtonBaseProps, AppTheme>({
    buttonBase: data => ({
        fontSize: "1em",
        display: "inline-block",
        textDecoration: "none",
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

export default ButtonBase;