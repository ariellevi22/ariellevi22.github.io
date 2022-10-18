import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { scaleFactors } from "../globals";
import { AppTheme } from "../theme";
import Link from "./Link";

/**
 * A React component representing a simple wrapper for an HTML `<button>`, extended
 * in components such as `Button` and `IconButton` for simplicity
 */
const ButtonBase = (props: ButtonBaseProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    const classes = [styles.root];
    if (props.className) {
        classes.push(props.className);
    }

    // Separate out the props so that irrelevant props are not passed into the HTML element
    const {
        isTransparent,
        href,
        openWithNewTab,
        backgroundColor,
        textColor,
        interactionBackgroundColor,
        interactionTextColor,
        children,
        ...otherProps
    } = props;

    if (href) {
        // If the button should link somewhere, return a link tag styled as a button
        return (
            <Link
                {...otherProps}
                href={props.href}
                className={classes.join(" ")}
                role="button"
                openWithNewTab={openWithNewTab}
            >
                {props.children}
            </Link>
        );
    } else {
        // If the button does not need to link anywhere, just return it
        return (
            <button {...otherProps} className={classes.join(" ")}>
                {props.children}
            </button>
        );
    }
};

/**
 * Gets the background color for the button base when the button is being
 * interacted with (hover, focus, or active states)
 *
 * @param data props and theme data
 * @returns the background color
 */
const getInteractionBackgroundColor = (
    data: ButtonBaseProps & { theme: AppTheme }
) => {
    if (data.isTransparent) {
        return "transparent";
    } else if (data.interactionBackgroundColor) {
        return data.interactionBackgroundColor;
    } else {
        return data.theme.colors.textPrimary;
    }
};

/**
 * Gets the text color for the button base when the button is being
 * interacted with (hover, focus, or active states)
 *
 * @param data props and theme data
 * @returns the text color
 */
const getInteractionTextColor = (
    data: ButtonBaseProps & { theme: AppTheme }
) => {
    if (data.interactionTextColor) {
        return data.interactionTextColor;
    } else if (data.isTransparent) {
        return data.theme.colors.accentPrimary;
    } else {
        return data.theme.colors.textSecondary;
    }
};

/**
 * Creates the button base's styles
 */
const useStyles = createUseStyles<"root", ButtonBaseProps, AppTheme>({
    root: {
        fontSize: "1em",
        display: "inline-block",
        textDecoration: "none",
        backgroundColor: (data) =>
            data.isTransparent
                ? "transparent"
                : data.backgroundColor
                ? data.backgroundColor
                : data.theme.colors.accentPrimary,
        color: (data) =>
            data.isTransparent
                ? "inherit"
                : data.textColor
                ? data.textColor
                : data.theme.colors.textSecondary,
        border: "none",
        boxShadow: (data) =>
            data.isTransparent ? "none" : data.theme.shadows.shadow,
        transition: (data) => data.theme.transition,

        "@media (hover: hover) and (pointer: fine)": {
            "&:hover": {
                backgroundColor: (data) => getInteractionBackgroundColor(data),
                color: (data) => getInteractionTextColor(data),
                cursor: "pointer",
                boxShadow: (data) =>
                    data.isTransparent
                        ? "none"
                        : data.theme.shadows.hoverShadow,
                transform: (data) =>
                    data.isTransparent
                        ? "none"
                        : `scale(${1 + scaleFactors.small})`,
            },
        },

        "&:focus-visible": {
            backgroundColor: (data) => getInteractionBackgroundColor(data),
            color: (data) => getInteractionTextColor(data),
            cursor: "pointer",
            boxShadow: (data) =>
                data.isTransparent ? "none" : data.theme.shadows.hoverShadow,
            transform: (data) =>
                data.isTransparent
                    ? "none"
                    : `scale(${1 + scaleFactors.small})`,
        },

        "&:active": {
            backgroundColor: (data) => getInteractionBackgroundColor(data),
            color: (data) => getInteractionTextColor(data),
            transform: (data) =>
                data.isTransparent
                    ? "none"
                    : `scale(${1 - scaleFactors.small})`,
        },
    },
});

/**
 * Props for the button base component that come from default HTML attributes
 */
type ButtonBaseHTMLProps = React.HTMLAttributes<HTMLButtonElement> &
    React.HTMLAttributes<HTMLAnchorElement>;

/**
 * Props for the button base component
 */
export type ButtonBaseProps = ButtonBaseHTMLProps & {
    /** Whether the button should have a transparent background */
    isTransparent?: boolean;

    /** The link for the button to follow */
    href?: string;

    /** Whether the button should open its link in a new tab */
    openWithNewTab?: boolean;

    /** The button background color */
    backgroundColor?: string;

    /** The button text color */
    textColor?: string;

    /** The button background color when interacted with */
    interactionBackgroundColor?: string;

    /** The background text color when interacted with */
    interactionTextColor?: string;
};

export default ButtonBase;
