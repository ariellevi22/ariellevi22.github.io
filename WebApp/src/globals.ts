import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavbarTab, IconTab } from "./models";

/**
 * Personal website title
 */
export const title = "Ariel Levi";

/**
 * Text separator symbol
 */
export const separator = " | ";

/**
 * The height of the navigation bar, measured in rem
 */
export const navbarHeight = 5;

/**
 * Navigation bar tabs' information
 */
export const navbarTabs: NavbarTab[] = [
    { label: "About", href: "#About" },
    { label: "Experience", href: "#Experience" },
    { label: "Portfolio", href: "#Portfolio" },
    { label: "Education", href: "#Education" },
];

/**
 * Social button icons and links
 */
export const socialTabs: IconTab[] = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ariel-levi/",
        openWithNewTab: true,
        icon: faLinkedinIn,
        colorPrimary: "#0A66C2",
        colorSecondary: "white",
    },
    {
        label: "GitHub",
        href: "https://github.com/alevi22",
        openWithNewTab: true,
        icon: faGithub,
        colorPrimary: "#9332AF",
        colorSecondary: "white",
    },
    {
        label: "Email",
        href: "mailto:alevi2@huskers.unl.edu",
        openWithNewTab: true,
        icon: faEnvelope,
        colorPrimary: "gray",
        colorSecondary: "white",
    },
];

/**
 * Upper limits for various screen sizes (measured in pixels)
 */
export const screenSizes = {
    tiny: 300,
    small: 920,
    medium: 1280,
    large: 1920,
};

/**
 * Factors by which to scale (increase or decrease in size) components
 */
export const scaleFactors = {
    tiny: 0.1,
    small: 0.05,
    large: 0.005,
};
