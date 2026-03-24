"use client";

import { clsx } from "@/utils/css";
import Link from "next/link";
import { CSSProperties } from "react";
import styles from "./button.module.css";

/** A component for a button */
const Button = ({
    icon = false,
    color = "primary",
    colorOverrides,
    children,
    style,
    className,
    ...otherProps
}: ButtonProps) => {
    const buttonStyles: CSSProperties | undefined =
        style || colorOverrides
            ? {
                  ...style,

                  "--button-background": colorOverrides?.backgroundColor,
                  "--button-text": colorOverrides?.textColor,
                  "--button-background-interaction":
                      colorOverrides?.interactionBackgroundColor,
                  "--button-text-interaction":
                      colorOverrides?.interactionTextColor,
              }
            : undefined;

    const buttonClassNames = clsx(
        styles.button,
        styles[color],
        icon ? styles.icon : undefined,
        className
    );

    if ("href" in otherProps) {
        const { href, openWithNewTab, ...otherLinkProps } = otherProps;

        return (
            // If the button should link somewhere, return a link styled as a button
            <Link
                href={href}
                target={openWithNewTab ? "_blank" : undefined}
                rel={openWithNewTab ? "noopener noreferrer" : undefined}
                className={buttonClassNames}
                style={buttonStyles}
                {...otherLinkProps}
            >
                {children}
            </Link>
        );
    } else {
        // If the button does not need to link anywhere, return a styled button
        return (
            <button
                {...otherProps}
                className={buttonClassNames}
                style={buttonStyles}
            >
                {children}
            </button>
        );
    }
};

/** Props for the button component */
export type ButtonProps = ButtonBaseProps &
    (ButtonLinkProps | ButtonStandardProps);

/**
 * Props common to all instances of the button component (both standard
 * and link buttons)
 */
export type ButtonBaseProps = {
    /** Whether to render the button as an icon button */
    icon?: boolean;

    /** The button's display color */
    color?: "primary" | "subtle" | "transparent";

    /** Overrides for the button's display color */
    colorOverrides?: ButtonColorOverrides;
};

/** Type for custom coloring for a button */
type ButtonColorOverrides = {
    /** The button background color */
    backgroundColor?: string;

    /** The button text color */
    textColor?: string;

    /** The button background color when interacted with */
    interactionBackgroundColor?: string;

    /** The button text color when interacted with */
    interactionTextColor?: string;
};

/** Props for the button component when it acts as a link */
type ButtonLinkProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "color"
> & {
    /** The link for the button to follow */
    href: string;

    /** Whether the button should open its link in a new tab */
    openWithNewTab?: boolean;
};

/** Props for the button component when it acts as a standard (non-link) button */
type ButtonStandardProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "color"
>;

export default Button;
