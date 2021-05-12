/**
 * An interface defining a color palette for the application theme
 */
interface Palette {
    primary: string,
    secondary: string,
    background: string,
    dark: string,
    light: string,
    shadow: string,
}

/**
 * The application's color palette
 */
const palette: Palette = {
    primary: "rgb(0, 125, 160)",
    secondary: "rgb(100, 228, 228)",
    background: "rgb(200, 230, 230)",
    dark: "rgb(36, 36, 36)",
    light: "white",
    shadow: "rgba(36, 36, 36, 0.25)",
}

/**
 * An interface defining theme variables for the application theme
 */
export interface Theme extends Jss.Theme {
    colors: Palette,
    shadows: {
        shadow: string,
        hoverShadow: string,
    }
}

/**
 * The application's theme
 */
const theme: Theme = {
    colors: palette,
    shadows: {
        shadow: `0 0.1em 0.6em 0 ${palette.shadow}`,
        hoverShadow: `0 0.25em 0.6em 0 ${palette.shadow}`,
    },
};

export default theme;