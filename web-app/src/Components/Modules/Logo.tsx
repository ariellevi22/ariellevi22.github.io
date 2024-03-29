import { CSSObject, useTheme } from "@emotion/react";
import { useId } from "react";
import { screenSizes, title } from "../../Global";
import { transition } from "../../Theme";
import Link from "./Link";
import LogoIcon from "./LogoIcon";

/**
 * A component for the application's logo (including the icon and text),
 * which can optionally link to a website or part of the app when clicked
 */
const Logo = ({
  href,
  stacked,
  color,
  accentColor,
  interactionColor,
  onClick,
}: LogoProps) => {
  const theme = useTheme();
  const logoDescriptionId = useId();

  const containerStyles: CSSObject = {
    display: "flex",
    flexDirection: stacked ? "column" : "row",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: stacked ? "0.5rem" : "1rem",
    transition: "none",
  };

  const LogoBase = () => (
    <>
      <LogoIcon
        color={color}
        fill={accentColor}
        css={{ transition: transition("color") }}
        aria-labelledby={logoDescriptionId}
      />
      <p
        id={logoDescriptionId}
        css={{
          // If not stacked, hide logo text on extra small screens
          display: stacked ? "block" : "none",

          color: color ?? "inherit",
          fontSize: "1.5rem",
          padding: 0,
          margin: 0,
          transition: transition("color"),
          whiteSpace: "nowrap",

          [`@media (min-width: ${screenSizes.xs}px)`]: {
            display: "block",
          },
        }}
      >
        {title}
      </p>
    </>
  );

  if (href) {
    const linkStyles: CSSObject = {
      textDecoration: "none",
      "@media (hover: hover) and (pointer: fine)": {
        "&:hover svg": {
          color: interactionColor ?? theme.colors.accentPrimary,
        },
        "&:hover p": {
          color: interactionColor ?? theme.colors.accentPrimary,
        },
      },
      "&:focus-visible svg": {
        color: interactionColor ?? theme.colors.accentPrimary,
      },
      "&:focus-visible p": {
        color: interactionColor ?? theme.colors.accentPrimary,
      },
    };

    // If an address was provided for the logo to link to, add it
    return (
      <Link
        href={href}
        onClick={onClick}
        css={{ ...containerStyles, ...linkStyles }}
      >
        <LogoBase />
      </Link>
    );
  } else {
    return (
      <div css={containerStyles} onClick={onClick}>
        <LogoBase />
      </div>
    );
  }
};

/** Props for the logo component */
type LogoProps = {
  /** A link for the logo to go to when clicked on */
  href?: string;

  /**
   * Whether the logo should show the logo text below the icon (stacked)
   * or side by side with the icon (default)
   */
  stacked?: boolean;

  /** The color in which the logo should be displayed */
  color?: string;

  /** The color in which the logo's accents should be displayed */
  accentColor?: string;

  /** The color in which the logo should be displayed when interacted with */
  interactionColor?: string;

  /** A function to call when the logo is clicked */
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default Logo;
