import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import resume from "../Assets/ArielLeviResume.pdf";
import { IconTab, NavbarTab } from "../Types";

/** Personal website title */
export const title = "Ariel Levi";

/** Text separator symbol */
export const separator = " | ";

/** The height of the navigation bar, measured in rem */
export const navbarHeight = 5;

/** Navigation bar tabs' information */
export const navbarTabs: NavbarTab[] = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Education", href: "#education" },
];

/** Social button icons and links */
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
        href: "https://github.com/ariellevi22",
        openWithNewTab: true,
        icon: faGithub,
        colorPrimary: "#9332AF",
        colorSecondary: "white",
    },
    {
        label: "Resume",
        href: resume,
        openWithNewTab: true,
        icon: faFileLines,
        colorPrimary: "gray",
        colorSecondary: "white",
    },
];

/** Upper limits for various screen sizes (measured in pixels) */
export const screenSizes = {
    xs: 320,
    sm: 720,
    md: 920,
    lg: 1280,
    xl: 1920,
};

/** Factors by which to scale (increase or decrease in size) components */
export const scaleFactors = {
    tiny: 0.1,
    small: 0.05,
    large: 0.005,
};
