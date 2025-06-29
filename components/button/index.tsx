"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import styles from "./button.module.css";

/** A component for a button */
const Button = ({
    transparent,
    icon,
    backgroundColor,
    textColor,
    interactionBackgroundColor,
    interactionTextColor,
    children,
    style,
    className,
    ...otherProps
}: ButtonProps) => {
    const buttonStyleVariables: CSSProperties = {
        "--color-background": backgroundColor,
        "--color-text": textColor,
        "--color-background-interaction": interactionBackgroundColor,
        "--color-text-interaction": interactionTextColor,
    } as CSSProperties;
    const buttonStyles: CSSProperties = {
        ...style,
        ...buttonStyleVariables,
    };

    const buttonClassNames = [
        styles.button,
        transparent ? styles.transparent : undefined,
        icon ? styles.icon : undefined,
        className,
    ]
        .filter(Boolean)
        .join(" ");

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
type ButtonProps = ButtonBaseProps & (ButtonLinkProps | ButtonStandardProps);

/**
 * Props common to all instances of the button component (both standard
 * and link buttons)
 */
type ButtonBaseProps = {
    /** Whether the button should have a transparent background */
    transparent?: boolean;

    /** Whether to render the button as an icon button */
    icon?: boolean;

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
type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    /** The link for the button to follow */
    href: string;

    /** Whether the button should open its link in a new tab */
    openWithNewTab?: boolean;
};

/** Props for the button component when it acts as a standard (non-link) button */
type ButtonStandardProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default Button;
