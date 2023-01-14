import { useEffect, useState } from "react";
import { Theme } from "@emotion/react";
import CssBaseline from "./CssBaseline";

// Accent colors
const accentDark = "#007DA0";
const accentLight = "#48CAE4";

// Light colors
const lightest = "#FFFFFF";
const light = "#E8E8E8";

// Dark colors
const darkest = "#000000";
const darker = "#1A414D";
const dark = "#3B6774";

// Background colors
const lightBackground = "#E4EDF3";
const darkBackground = "#092229";
const navigationMenuBackground = "#004B69";

// Shadow colors
const shadowLight = "rgba(0, 0, 0, 0.15)";
const shadowDark = "rgba(0, 0, 0, 0.35)";

/** The default CSS transition time for elements in the application (in milliseconds) */
const transitionTime = 250;

/** The default CSS transition for elements in the application */
const transition = `all ${transitionTime}ms ease 0ms`;

/**
 * The application's light theme
 */
const lightTheme: Theme = {
    type: "light",
    colors: {
        accentPrimary: accentDark,
        accentSecondary: accentLight,
        accentNavigation: accentLight,

        textPrimary: darkest,
        textSecondary: lightest,
        textNavigation: lightest,

        backgroundPrimary: lightBackground,
        backgroundSecondary: lightest,
        backgroundTertiary: light,
        backgroundNavigation: darkest,
        backgroundNavigationMenu: navigationMenuBackground,

        shadow: shadowLight,
    },
    transitionTime,
    transition,
};

/**
 * The application's dark theme
 */
const darkTheme: Theme = {
    type: "dark",
    colors: {
        accentPrimary: accentLight,
        accentSecondary: accentDark,
        accentNavigation: accentLight,

        textPrimary: lightest,
        textSecondary: darkest,
        textNavigation: lightest,

        backgroundPrimary: darkBackground,
        backgroundSecondary: darker,
        backgroundTertiary: dark,
        backgroundNavigation: darkest,
        backgroundNavigationMenu: navigationMenuBackground,

        shadow: shadowDark,
    },
    transitionTime,
    transition,
};

/**
 * Provides a theme (light or dark) for the application and a function to toggle the theme,
 * based on the user's OS settings for preferred theme and local storage in the browser
 *
 * @returns a theme for the application and a function to toggle the theme
 */
export const useThemePreference = () => {
    const themeStorageLabel = "theme";

    const [themeType, setThemeType] = useState("light");

    /**
     * Toggles the application's theme (changes a dark theme to light and vice versa)
     */
    const toggleTheme = () => {
        // Based on the current theme, get the opposite theme
        const newThemeType = themeType === "light" ? "dark" : "light";

        // Store the theme in local storage
        window.localStorage.setItem(themeStorageLabel, newThemeType);

        // Set the theme
        setThemeType(newThemeType);
    };

    useEffect(() => {
        // Get the preferred theme from the user's OS settings
        const prefersDarkTheme =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        setThemeType(prefersDarkTheme ? "dark" : "light");

        // Get the theme stored in the user's local storage (if there)
        const localTheme = window.localStorage.getItem(themeStorageLabel);
        if (localTheme) {
            // If the user has a previously specified theme stored, set it as their current theme
            setThemeType(localTheme);
        }
    }, []);

    const theme = themeType === "dark" ? darkTheme : lightTheme;

    return { theme, toggleTheme };
};

export { CssBaseline };
