import { createUseStyles, useTheme } from "react-jss";
import { ReactChildren } from "../models";
import { AppTheme } from "../theme";

type CardProps = {
    color?: string;
    logoSrc?: string;
    logoAlt?: string;
    imgSrc?: string;
    imgAlt?: string;
    isDecorativeImg?: boolean;
    children: ReactChildren;
};

/**
 * A React component representing a card
 *
 * Props:
 * * `color` the card's accent color
 * * `logoSrc` a logo to display on the card
 * * `logoAlt` alt text for the card logo
 * * `imgSrc` a cover image to display on the card
 * * `imgAlt` alt text for the card image
 * * `isDecorativeImg` whether the card image is purely for decorative purposes
 *   or has another purpose
 * * `children` any additional content to place in the card
 */
const Card = (props: CardProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    return (
        <div className={styles.card}>
            {props.imgSrc && (
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt ? props.imgAlt : ""}
                    className={styles.coverPhoto}
                />
            )}

            <div className={styles.innerContainer}>
                {props.logoSrc && (
                    <img
                        src={props.logoSrc}
                        alt={props.logoAlt ? props.logoAlt : ""}
                        className={styles.logo}
                    />
                )}
                {props.children}
            </div>
        </div>
    );
};

const borderRadius = "0.5rem";

/**
 * Creates the card's styles
 */
const useStyles = createUseStyles<
    "card" | "innerContainer" | "logo" | "coverPhoto",
    CardProps,
    AppTheme
>({
    card: {
        width: "100%",
        backgroundColor: (data) => data.theme.colors.backgroundSecondary,
        borderRadius: borderRadius,
        borderLeft: (data) =>
            `${borderRadius} solid ${
                data.color ? data.color : data.theme.colors.accentPrimary
            }`,
        boxShadow: (data) => data.theme.shadows.shadow,
    },

    innerContainer: {
        width: "100%",
        padding: "2rem",
        "& > :last-child": {
            marginBottom: 0,
        },
    },

    logo: {
        height: "2rem",
        marginBottom: borderRadius,
    },

    coverPhoto: {
        width: "100%",
        height: "12.5rem",
        objectFit: "cover",
        filter: (data) =>
            data.isDecorativeImg && "contrast(80%) brightness(80%)",
        borderRadius: `0 ${borderRadius} 0 0`,
    },
});

export default Card;
