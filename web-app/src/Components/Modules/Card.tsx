import { useTheme } from "@emotion/react";
import { ChildrenProps } from "../../Types";
import { screenSizes } from "../../Global";

/** A component for a display card */
const Card = ({
  color,
  enableHorizontal,
  logoSrc,
  logoAlt,
  imgSrc,
  imgPosition,
  children,
}: CardProps) => {
  const theme = useTheme();

  const containerName = "card";
  const breakpoint = screenSizes.sm + 50;
  const containerMinWidthMediaQuery = `@container ${containerName} (min-width: ${breakpoint}px)`;

  return (
    <div css={{ container: `${containerName} / inline-size` }}>
      <div
        css={{
          width: "100%",
          height: "100%",
          backgroundColor: theme.colors.backgroundSecondary,
          borderRadius: borderRadius,
          boxShadow: `0 0.2em 0.5em 0 ${theme.colors.shadow}`,
          display: "flex",
          flexDirection: "column",

          [containerMinWidthMediaQuery]: enableHorizontal
            ? {
                flexDirection: "row",
              }
            : undefined,
        }}
        style={{
          borderLeft: `${borderRadius} solid ${
            color ?? theme.colors.accentPrimary
          }`,
        }}
      >
        {imgSrc && (
          <div
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: imgPosition,
            }}
            css={{
              height: "13.5rem",
              objectFit: "cover",
              borderRadius: `0 ${borderRadius} 0 0`,
              backgroundSize: "cover",
              backgroundPosition: "center",

              [containerMinWidthMediaQuery]: enableHorizontal
                ? {
                    height: "100%",
                    flex: "0 0 28%",
                    borderRadius: 0,
                  }
                : undefined,
            }}
            role="img"
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
          {logoSrc && (
            <img
              src={logoSrc}
              alt={logoAlt ?? ""}
              css={{ height: "1.75rem", marginBottom: borderRadius }}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

const borderRadius = "0.5rem";

/** Props for the card component */
type CardProps = ChildrenProps & {
  /** The card's accent color */
  color?: string;

  /** Whether the card can display with a horizontal layout (if large enough) */
  enableHorizontal?: boolean;

  /** A logo to display on the card */
  logoSrc?: string;

  /** Alt text for the card logo */
  logoAlt?: string;

  /** A cover image to display on the card */
  imgSrc?: string;

  /** The CSS background position string for the cover image */
  imgPosition?: string;
};

export default Card;
