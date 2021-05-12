import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../theme';
import { transition } from '../globals';

type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    openWithNewTab?: boolean,
}

const useStyles = createUseStyles<"link", LinkProps, Theme>({
    link: {
        color: "inherit",
        transition: transition,
        cursor: "pointer",

        '&:hover': {
            color: data => data.theme.colors.primary,
        },
    },
});

/**
 * A React component that wraps the HTML `<a>` tag to include proper styling (based on the theme) as well as 
 * 
 * Props:
 * * `openWithNewTab` whether the link should open in a new tab or in the current tab
 * * all other `<a>` properties
 */
const Link = (props: LinkProps) => {
    const theme = useTheme<Theme>();
    const styles = useStyles({...props, theme});

    const {openWithNewTab, ...anchorProps} = props;
    
    return (
        <a {...anchorProps}
            target={props.openWithNewTab ? "_blank" : undefined}
            rel={props.openWithNewTab ? "noopener noreferrer" : undefined}
            className={[styles.link, props.className].join(" ")}
        >
            {props.children}
        </a>
    );
}

export default Link;