/** @jsxImportSource @emotion/react */

import React from "react";
import { scaleFactors } from "../Global";
import Link from "./Link";
import { CSSObject, Theme, useTheme } from "@emotion/react";

/**
 * A React component representing a simple wrapper for an HTML `<button>`, extended
 * in components such as `Button` and `IconButton` for simplicity
 */
const ButtonBase = (props: ButtonBaseProps) => {
  const theme = useTheme();

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

  const styles: CSSObject = {
    fontSize: "1em",
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: isTransparent
      ? "transparent"
      : backgroundColor || theme.colors.accentPrimary,
    color: isTransparent ? "inherit" : textColor || theme.colors.textSecondary,
    border: "none",
    boxShadow: getShadow(theme.colors.shadow, isTransparent),
    transition: theme.transition,

    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": {
        backgroundColor: getInteractionBackgroundColor(props, theme),
        color: getInteractionTextColor(props, theme),
        cursor: "pointer",
        boxShadow: getShadow(theme.colors.shadow, isTransparent, true),
        transform: isTransparent ? "none" : `scale(${1 + scaleFactors.small})`,
      },
    },

    "&:focus-visible": {
      backgroundColor: getInteractionBackgroundColor(props, theme),
      color: getInteractionTextColor(props, theme),
      cursor: "pointer",
      boxShadow: getShadow(theme.colors.shadow, isTransparent, true),
      transform: isTransparent ? "none" : `scale(${1 + scaleFactors.small})`,
    },

    "&:active": {
      backgroundColor: getInteractionBackgroundColor(props, theme),
      color: getInteractionTextColor(props, theme),
      transform: isTransparent ? "none" : `scale(${1 - scaleFactors.small})`,
    },
  };

  if (href) {
    // If the button should link somewhere, return a link tag styled as a button
    return (
      <Link
        {...otherProps}
        href={props.href}
        role="button"
        openWithNewTab={openWithNewTab}
        css={styles}
      >
        {props.children}
      </Link>
    );
  } else {
    // If the button does not need to link anywhere, just return it
    return (
      <button {...otherProps} css={styles}>
        {props.children}
      </button>
    );
  }
};

/**
 * Gets the background color for the button base when the button is being
 * interacted with (hover, focus, or active states)
 *
 * @param props component props
 * @param theme the application theme
 * @returns the background color
 */
const getInteractionBackgroundColor = (
  props: ButtonBaseProps,
  theme: Theme
) => {
  if (props.isTransparent) {
    return "transparent";
  } else {
    return props.interactionBackgroundColor || theme.colors.textPrimary;
  }
};

/**
 * Gets the text color for the button base when the button is being
 * interacted with (hover, focus, or active states)
 *
 * @param props component props
 * @param theme the application theme
 * @returns the text color
 */
const getInteractionTextColor = (props: ButtonBaseProps, theme: Theme) => {
  if (props.interactionTextColor) {
    return props.interactionTextColor;
  } else if (props.isTransparent) {
    return theme.colors.accentPrimary;
  } else {
    return theme.colors.textSecondary;
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

/**
 * Props for the button base component that come from default HTML attributes
 */
type ButtonBaseHTMLProps = React.HTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLAnchorElement>;

/**
 * Props for the button base component
 */
export type ButtonBaseProps = ButtonBaseHTMLProps & {
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
