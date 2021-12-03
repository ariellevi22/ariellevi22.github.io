/**
 * Gets the current year
 * 
 * @returns the current year
 */
export const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
}

/**
 * Pluralizes a string based on a count value
 * 
 * @param text the string to pluralize
 * @param count the count to determine whether the string should be pluralized or remain singular
 * @returns the pluralized string
 */
export const pluralize = (text: string, count: number) => {
    // Grammar reference: https://www.grammarly.com/blog/spelling-plurals-with-s-es
    let pluralizationEnding = "s";
    if (text.endsWith("sh") || text.endsWith("ch") || text.endsWith("x")) {
        pluralizationEnding = "es"
    } else if (text.endsWith("s") || text.endsWith("z")) {
        pluralizationEnding = `${text.charAt(-1)}es`;
    }

    return `${text}${count > 1 ? pluralizationEnding : ""}`;
}