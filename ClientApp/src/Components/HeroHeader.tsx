import IconButton from './Button/IconButton';
import IconButtonGroup from './Button/IconButtonGroup';
import { createUseStyles, useTheme } from 'react-jss';
import { AppTheme } from '../theme';
import { noSpacing, screenSizes } from '../globals';
import Container from '../Containers/Container';
import { IconTab, ReactChildren } from '../models';

type HeroHeaderProps = {
    imgSrc: string,
    heading: string,
    socialButtons?: IconTab[],
    children: ReactChildren,
}

/**
 * React component representing the hero header of the website, which contains
 * a heading, a photo, and optional additional content (including social buttons)
 * 
 * Props:
 * * `imgSrc` the path to the profile photo
 * * `heading` the heading or title of the hero header
 * * `socialButtons` a list of social buttons to include in the hero header
 * * `children` additional content to place in the hero header, between the heading and social buttons
 */
const HeroHeader = (props: HeroHeaderProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    return (
        <div className={styles.heroHeader}>
            <div className={styles.background} />

            <Container className={styles.foreground}>
                <div />

                <img src={props.imgSrc} alt={props.heading} className={styles.photo} />

                <div className={styles.content}>
                    <h1 className={noSpacing}>{props.heading}</h1>

                    {props.children}

                    {
                        props.socialButtons &&
                        <IconButtonGroup>
                            {props.socialButtons.map(button => {
                                return (
                                    <IconButton iconName={button.iconName} iconPrefix={button.iconPrefix} hoverBackgroundColor={button.colorPrimary} hoverTextColor={button.colorSecondary}
                                        href={button.href} key={[button.iconPrefix, button.iconName].join(" ")}
                                    />
                                );
                            })}
                        </IconButtonGroup>
                    }
                </div>
            </Container>
        </div>
    );
}

/**
 * Creates the hero header's styles
 */
const useStyles = createUseStyles<"heroHeader" | "background" | "foreground" | "photo" | "content", HeroHeaderProps, AppTheme>({
    heroHeader: {
        width: "100%",
        position: "relative",
    },

    background: data => ({
        width: "50%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: data.theme.colors.accentPrimary, // fallback background color in case the gradient does not work
        backgroundImage: `linear-gradient(to right, ${data.theme.colors.accentPrimary}, ${data.theme.colors.accentSecondary})`,
        boxShadow: `0 0 1em 0 ${data.theme.colors.shadow} inset`,

        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            width: "100%",
            height: "35%",
        },
    }),

    foreground: {
        display: "grid",
        grid: "auto / 1fr auto 1fr",

        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            grid: "1fr auto 6fr / auto",
        }
    },

    photo: {
        margin: "2em 2.5em",
        width: "38vmin",
        minWidth: "12em",
        maxWidth: "22em",
        objectFit: "cover",
        borderRadius: "50%",
        boxShadow: data => data.theme.shadows.shadow,

        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            margin: "0 auto",
        }
    },

    content: {
        margin: "auto",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        alignItems: "flex-start",

        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            margin: "1.5em auto 0",
            textAlign: "center",
            alignItems: "center",
        }
    }
});

export default HeroHeader;