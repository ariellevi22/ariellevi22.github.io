import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../Theme";

/**
 * A React component representing a card
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
    boxShadow: (data) => `0 0.2em 0.5em 0 ${data.theme.colors.shadow}`,
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
    borderRadius: `0 ${borderRadius} 0 0`,
  },
});

/**
 * Props for the card component
 */
type CardProps = {
  /** The card's accent color */
  color?: string;

  /** A logo to display on the card */
  logoSrc?: string;

  /** Alt text for the card logo */
  logoAlt?: string;

  /** A cover image to display on the card */
  imgSrc?: string;

  /** Alt text for the card image */
  imgAlt?: string;

  /** Any additional content to place in the card */
  children: React.ReactNode;
};

export default Card;
