import { createUseStyles, useTheme } from 'react-jss';
import Clickable from '../Containers/Clickable';
import { Theme } from '../theme';
import { ReactChildren, scaleFactors, transition } from '../globals';
import Link from './Link';
import React from 'react';

type ShowcaseCardProps = {
    imgSrc?: string,
    logoSrc?: string,
    href?: string,
    openWithNewTab?: boolean,
    onClick?: () => void,
    children: ReactChildren,
}

const useStyles = createUseStyles<"showcaseCard" | "showcaseActionCard" | "backgroundImage" | "logo", ShowcaseCardProps, Theme>({
    showcaseCard: {
        position: "relative",
        width: "100%",
        padding: "2em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "4em",
        backgroundColor: data => data.imgSrc ? "transparent" : data.theme.colors.dark,
        color: data => data.theme.colors.light,
        transition: transition,
        textDecoration: "none",
    },

    showcaseActionCard: {
        '&:hover': {
            transform: `scale(${1 + scaleFactors.large})`,
        },
    },

    backgroundImage: {
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        objectFit: "cover",
        filter: "brightness(30%)",
        zIndex: -1,
    },

    logo: {
        height: "2.5em",
        display: "block",
    },
});

/**
 * A React component representing a card to showcase text, a logo, and a photo background
 * 
 * Props:
 * * `imgSrc` the link to the image to showcase as the background of the card
 * * `logoSrc` the link to the logo to showcase on the card
 * * `href` a link for the showcase card should go to if clicked
 * * `openWithNewTab` whether the `href` link should open as a new tab or in the current tab
 * * `onClick` a function to execute when the showcase card is clicked
 * * `children` the contents of the showcase card
 */
const ShowcaseCard = (props: ShowcaseCardProps) => {
    const theme = useTheme<Theme>();
    const styles = useStyles({...props, theme});

    const showcaseCardContents = (
        <React.Fragment>
            {props.imgSrc ? <img src={props.imgSrc} alt="" className={styles.backgroundImage}/> : undefined}
            {props.logoSrc ? <img src={props.logoSrc} alt="Logo" className={styles.logo}/> : <span/>}

            <div>
                {props.children}
            </div>
        </React.Fragment>
    );

    if (props.href) {
        return (
            <Link href={props.href} openWithNewTab={props.openWithNewTab}
                className={[styles.showcaseCard, styles.showcaseActionCard].join(" ")}
            >
                {showcaseCardContents}
            </Link>
        );
    } else if (props.onClick) {
        return <Clickable className={[styles.showcaseCard, styles.showcaseActionCard].join(" ")} onClick={props.onClick}>{showcaseCardContents}</Clickable>;
    } else {
        return <div className={styles.showcaseCard}>{showcaseCardContents}</div>;
    }
}

export default ShowcaseCard;