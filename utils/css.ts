/**
 * Constructs a `className` string from a list of CSS classes' names
 *
 * @param classNames the CSS classes' names
 * @returns the `className` string
 */
export const clsx = (...classNames: (string | undefined)[]) =>
    classNames.filter(Boolean).join(" ");
