import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { title, scaleFactors, screenSizes } from "../globals";
import { AppTheme } from "../theme";
import Link from "./Link";
import LogoIcon from "./LogoIcon";

/**
 * A React component representing the application's logo (including the icon and text),
 * which can optionally link to a website or part of the app when clicked.
 */
const Logo = (props: LogoProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    // Style the container that holds the logo icon and text
    const classes = [styles.logoContainer];
    if (props.stacked) {
        // If the logo icon and text should be stacked instead of side by side, add additional stacked styles
        classes.push(styles.stacked);
    }
    if (props.href) {
        // If the logo should act as a link, add link styling
        classes.push(styles.logoContainerLink);
    }

    const logoBase = (
        <>
            <LogoIcon color={props.color} />
            <p className={styles.logoText}>{title}</p>
        </>
    );

    if (props.href) {
        // If an address was provided for the logo to link to, add it
        return (
            <Link href={props.href} className={classes.join(" ")}>
                {logoBase}
            </Link>
        );
    } else {
        return (
            <div className={classes.join(" ")} onClick={props.onClick}>
                {logoBase}
            </div>
        );
    }
};

/**
 * Creates the logo's styles
 */
const useStyles = createUseStyles<
    "logoText" | "logoContainer" | "stacked" | "logoContainerLink",
    LogoProps,
    AppTheme
>({
    logoText: {
        color: (data) => (data.color ? data.color : "inherit"),
        fontSize: "1.5rem",
        padding: 0,
        margin: 0,
        transition: (data) => data.theme.transition,
        whiteSpace: "nowrap",

        // Hide the text on tiny screens
        [`@media screen and (max-width: ${screenSizes.tiny}px)`]: {
            display: "none",
        },
    },
    logoContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        gap: "1rem",
    },
    stacked: {
        flexDirection: "column",
        gap: "0.5rem",
    },
    logoContainerLink: {
        textDecoration: "none",
        "@media (hover: hover) and (pointer: fine)": {
            "&:hover svg": {
                color: (data) =>
                    data.interactionColor
                        ? data.interactionColor
                        : data.theme.colors.accentPrimary,
                transform: `scale(${1 + scaleFactors.tiny})`,
            },
            "&:hover p": {
                color: (data) =>
                    data.interactionColor
                        ? data.interactionColor
                        : data.theme.colors.accentPrimary,
            },
        },
        "&:focus-visible svg": {
            color: (data) =>
                data.interactionColor
                    ? data.interactionColor
                    : data.theme.colors.accentPrimary,
            transform: `scale(${1 + scaleFactors.tiny})`,
        },
        "&:active svg": {
            transform: `scale(${1 - scaleFactors.tiny})`,
        },
        "&:focus-visible p": {
            color: (data) =>
                data.interactionColor
                    ? data.interactionColor
                    : data.theme.colors.accentPrimary,
        },
    },
});

/**
 * Props for the logo component
 */
type LogoProps = {
    /** A link for the logo to go to when clicked on */
    href?: string;

    /**
     * Whether the logo should show the logo text below the icon (stacked)
     * or side by side with the icon (default)
     */
    stacked?: boolean;

    /** The color in which the logo should be displayed */
    color?: string;

    /** The color in which the logo should be displayed when interacted with */
    interactionColor?: string;

    /** A function to call when the logo is clicked */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default Logo;
