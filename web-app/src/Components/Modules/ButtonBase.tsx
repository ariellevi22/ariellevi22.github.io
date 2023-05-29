/** @jsxImportSource @emotion/react */

import { CSSObject, useTheme } from "@emotion/react";
import { scaleFactors } from "../../Global";
import { transition } from "../../Theme";
import Link from "./Link";

/**
 * A simple wrapper component for an HTML `<button>`, extended
 * in components such as `Button` and `IconButton` for simplicity
 */
const ButtonBase = (props: ButtonBaseProps) => {
  const {
    isTransparent,
    href,
    openWithNewTab,
    backgroundColor,
    textColor,
    interactionBackgroundColor,
    interactionTextColor,
    children,
    ...otherProps
  } = props;

  const theme = useTheme();

  const adjustedInteractionBackgroundColor = isTransparent
    ? "transparent"
    : interactionBackgroundColor ?? theme.colors.textPrimary;

  const adjustedInteractionTextColor =
    interactionTextColor ??
    (isTransparent ? theme.colors.accentPrimary : theme.colors.textSecondary);

  const styles: CSSObject = {
    cursor: "pointer",
    fontSize: "1em",
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: isTransparent
      ? "transparent"
      : backgroundColor ?? theme.colors.accentPrimary,
    color: isTransparent ? "inherit" : textColor ?? theme.colors.textSecondary,
    border: "none",
    boxShadow: getShadow(theme.colors.shadow, isTransparent),
    transition: transition(
      "color",
      "backgroundColor",
      "transform",
      "boxShadow"
    ),

    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": {
        backgroundColor: adjustedInteractionBackgroundColor,
        color: adjustedInteractionTextColor,
        boxShadow: getShadow(theme.colors.shadow, isTransparent, true),
        transform: isTransparent ? "none" : `scale(${1 + scaleFactors.small})`,
      },
    },

    "&:focus-visible": {
      backgroundColor: adjustedInteractionBackgroundColor,
      color: adjustedInteractionTextColor,
      boxShadow: getShadow(theme.colors.shadow, isTransparent, true),
      transform: isTransparent ? "none" : `scale(${1 + scaleFactors.small})`,
    },

    "&:active": {
      backgroundColor: adjustedInteractionBackgroundColor,
      color: adjustedInteractionTextColor,
      transform: isTransparent ? "none" : `scale(${1 - scaleFactors.small})`,
    },
  };

  if (href) {
    // If the button should link somewhere, return a link tag styled as a button
    return (
      <Link
        {...otherProps}
        href={href}
        role="button"
        openWithNewTab={openWithNewTab}
        css={styles}
      >
        {children}
      </Link>
    );
  } else {
    // If the button does not need to link anywhere, return a styled button
    return (
      <button {...otherProps} css={styles}>
        {children}
      </button>
    );
  }
};

/**
 * Gets the shadow styling string for the button
 *
 * @param color the shadow color
 * @param isTransparent whether the button should be transparent
 * @param isInteracting whether the button is being interacted with
 *                      (hover, focus, or active states)
 * @returns the shadow styling string for the button
 */
const getShadow = (
  color: string,
  isTransparent?: boolean,
  isInteracting?: boolean
) => {
  if (isTransparent) {
    return "none";
  } else {
    if (isInteracting) {
      return `0 0.2em 0.75em 0 ${color}`;
    } else {
      return `0 0.1em 0.5em 0 ${color}`;
    }
  }
};

/** Props for the button base component that come from default HTML attributes */
type HtmlButtonBaseProps = React.HTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLAnchorElement>;

/** Props for the button base component */
export type ButtonBaseProps = HtmlButtonBaseProps & {
  /** Whether the button should have a transparent background */
  isTransparent?: boolean;

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

  /** The background text color when interacted with */
  interactionTextColor?: string;
};

export default ButtonBase;
