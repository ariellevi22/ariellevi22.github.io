import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { AppTheme } from '../theme';

type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    openWithNewTab?: boolean,
}

const useStyles = createUseStyles<"link", LinkProps, AppTheme>({
    link: {
        color: "inherit",
        cursor: "pointer",
        transition: data => data.theme.transition,

        '&:hover': {
            color: data => data.theme.colors.accentPrimary,
        },
    },
});

/**
 * A React component that wraps the HTML `<a>` tag to include proper styling (based on the theme)
 * and the functionality to easily open the link in a new tab if desired
 * 
 * Props:
 * * `openWithNewTab` whether the link should open in a new tab or in the current tab
 * * all other `<a>` properties
 */
const Link = (props: LinkProps) => {
    const theme = useTheme<AppTheme>();
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