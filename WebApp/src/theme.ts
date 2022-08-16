import { useEffect, useState } from "react";

// Teal colors
const teal = "#007DA0";
const darkTeal = "#004B69";
const darkTealGray = "#3B6774";
const darkestTeal = "#1A414D";
const lightTeal = "#31AFC1";

// Turquoise colors
const turquoise = "#64DAE4";
const lightTurquoise = "#D2E2E5";

// Light colors
const lightest = "#FFFFFF";
const light = "#E8E8E8";

// Dark colors
const dark = "#092229";
const darkest = "#000000";

// Shadow colors
const shadow = "rgba(0, 0, 0, 0.2)";
const shadowStrong = "rgba(0, 0, 0, 0.35)";

/**
 * An interface defining a color palette for the application theme
 */
interface Palette {
    accentPrimary: string;
    accentSecondary: string;
    accentNavigation: string;

    textPrimary: string;
    textSecondary: string;
    textNavigation: string;

    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    backgroundNavigation: string;
    backgroundNavigationMenu: string;

    shadow: string;
}

/**
 * The application's color palette (light theme)
 */
const lightPalette: Palette = {
    accentPrimary: teal,
    accentSecondary: turquoise,
    accentNavigation: turquoise,

    textPrimary: darkest,
    textSecondary: lightest,
    textNavigation: lightest,

    backgroundPrimary: lightTurquoise,
    backgroundSecondary: lightest,
    backgroundTertiary: light,
    backgroundNavigation: darkest,
    backgroundNavigationMenu: darkTeal,

    shadow: shadow,
};

/**
 * The application's color palette (dark theme)
 */
const darkPalette: Palette = {
    accentPrimary: lightTeal,
    accentSecondary: darkTeal,
    accentNavigation: turquoise,

    textPrimary: lightest,
    textSecondary: darkest,
    textNavigation: lightest,

    backgroundPrimary: dark,
    backgroundSecondary: darkestTeal,
    backgroundTertiary: darkTealGray,
    backgroundNavigation: darkest,
    backgroundNavigationMenu: darkTeal,

    shadow: shadowStrong,
};

/**
 * The default CSS transition time for elements of the application
 */
const transitionTime = 250;

/**
 * The default CSS transition for elements of the application
 */
const transition = `all ${transitionTime}ms ease 0ms`;

/**
 * Returns the CSS value for box shadows based on a given color
 *
 * @param color the color of the shadow
 * @param hover whether to return the value for the shadow of an element when
 *              being hovered over or an element in its normal state
 * @returns the CSS value of the shadow with the given color
 */
const getShadow = (color: string, hover?: boolean) => {
    return hover ? `0 0.25em 0.7em 0 ${color}` : `0 0.1em 0.7em 0 ${color}`;
};

/**
 * An interface defining theme variables for the application theme
 */
export interface AppTheme extends Jss.Theme {
    type: "light" | "dark";
    colors: Palette;
    shadows: {
        shadow: string;
        hoverShadow: string;
    };
    transitionTime: number;
    transition: string;
}

/**
 * The application's light theme
 */
const lightTheme: AppTheme = {
    type: "light",
    colors: lightPalette,
    shadows: {
        shadow: getShadow(lightPalette.shadow),
        hoverShadow: getShadow(lightPalette.shadow, true),
    },
    transitionTime: transitionTime,
    transition: transition,
};

/**
 * The application's dark theme
 */
const darkTheme: AppTheme = {
    type: "dark",
    colors: darkPalette,
    shadows: {
        shadow: getShadow(darkPalette.shadow),
        hoverShadow: getShadow(darkPalette.shadow, true),
    },
    transitionTime: transitionTime,
    transition: transition,
};

/**
 * Provides a theme (light or dark) for the application and a function to toggle the theme,
 * based on the user's OS settings for preferred theme and local storage in the browser
 *
 * @returns a theme for the application and a function to toggle the theme
 */
export const useAppTheme = () => {
    const [themeType, setThemeType] = useState("light");
    const themeTokenName = "theme";

    /**
     * Toggles the application's theme (changes a dark theme to light and vice versa)
     */
    const toggleTheme = () => {
        // Based on the current theme, get the opposite theme
        const newThemeType = themeType === "light" ? "dark" : "light";

        // Store the theme in local storage
        window.localStorage.setItem(themeTokenName, newThemeType);

        // Set the theme
        setThemeType(newThemeType);
    };

    useEffect(() => {
        // Get the preferred theme from the user's OS settings
        const prefersDarkMode =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        setThemeType(prefersDarkMode ? "dark" : "light");

        // Get the theme stored in the user's local storage (if there)
        const localTheme = window.localStorage.getItem(themeTokenName);
        if (localTheme) {
            // If the user has a previously specified theme stored, set it as their current theme
            setThemeType(localTheme);
        }
    }, []);

    const theme = themeType === "dark" ? darkTheme : lightTheme;

    return { theme, toggleTheme };
};
