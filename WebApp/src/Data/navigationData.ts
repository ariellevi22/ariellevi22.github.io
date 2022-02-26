import { NavbarTab, IconTab } from "../models";

/**
 * Navigation bar tabs' information
 */
export const navbarTabs: NavbarTab[] = [
    { label: "About", href: "#About" },
    { label: "Experience", href: "#Experience" },
    { label: "Education", href: "#Education" },
    { label: "Portfolio", href: "#Portfolio" },
];

/**
 * Social button icons and links
 */
export const socialTabs: IconTab[] = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ariel-levi/",
        openWithNewTab: true,
        iconName: "linkedin-in",
        iconPrefix: "fab",
        colorPrimary: "#0A66C2",
        colorSecondary: "white",
    },
    {
        label: "GitHub",
        href: "https://github.com/alevi22",
        openWithNewTab: true,
        iconName: "github",
        iconPrefix: "fab",
        colorPrimary: "#9332AF",
        colorSecondary: "white",
    },
    {
        label: "Email",
        href: "mailto:alevi2@huskers.unl.edu",
        openWithNewTab: true,
        iconName: "envelope",
        iconPrefix: "fas",
        colorPrimary: "gray",
        colorSecondary: "white",
    },
];
