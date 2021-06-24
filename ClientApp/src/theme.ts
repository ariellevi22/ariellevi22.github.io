const teal = "rgb(0, 125, 160)";
const tealTransparent = "rgba(0, 125, 160, 0.35)";
const darkTeal = "rgb(0, 75, 105)";

const turquoise = "rgb(100, 228, 228)";
const lightTurquoise = "rgb(200, 230, 230)";

const dark = "rgb(0, 0, 0)";
const light = "white";

const shadow = "rgba(36, 36, 36, 0.25)";

/**
 * An interface defining a color palette for the application theme
 */
interface Palette {
    /**
     * The application's main accent colors
     */
    main: {
        primary: string,
        secondary: string,
    },

    /**
     * The colors of the backgrounds of various elements in the application
     */
    background: {
        main: string,
        navigationPrimary: string,
        navigationSecondary: string,
        containerPrimary: string,
        containerSecondary: string,
    },

    /**
     * The application text colors
     */
    text: {
        primary: string,
        secondary: string,
        selection: string,
    },

    /**
     * The colors of buttons throughout the application
     */
    button: {
        primary: string,
        secondary: string,
        primaryText: string,
        secondaryText: string,
        primaryHover: string,
        secondaryHover: string,
        primaryHoverText: string,
        secondaryHoverText: string,
    },

    /**
     * The colors of links throughout the application
     */
    link: {
        primary: string,
        secondary: string,
    },

    /**
     * The color of component drop shadows
     */
    shadow: string,
}

/**
 * The application's color palette
 */
const palette: Palette = {
    main: {
        primary: teal,
        secondary: turquoise,
    },

    background: {
        main: lightTurquoise,
        navigationPrimary: dark,
        navigationSecondary: darkTeal,
        containerPrimary: light,
        containerSecondary: dark,
    },

    text: {
        primary: dark,
        secondary: light,
        selection: tealTransparent,
    },

    button: {
        primary: teal,
        secondary: light,
        primaryText: light,
        secondaryText: dark,
        primaryHover: dark,
        secondaryHover: teal,
        primaryHoverText: light,
        secondaryHoverText: light,
    },

    link: {
        primary: teal,
        secondary: turquoise,
    },

    shadow: shadow,
}

/**
 * An interface defining theme variables for the application theme
 */
export interface AppTheme extends Jss.Theme {
    colors: Palette,
    shadows: {
        shadow: string,
        hoverShadow: string,
    }
}

/**
 * The application's theme
 */
const theme: AppTheme = {
    colors: palette,
    shadows: {
        shadow: `0 0.1em 0.6em 0 ${palette.shadow}`,
        hoverShadow: `0 0.25em 0.6em 0 ${palette.shadow}`,
    },
};

export default theme;