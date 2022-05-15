import Logo from "./Logo/Logo";
import { getCurrentYear } from "../utils";
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../theme";
import { title } from "../globals";
import SocialButtons from "./Button/SocialButtons";

/**
 * React component representing the footer of the website, which contains
 * copyright information. The copyright year automatically updates to the current year.
 */
const Footer = () => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ theme });

    return (
        <footer className={styles.footer}>
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
const useStyles = createUseStyles<"footer" | "copyrightText", {}, AppTheme>({
    footer: {
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
