import React from 'react';
import { NavbarTab } from "./Components/Navbar";
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

/**
 * Types of all possible React `children` props
 */
export type ReactChildren = React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];

/**
 * Personal website title
 */
export const name = "Ariel Levi";

/**
 * Navigation bar tabs' information
 */
export const navbarTabs: NavbarTab[] = [
    {label: "About", href: "#About"},
    {label: "Experience", href: "#Experience"},
    {label: "Education", href: "#Education"},
    {label: "Portfolio", href: "#Portfolio"},
];

/**
 * Template for the data of an icon tab or button
 */
export type IconTab = NavbarTab & {
    iconName: IconName,
    iconPrefix?: IconPrefix,
    colorPrimary?: string,
    colorSecondary?: string,
}

/**
 * Social button icons and links
 */
export const socialButtons: IconTab[] = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ariel-levi/",
        openWithNewTab: true,
        iconName: "linkedin-in",
        iconPrefix: "fab",
        colorPrimary: "#0A66C2",
        colorSecondary: "white"
    },
    {
        label: "GitHub",
        href: "https://github.com/alevi22",
        openWithNewTab: true,
        iconName: "github",
        iconPrefix: "fab",
        colorPrimary: "#9332AF",
        colorSecondary: "white"
    },
    {
        label: "Email",
        href: "mailto:alevi2@huskers.unl.edu",
        openWithNewTab: true,
        iconName: "envelope",
        iconPrefix: "fas",
        colorPrimary: "gray",
        colorSecondary: "white"
    },
];

/**
 * The CSS class name for text that should not have paragraph spacing after it
 */
export const noSpacing = "no-spacing";

/**
 * The height of the navigation bar, measured in em
 */
export const navbarHeight = 5;

/**
 * Upper limits for various screen sizes (measured in pixels)
 */
export const screenSizes = {
    small: 840,
    medium: 1280,
    large: 1920,
}

/**
 * Factors by which to scale (increase or decrease in size) components
 */
export const scaleFactors = {
    tiny: 0.1,
    small: 0.05,
    large: 0.005,
}