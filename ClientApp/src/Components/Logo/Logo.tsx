import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { name, scaleFactors } from '../../globals';
import { AppTheme } from '../../theme';
import Link from '../Link';
import LogoIcon from './LogoIcon';

type LogoProps = {
    href?: string,
    stacked?: boolean,
    color?: string,
    hoverColor?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
}

/**
 * A React component representing the application's logo (including the icon and text),
 * which can optionally link to a website or part of the app when clicked.
 * 
 * Props:
 * * `href` a link for the logo to go to when clicked on
 * * `stacked` whether the logo should show the logo text below the icon (stacked) or
 *   side by side with the icon (default)
 * * `color` the color in which the logo should be displayed (default value is "inherit")
 * * `hoverColor` the color in which the logo should be displayed when hovered over
 * * `onClick` a function to call when the logo is clicked
 */
const Logo = (props: LogoProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({...props, theme})

    // Style the container that holds the logo icon and text
    let logoContainerClasses = [styles.logoContainer];
    if (props.stacked) {
        // If the logo icon and text should be stacked instead of side by side, add additional stacked styles
        logoContainerClasses.push(styles.stacked);
    }

    let logo = (
        <div className={logoContainerClasses.join(" ")} onClick={props.onClick}>
            <LogoIcon color={props.color}/>
            <p className={styles.logoText}>{name}</p>
        </div>
    );

    if (props.href) {
        // If an href was provided for the logo to link to, add the href
        return <Link href={props.href} className={styles.logoContainerLink}>{logo}</Link>;
    } else {
        return logo;
    }
}

/**
 * Creates the logo's styles
 */
const useStyles = createUseStyles<"logoText" | "logoContainer" | "stacked" | "logoContainerLink", LogoProps, AppTheme>({
    logoText: {
        color: data => data.color ? data.color : "inherit",
        fontSize: "1.5em",
        padding: 0,
        margin: 0,
        transition: data => data.theme.transition,
    },
    logoContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        gap: "1em",
    },
    stacked: {
        flexDirection: "column",
        gap: "0.5em",
    },
    logoContainerLink: {
        textDecoration: "none",
        '&:hover svg, &:focus svg': {
            color: data => data.hoverColor ? data.hoverColor : data.theme.colors.accentPrimary,
            transform: `scale(${1 + scaleFactors.tiny})`,
        },
        '&:active svg': {
            transform: `scale(${1 - scaleFactors.tiny})`,
        },
        '&:hover p, &:focus p': {
            color: data => data.hoverColor ? data.hoverColor : data.theme.colors.accentPrimary,
        },
    }
});

export default Logo;