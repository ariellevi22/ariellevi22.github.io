import { createUseStyles, useTheme } from 'react-jss';
import { ReactChildren } from '../models';
import { AppTheme } from '../theme';

type CardProps = {
    color?: string,
    logoSrc?: string,
    logoAlt?: string,
    imgSrc?: string,
    imgAlt?: string,
    children: ReactChildren,
}

/**
 * A React component representing a card
 * 
 * Props:
 * * `color` the card's border accent color
 * * `logoSrc` the path to a logo to display on the top left corner of the card
 * * `imgSrc` the path to the image to use as the card's cover photo
 * * `children` the card's contents
 */
const Card = (props: CardProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    return (
        <div className={styles.card}>
            {props.imgSrc &&
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt ? props.imgAlt : ""}
                    className={styles.coverPhoto}
                />
            }

            <div className={styles.innerContainer}>
                {props.logoSrc &&
                    <img
                        src={props.logoSrc}
                        alt={props.logoAlt ? props.logoAlt : ""}
                        className={styles.logo}
                    />
                }
                {props.children}
            </div>
        </div>
    );
}

/**
 * Creates the card's styles
 */
const useStyles = createUseStyles<"card" | "innerContainer" | "logo" | "coverPhoto", CardProps, AppTheme>({
    card: {
        width: "100%",
        backgroundColor: data => data.theme.colors.backgroundSecondary,
        borderRadius: "0.6em",
        borderLeft: data => `0.6em solid ${data.color ? data.color : data.theme.colors.accentPrimary}`,
        boxShadow: data => data.theme.shadows.shadow,
    },

    innerContainer: {
        width: "100%",
        padding: "2em",
        '& > :last-child': {
            marginBottom: 0,
        }
    },

    logo: {
        height: "2em",
        marginBottom: "0.4em",
    },

    coverPhoto: {
        width: "100%",
        height: "12em",
        objectFit: "cover",
        filter: "contrast(80%) brightness(80%)",
        borderRadius: "0 0.6em 0 0",
    },
});

export default Card;