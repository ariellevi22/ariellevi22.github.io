import profilePicture from '../Assets/ProfilePicture.jpg';
import SocialButtons from './Button/SocialButtons';
import { createUseStyles, useTheme } from 'react-jss';
import { AppTheme } from '../theme';
import { name, screenSizes } from '../globals';
import Container from '../Containers/Container';

/**
 * React component representing the hero header of the website, which contains
 * a heading, a photo, and social button
 */
const HeroHeader = () => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ theme });

    return (
        <div className={styles.heroHeader}>
            <div className={styles.background} />

            <Container className={styles.foreground}>
                <div />

                <img src={profilePicture} alt={name} className={styles.photo} />

                <div className={styles.content}>
                    <h1 style={{ marginBottom: 0 }}>
                        {name}
                    </h1>
                    <p style={{ marginBottom: 0 }}>
                        Computer Science Student at the University of Nebraska-Lincoln’s Raikes School
                    </p>

                    <SocialButtons />
                </div>
            </Container>
        </div>
    );
}

/**
 * Creates the hero header's styles
 */
const useStyles = createUseStyles<"heroHeader" | "background" | "foreground" | "photo" | "content", {}, AppTheme>({
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
        zIndex: 0,
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
        zIndex: 1,

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