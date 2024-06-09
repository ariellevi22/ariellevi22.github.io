"use client";

import { name } from "@/global";
import Link from "next/link";
import { CSSProperties } from "react";
import LogoIcon from "../logo-icon";
import styles from "./logo.module.css";

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
  const logoClassNames = [
    styles.logoContainer,
    stacked ? styles.stacked : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  const logoStyles: CSSProperties = {
    "--color-interaction": interactionColor,
  } as CSSProperties;

  const LogoBase = () => (
    <>
      <LogoIcon color={color} fill={accentColor} aria-hidden />
      <p>{name}</p>
    </>
  );

  if (href) {
    // If an address was provided for the logo to link to, add it
    return (
      <Link
        href={href}
        onClick={onClick}
        className={logoClassNames}
        style={logoStyles}
      >
        <LogoBase />
      </Link>
    );
  } else if (onClick) {
    return (
      <button className={logoClassNames} style={logoStyles}>
        <LogoBase />
      </button>
    );
  } else {
    return (
      <div className={logoClassNames} style={logoStyles}>
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
