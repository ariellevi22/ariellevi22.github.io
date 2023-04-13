import { Format } from "Types";

/**
 * Gets the current year
 *
 * @returns the current year
 */
export const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
};

/**
 * Pluralizes a string based on a count value
 *
 * @param text the string to pluralize
 * @param count the count to determine whether the string should be pluralized or remain singular
 * @returns the pluralized string
 */
export const pluralize = (text: string, count: number) => {
    let pluralizationEnding = "";
    if (count !== 1) {
        // Grammar reference: https://www.grammarly.com/blog/spelling-plurals-with-s-es
        pluralizationEnding = "s";
        if (text.endsWith("sh") || text.endsWith("ch") || text.endsWith("x")) {
            pluralizationEnding = "es";
        } else if (text.endsWith("s") || text.endsWith("z")) {
            pluralizationEnding = `${text.charAt(-1)}es`;
        }
    }

    return `${text}${pluralizationEnding}`;
};

/**
 * Gets the preferred formatting option based on main and alternate choices
 *
 * @param format the main and alternate formatting options
 * @param themeType the theme's color scheme (light or dark)
 * @returns the preferred formatting option based on the theme type
 */
export const getPreferredFormatOption = (
    format: Format | undefined,
    themeType: string
) => {
    if (format) {
        return format.darkTheme && themeType === "dark"
            ? format.darkTheme
            : format.lightTheme;
    } else {
        return undefined;
    }
};
