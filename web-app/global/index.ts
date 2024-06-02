import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { IconTab, NavbarTab } from "@/types";
import packageJson from "@/package.json";

/** Personal website name */
export const name = packageJson.author.name;

/** Personal website description */
export const description = packageJson.description;

/** Personal website URL */
export const appUrl = packageJson.homepage;

/** Text separator symbol */
export const separator = " | ";

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
        href: "/ArielLeviResume.pdf",
        openWithNewTab: true,
        icon: faFileLines,
        colorPrimary: "gray",
        colorSecondary: "white",
    },
];
