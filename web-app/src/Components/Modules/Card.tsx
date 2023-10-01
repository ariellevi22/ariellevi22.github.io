import { useTheme } from "@emotion/react";
import { ChildrenProps } from "../../Types";
import { useLayoutEffect, useRef, useState } from "react";
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

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [isVerticalCard, setVerticalCard] = useState(true);

  useLayoutEffect(() => {
    if (enableHorizontal) {
      const handleResize = () => {
        const cardWidth = cardContainerRef.current?.offsetWidth ?? 0;
        setVerticalCard(cardWidth < screenSizes.sm + 55);
      };

      // On first render
      handleResize();

      // When the screen is resized
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [enableHorizontal]);

  return (
    <div
      ref={cardContainerRef}
      css={{
        width: "100%",
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: borderRadius,
        boxShadow: `0 0.2em 0.5em 0 ${theme.colors.shadow}`,
        display: "flex",
        flexDirection: isVerticalCard ? "column" : "row",
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
            height: isVerticalCard ? "13.5rem" : "100%",
            flex: isVerticalCard ? undefined : "0 0 30%",
            objectFit: "cover",
            borderRadius: isVerticalCard ? `0 ${borderRadius} 0 0` : 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
