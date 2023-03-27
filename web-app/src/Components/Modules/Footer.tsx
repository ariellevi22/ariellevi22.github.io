/** @jsxImportSource @emotion/react */

import { getCurrentYear } from "../../Utils";
import Logo from "./Logo";
import SocialButtons from "./SocialButtons";
import { title } from "../../Global";
import { useTheme } from "@emotion/react";

/** A component for the website's footer */
const Footer = () => {
  const theme = useTheme();

  return (
    <footer
      css={{
        padding: "2.5rem",
        width: "100%",
        backgroundColor: theme.colors.backgroundNavigation,
        color: theme.colors.textNavigation,
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      <Logo
        stacked
        href="#top"
        interactionColor={theme.colors.accentNavigation}
      />

      <SocialButtons
        backgroundColor={theme.colors.textNavigation}
        textColor={theme.colors.backgroundNavigation}
        interactionBackgroundColor={theme.colors.accentPrimary}
        interactionTextColor={theme.colors.textSecondary}
      />

      <p css={{ fontSize: "0.75rem", margin: 0 }}>
        &copy; {getCurrentYear()} {title}
      </p>
    </footer>
  );
};

export default Footer;
