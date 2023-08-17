import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import resume from "../Assets/ArielLeviResume.pdf";
import { IconTab } from "../Types";

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
        icon: faFileAlt,
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
