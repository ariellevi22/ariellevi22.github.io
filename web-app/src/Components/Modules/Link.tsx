/** @jsxImportSource @emotion/react */

import { transition } from "Theme";
import { useTheme } from "@emotion/react";

/**
 * A wrapper component for the HTML anchor `<a>` that includes proper styling
 * and the functionality to easily open the link in a new tab
 */
const Link = (props: LinkProps) => {
  const {
    openWithNewTab,
    removeUnderline,
    interactionColor,
    children,
    ...anchorProps
  } = props;

  const theme = useTheme();

  return (
    <a
      {...anchorProps}
      target={openWithNewTab ? "_blank" : undefined}
      rel={openWithNewTab ? "noopener noreferrer" : undefined}
      css={{
        color: "inherit",
        cursor: "pointer",
        textDecoration: removeUnderline ? "none" : undefined,
        transition: transition("color", "textDecoration"),

        "@media (hover: hover) and (pointer: fine)": {
          "&:hover": {
            color: interactionColor ?? theme.colors.accentPrimary,
          },
        },

        "&:focus-visible, &:active": {
          color: interactionColor ?? theme.colors.accentPrimary,
        },
      }}
    >
      {children}
    </a>
  );
};

/** Props for an HTML anchor `<a>` component, used by the link component */
type HtmlAnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

/** Props for the link component */
type LinkProps = HtmlAnchorProps & {
  /** Whether the link should open in a new tab */
  openWithNewTab?: boolean;

  /** Whether the default underline under a link should be hidden */
  removeUnderline?: boolean;

  /** The text color when the link is interacted with */
  interactionColor?: string;
};

export default Link;
