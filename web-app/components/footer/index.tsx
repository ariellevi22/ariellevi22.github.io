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
        href="#top"
        stacked
        accentColor="var(--accent-navigation)"
        interactionColor="var(--accent-navigation)"
      />

      <SocialButtons
        backgroundColor="var(--text-navigation)"
        textColor="var(--background-navigation)"
        interactionBackgroundColor="var(--accent-primary)"
        interactionTextColor="var(--text-secondary)"
      />

      <p className={styles.copyright}>
        &copy; {getCurrentYear()} {name}
      </p>
    </Container>
  </footer>
);

export default Footer;
