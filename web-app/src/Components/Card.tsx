/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { ChildrenProps } from "../Types";

/** A component for a display card */
const Card = (props: CardProps) => {
  const theme = useTheme();

  return (
    <div
      css={{
        width: "100%",
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: borderRadius,
        borderLeft: `${borderRadius} solid ${
          props.color ? props.color : theme.colors.accentPrimary
        }`,
        boxShadow: `0 0.2em 0.5em 0 ${theme.colors.shadow}`,
      }}
    >
      {props.imgSrc && (
        <img
          src={props.imgSrc}
          alt={props.imgAlt ? props.imgAlt : ""}
          css={{
            width: "100%",
            height: "12.5rem",
            objectFit: "cover",
            borderRadius: `0 ${borderRadius} 0 0`,
          }}
        />
      )}

      <div
        css={{
          width: "100%",
          padding: "2rem",
          "& > :last-child": {
            marginBottom: 0,
          },
        }}
      >
        {props.logoSrc && (
          <img
            src={props.logoSrc}
            alt={props.logoAlt ? props.logoAlt : ""}
            css={{ height: "2rem", marginBottom: borderRadius }}
          />
        )}
        {props.children}
      </div>
    </div>
  );
};

const borderRadius = "0.5rem";

/** Props for the card component */
type CardProps = ChildrenProps & {
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
};

export default Card;
