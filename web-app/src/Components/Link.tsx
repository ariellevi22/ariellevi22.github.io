import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../Theme";

/**
 * A React component that wraps the HTML `<a>` tag to include proper styling (based on the theme)
 * and the functionality to easily open the link in a new tab if desired
 */
const Link = (props: LinkProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    const {
        openWithNewTab,
        removeUnderline,
        interactionColor,
        ...anchorProps
    } = props;

    const linkClasses = [styles.root];
    if (props.className) {
        linkClasses.push(props.className);
    }

    return (
        <a
            {...anchorProps}
            target={props.openWithNewTab ? "_blank" : undefined}
            rel={props.openWithNewTab ? "noopener noreferrer" : undefined}
            className={linkClasses.join(" ")}
        >
            {props.children}
        </a>
    );
};

/**
 * Creates the link's styles
 */
const useStyles = createUseStyles<"root", LinkProps, AppTheme>({
    root: {
        color: "inherit",
        cursor: "pointer",
        textDecoration: (data) => data.removeUnderline && "none",
        transition: (data) => data.theme.transition,

        "@media (hover: hover) and (pointer: fine)": {
            "&:hover": {
                color: (data) =>
                    data.interactionColor || data.theme.colors.accentPrimary,
            },
        },

        "&:focus-visible, &:active": {
            color: (data) =>
                data.interactionColor || data.theme.colors.accentPrimary,
        },
    },
});

/**
 * Props for the link component
 */
type LinkProps = React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
> & {
    /** Whether the link should open in a new tab */
    openWithNewTab?: boolean;

    /** Whether the default underline under a link should be hidden */
    removeUnderline?: boolean;

    /** The text color when the link is interacted with */
    interactionColor?: string;
};

export default Link;
