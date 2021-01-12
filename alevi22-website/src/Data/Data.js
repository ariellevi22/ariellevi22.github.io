/**
 * Personal website title
 */
export const NAME = "Ariel Levi"

/**
 * Navigation bar tabs
 */
export const NAVBAR_TABS = [
	{label: "About", link: "#About"},
	{label: "Experience", link: "#Experience"},
	{label: "Education", link: "#Education"},
	{label: "Projects", link: "#Projects"},
];

/**
 * Navigation bar icon tabs
 */
export const NAVBAR_ICON_TABS = [
	{icon: "fa fa-linkedin", link: "https://www.linkedin.com/in/ariel-levi/"},
	{icon: "fa fa-github", link: "https://github.com/alevi22"},
];

/**
 * Social buttons
 */
export const SOCIAL_BUTTONS = [
	...NAVBAR_ICON_TABS,
	{icon: "fa fa-envelope", link: "mailto:alevi2@huskers.unl.edu"},
];