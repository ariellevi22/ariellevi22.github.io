import { CssPropertyName } from "../../Types";

/** The default CSS transition time for elements in the application (in milliseconds) */
export const transitionDuration = 250;

/**
 * Constructs the default CSS transition for elements in the application
 *
 * @param properties CSS properties to apply the transition to (`all` by default)
 * @param duration the duration of the transition in milliseconds
 * @param delay the delay of the transition in milliseconds
 * @returns the CSS transition for the given properties
 */
export const transition = (
    properties: CssPropertyName | CssPropertyName[] = "all",
    duration: number = transitionDuration,
    delay: number = 0
) => {
    const cssProperties = Array.isArray(properties)
        ? [...properties]
        : [properties];

    return cssProperties
        .map((property) => {
            // Convert property to kebab case
            const propertyCssCase = property
                .replace(/([A-Z])/g, "-$1")
                .replace(/[\s_]+/g, "-")
                .toLowerCase();

            return `${propertyCssCase} ${duration}ms ease ${delay}ms`;
        })
        .join(", ");
};
