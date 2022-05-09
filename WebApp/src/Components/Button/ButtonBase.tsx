import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { scaleFactors } from "../../globals";
import { AppTheme } from "../../theme";
import Link from "../Link";

type ButtonBaseHTMLProps = React.HTMLAttributes<HTMLButtonElement> &
    React.HTMLAttributes<HTMLAnchorElement>;

export type ButtonBaseProps = ButtonBaseHTMLProps & {
    isTransparent?: boolean;
    href?: string;
    openWithNewTab?: boolean;
    backgroundColor?: string;
    textColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
};

/**
 * A React component representing a simple wrapper for an HTML `<button>`. This component is extended
 * in components such as `Button` and `IconButton` for simplicity.
 */
const ButtonBase = (props: ButtonBaseProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    const buttonClasses = [styles.buttonBase];
    if (props.className) {
        buttonClasses.push(props.className);
    }

    // Separate out the props so that irrelevant props are not passed into the HTML element
    const {
        isTransparent,
        href,
        openWithNewTab,
        backgroundColor,
        textColor,
        hoverBackgroundColor,
        hoverTextColor,
        children,
        ...otherProps
    } = props;

    if (href) {
        // If the button should link somewhere, return a link tag styled as a button
        return (
            <Link
                {...otherProps}
                href={props.href}
                className={buttonClasses.join(" ")}
                role="button"
                openWithNewTab={openWithNewTab}
            >
                {props.children}
            </Link>
        );
    } else {
        // If the button does not need to link anywhere, just return it
        return (
            <button {...otherProps} className={buttonClasses.join(" ")}>
                {props.children}
            </button>
        );
    }
};

/**
 * Creates the button base's styles
 */
const useStyles = createUseStyles<"buttonBase", ButtonBaseProps, AppTheme>({
    buttonBase: {
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
    } else if (data.hoverBackgroundColor) {
        return data.hoverBackgroundColor;
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
    if (data.hoverTextColor) {
        return data.hoverTextColor;
    } else if (data.isTransparent) {
        return data.theme.colors.accentPrimary;
    } else {
        return data.theme.colors.textSecondary;
    }
};

export default ButtonBase;
