"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import styles from "./button.module.css";

/** A component for a button */
const Button = ({
  transparent,
  icon,
  href,
  openWithNewTab,
  backgroundColor,
  textColor,
  interactionBackgroundColor,
  interactionTextColor,
  children,
  style,
  className,
  ...otherProps
}: ButtonProps) => {
  const buttonStyleVariables: CSSProperties = {
    "--background-color": backgroundColor,
    "--text-color": textColor,
    "--interaction-background-color": interactionBackgroundColor,
    "--interaction-text-color": interactionTextColor,
  } as CSSProperties;
  const buttonStyles: CSSProperties = { ...style, ...buttonStyleVariables };

  const buttonClassNames = [
    styles.button,
    transparent ? styles.transparent : undefined,
    icon ? styles.icon : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      // If the button should link somewhere, return a link styled as a button
      <Link
        href={href}
        role="button"
        target={openWithNewTab ? "_blank" : undefined}
        rel={openWithNewTab ? "noopener noreferrer" : undefined}
        className={buttonClassNames}
        style={buttonStyles}
        {...otherProps}
      >
        {children}
      </Link>
    );
  } else {
    // If the button does not need to link anywhere, return a styled button
    return (
      <button {...otherProps} className={buttonClassNames} style={buttonStyles}>
        {children}
      </button>
    );
  }
};

/** Props for the button component that come from default HTML attributes */
type HtmlButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLAnchorElement>;

/** Props for the button component */
export type ButtonProps = HtmlButtonProps & {
  /** Whether the button should have a transparent background */
  transparent?: boolean;

  /** Whether to render the button as an icon button */
  icon?: boolean;

  /** The link for the button to follow */
  href?: string;

  /** Whether the button should open its link in a new tab */
  openWithNewTab?: boolean;

  /** The button background color */
  backgroundColor?: string;

  /** The button text color */
  textColor?: string;

  /** The button background color when interacted with */
  interactionBackgroundColor?: string;

  /** The button text color when interacted with */
  interactionTextColor?: string;
};

export default Button;
