"use client";

import Container from "@/containers/container";
import { name } from "@/global";
import { getCurrentYear } from "@/utils";
import Logo from "../logo";
import SocialButtons from "../social-buttons";
import styles from "./footer.module.css";

/** A component for the website's footer */
const Footer = () => (
    <footer className={styles.footer}>
        <Container className={styles.footerContent}>
            <Logo
                onClick={() => {
                    window.scrollTo({ top: 0 });
                }}
                stacked
                accentColor="var(--text-nav-bar-action)"
                interactionColor="var(--text-nav-bar-action)"
            />

            <SocialButtons color="subtle" />

            <p className={styles.copyright} suppressHydrationWarning>
                &copy; 2021&ndash;{getCurrentYear()} {name}
            </p>
        </Container>
    </footer>
);

export default Footer;
