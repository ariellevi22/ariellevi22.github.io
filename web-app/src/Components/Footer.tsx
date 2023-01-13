import Logo from "./Logo";
import { getCurrentYear } from "../Utils";
import { createUseAppStyles, useAppTheme } from "../Theme";
import { title } from "../Global";
import SocialButtons from "./SocialButtons";

/**
 * React component representing the footer of the website, which contains
 * copyright information. The copyright year automatically updates to the current year.
 */
const Footer = () => {
  const theme = useAppTheme();
  const styles = useStyles({ theme });

  return (
    <footer className={styles.root}>
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

      <p className={styles.copyrightText}>
        &copy; {getCurrentYear()} {title}
      </p>
    </footer>
  );
};

/**
 * Creates the footer's styles
 */
const useStyles = createUseAppStyles({
  root: {
    padding: "2.5rem",
    width: "100%",
    backgroundColor: (data) => data.theme.colors.backgroundNavigation,
    color: (data) => data.theme.colors.textNavigation,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    alignItems: "center",
  },
  copyrightText: {
    fontSize: "0.75rem",
    margin: 0,
  },
});

export default Footer;
