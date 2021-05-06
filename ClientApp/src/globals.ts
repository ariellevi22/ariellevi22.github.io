import IIconButton from './Models/IIconButton';

/**
 * Personal website title
 */
export const name = "Ariel Levi";

/**
 * Navigation bar tabs' labels and links
 */
export const navbarTabs = [
    {label: "About", href: "#About"},
    {label: "Experience", href: "#Experience"},
    {label: "Education", href: "#Education"},
    {label: "Portfolio", href: "#Portfolio"},
];

/**
 * Social button icons and links
 */
export const socialButtons: IIconButton[] = [
    {iconName: "linkedin-in", iconPrefix: "fab", href: "https://www.linkedin.com/in/ariel-levi/"},
    {iconName: "github", iconPrefix: "fab", href: "https://github.com/alevi22"},
    {iconName: "envelope", iconPrefix: "fas", href: "mailto:alevi2@huskers.unl.edu"},
];