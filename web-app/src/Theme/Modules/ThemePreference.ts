import { Theme } from "@emotion/react";
import { useLayoutEffect, useState } from "react";

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

/** The application's light theme */
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
};

/** The application's dark theme */
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
};

/**
 * Provides a theme (light or dark) for the application, based on the user's preferred
 * theme type, and a function to toggle the theme
 *
 * @returns the user's preferred theme and a function to toggle the theme
 */
export const useThemePreference = () => {
    const [themePreference, setThemePreference] = useState("light");

    useLayoutEffect(() => {
        // Media query for the user's theme preference based on browser or OS settings
        const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

        // Set the theme preference on first render
        setThemePreference(
            getThemeFromStorage() ?? (mediaQuery.matches ? "dark" : "light")
        );

        /**
         * Responds to changes in the browser's or OS's theme preference setting
         *
         * @param event media query change event
         */
        const onMediaQueryChange = (event: MediaQueryListEvent) => {
            if (!getThemeFromStorage()) {
                setThemePreference(event.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", onMediaQueryChange);
        return () =>
            mediaQuery.removeEventListener("change", onMediaQueryChange);
    }, []);

    /** The theme corresponding to the user's theme preference */
    const theme = themePreference === "dark" ? darkTheme : lightTheme;

    /** Toggles the application's theme (changes a dark theme to light and vice versa) */
    const toggleTheme = () => {
        // Based on the current theme, get the opposite theme
        const newThemeType = themePreference === "light" ? "dark" : "light";

        try {
            setThemeInStorage(newThemeType);
        } finally {
            setThemePreference(newThemeType);
        }
    };

    return { theme, toggleTheme };
};

/** The name of the localStorage property that stores the user's theme preference */
const themeStorageKey = "theme";

/**
 * Gets the user's theme preference from localStorage
 *
 * @returns the user's theme preference (if one is stored)
 */
const getThemeFromStorage = () => localStorage.getItem(themeStorageKey);

/**
 * Sets the user's theme preference in localStorage
 *
 * @param theme the user's theme preference
 */
const setThemeInStorage = (theme: Theme["type"]) =>
    localStorage.setItem(themeStorageKey, theme);
