import { CSSProperties } from "react";
import { useTheme } from "@emotion/react";

/**
 * Constructs the default CSS transition for elements in the application
 *
 * @param properties CSS properties to apply the transition to (`all` by default)
 * @returns the CSS transition for the given properties
 */
export const transition = (...properties: CssPropertyName[]) => {
    const { transitionDuration } = useTheme();

    const cssProperties = [...properties];
    if (cssProperties.length === 0) {
        cssProperties.push("all");
    }

    return cssProperties
        .map((property) => {
            // Convert property to kebab case
            const propertyCssCase = property
                .replace(/([A-Z])/g, "-$1")
                .replace(/[\s_]+/g, "-")
                .toLowerCase();

            return `${propertyCssCase} ${transitionDuration ?? 0}ms ease 0ms`;
        })
        .join(", ");
};

type CssPropertyName = keyof CSSProperties;
