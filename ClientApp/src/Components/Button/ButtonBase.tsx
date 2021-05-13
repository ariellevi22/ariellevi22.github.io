import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { scaleFactors, transition } from '../../globals';
import { AppTheme } from '../../theme';
import Link from '../Link';

type ButtonBaseVariant = "primary" | "secondary";

export type ButtonBaseProps = {
    variant?: ButtonBaseVariant,
    isTransparent?: boolean,
    href?: string,
    hoverBgColor?: string,
    hoverTextColor?: string,
}

/**
 * Determines what color the button's background should be based on the given variant
 * 
 * @param variant the name of the button's color variant
 * @returns the button's background color
 */
const getButtonBackgroundColor = (theme: AppTheme, variant?: ButtonBaseVariant, isTransparent?: boolean) => {
    if (isTransparent) {
        return "transparent";
    } else {
        if (variant === "secondary") {
            return theme.colors.button.secondary;
        } else {
            return theme.colors.button.primary;
        }
    }
}

/**
 * Determines what color the button's text should be based on the given variant
 * 
 * @param variant the name of the button's color variant
 * @returns the button's text color
 */
const getButtonTextColor = (theme: AppTheme, variant?: ButtonBaseVariant) => {
    if (variant === "secondary") {
        return theme.colors.button.secondaryText;
    } else {
        return theme.colors.button.primaryText;
    }
}

/**
 * Determines what color the button's background should be when hovered over based on the given variant
 * 
 * @param variant the name of the button's color variant
 * @returns the button's background color when hovered over
 */
const getButtonHoverBackgroundColor = (theme: AppTheme, variant?: ButtonBaseVariant, hoverBgColor?: string, isTransparent?: boolean) => {
    if (isTransparent) {
        return "transparent";
    } else {
        if (hoverBgColor) {
            return hoverBgColor;
        } else {
            if (variant === "secondary") {
                return theme.colors.button.secondaryHover;
            } else {
                return theme.colors.button.primaryHover;
            }
        }
    }
}

/**
 * Determines what color the button's text should be when hovered over based on the given variant
 * 
 * @param variant the name of the button's color variant
 * @returns the button's text color when hovered over
 */
const getButtonHoverTextColor = (theme: AppTheme, variant?: ButtonBaseVariant, hoverTextColor?: string) => {
    if (hoverTextColor) {
        return hoverTextColor;
    } else {
        if (variant === "secondary") {
            return theme.colors.button.secondaryHoverText;
        } else {
            return theme.colors.button.primaryHoverText;
        }
    }
}

/**
 * Creates the button's styles
 */
const useStyles = createUseStyles<"buttonBase", ButtonBaseProps, AppTheme>({
    buttonBase: data => ({
        fontSize: "1em",
        backgroundColor: getButtonBackgroundColor(data.theme, data.variant, data.isTransparent),
        color: getButtonTextColor(data.theme, data.variant),
        border: "none",
        boxShadow: data.isTransparent ? "none" : data.theme.shadows.shadow,
        transition: transition,
        '&:hover': {
            backgroundColor: getButtonHoverBackgroundColor(data.theme, data.variant, data.hoverBgColor, data.isTransparent),
            color: getButtonHoverTextColor(data.theme, data.variant, data.hoverTextColor),
            cursor: "pointer",
            boxShadow: data.isTransparent ? "none" : data.theme.shadows.hoverShadow,
            transform: data.isTransparent ? "none" : `scale(${1 + scaleFactors.small})`,
        },
        '&:active': {
            transform: data.isTransparent ? "none" : `scale(${1 - scaleFactors.small})`,
        },
    })
});

/**
 * A React component representing a simple wrapper for an HTML `<button>`. This component is extended
 * in components such as `Button` and `IconButton` for simplicity.
 */
const ButtonBase = (props: ButtonBaseProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({...props, theme});

    // Separate out the props so that irrelevant props are not passed into the HTML button
    const {variant, href, hoverBgColor, hoverTextColor, isTransparent, children, ...buttonProps} = props;

    // Create the general HTML button
    let buttonBase = (
        <button {...buttonProps} className={[styles.buttonBase, props.className].join(" ")}>{children}</button>
    );

    if (href) {
        // If the button should link somewhere, wrap it in a link tag
        return (
            <Link href={href} openWithNewTab>{buttonBase}</Link>
        );
    } else {
        // If the button does not need to link anywhere, just return it
        return buttonBase;
    }
}

export default ButtonBase;