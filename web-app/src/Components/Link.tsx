/** @jsxImportSource @emotion/react */

import React from "react";
import { useTheme } from "@emotion/react";

/**
 * A React component that wraps the HTML `<a>` tag to include proper styling (based on the theme)
 * and the functionality to easily open the link in a new tab if desired
 */
const Link = (props: LinkProps) => {
  const { openWithNewTab, removeUnderline, interactionColor, ...anchorProps } =
    props;

  const theme = useTheme();

  return (
    <a
      {...anchorProps}
      target={props.openWithNewTab ? "_blank" : undefined}
      rel={props.openWithNewTab ? "noopener noreferrer" : undefined}
      css={{
        color: "inherit",
        cursor: "pointer",
        textDecoration: removeUnderline ? "none" : undefined,
        transition: theme.transition,

        "@media (hover: hover) and (pointer: fine)": {
          "&:hover": {
            color: interactionColor || theme.colors.accentPrimary,
          },
        },

        "&:focus-visible, &:active": {
          color: interactionColor || theme.colors.accentPrimary,
        },
      }}
    >
      {props.children}
    </a>
  );
};

/**
 * Props for the link component
 */
type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  /** Whether the link should open in a new tab */
  openWithNewTab?: boolean;

  /** Whether the default underline under a link should be hidden */
  removeUnderline?: boolean;

  /** The text color when the link is interacted with */
  interactionColor?: string;
};

export default Link;
