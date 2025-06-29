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
                href="/#top"
                stacked
                accentColor="var(--color-accent-nav)"
                interactionColor="var(--color-accent-nav)"
            />

            <SocialButtons
                backgroundColor="var(--color-text-nav)"
                textColor="var(--color-background-nav-bar)"
                interactionBackgroundColor="var(--color-primary)"
                interactionTextColor="var(--color-text-button)"
            />

            <p className={styles.copyright}>
                &copy; 2021&ndash;{getCurrentYear()} {name}
            </p>
        </Container>
    </footer>
);

export default Footer;
