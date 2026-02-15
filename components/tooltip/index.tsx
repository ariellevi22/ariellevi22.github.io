"use client";

import {
    autoUpdate,
    flip,
    FlipOptions,
    offset,
    Placement,
    safePolygon,
    shift,
    size,
    Strategy,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useTransitionStyles,
} from "@floating-ui/react";
import { ReactNode, useId, useState } from "react";
import styles from "./tooltip.module.css";

/** A component for a tooltip */
const Tooltip = ({
    title,
    children,
    position = "top",
    fallbackAxisSideDirection = "none",
    positionStrategy = "absolute",
}: TooltipProps) => {
    const id = useId();

    // Track whether the tooltip is visible or hidden
    const [visible, setVisible] = useState(false);

    // Set up the floating functionality for the tooltip
    const { refs, floatingStyles, context } = useFloating({
        placement: position,

        open: visible,
        onOpenChange: setVisible,

        middleware: [
            // Offset the tooltip's position relative to the reference element so that the
            // tooltip does not touch or overlap the reference element
            offset(TOOLTIP_OFFSET),

            // Allow the tooltip to shift to avoid getting cut off the edge of the viewport
            // (e.g. a top-positioned tooltip can shift a little bit to the left or right)
            shift({ padding: TOOLTIP_VIEWPORT_PADDING }),

            // Allow the tooltip to flip to the other side of the reference element if there
            // is not enough space on the preferred side
            // (e.g. a top-positioned tooltip can flip to the bottom, and if there is also not
            // enough space there, it can optionally flip to the left or right side)
            flip({ fallbackAxisSideDirection }),

            // Constrain the size of the tooltip so that it does not exceed the available space
            size({
                apply: ({ availableHeight, availableWidth, elements }) => {
                    elements.floating.style.maxHeight = `${Math.max(0, availableHeight)}px`;
                    elements.floating.style.maxWidth = `${Math.min(Math.max(0, availableWidth), TOOLTIP_MAX_WIDTH)}px`;
                },
            }),
        ],

        strategy: positionStrategy,
        whileElementsMounted: autoUpdate,
    });

    // Set the tooltip to open when the reference element is hovered over
    const hoverInteraction = useHover(context, {
        delay: { open: 500, close: 0 },
        handleClose: safePolygon(),
    });

    // Set the tooltip to open when the reference element is focused
    const focusInteraction = useFocus(context, { visibleOnly: true });

    // Set the tooltip to close when the reference element is dismissed
    const dismissInteraction = useDismiss(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hoverInteraction,
        focusInteraction,
        dismissInteraction,
    ]);

    // Create CSS transitions for the tooltip
    const { isMounted, styles: transitionStyles } = useTransitionStyles(
        context,
        {
            duration: 250,
            initial: { opacity: 0 },
        }
    );

    return (
        <>
            <span
                aria-describedby={id}
                ref={(node) => {
                    refs.setReference(node);
                }}
                {...getReferenceProps()}
            >
                {children}
            </span>

            {isMounted && (
                <div
                    id={id}
                    role="tooltip"
                    ref={(node) => {
                        refs.setFloating(node);
                    }}
                    className={styles.tooltip}
                    style={{ ...transitionStyles, ...floatingStyles }}
                    {...getFloatingProps()}
                >
                    {title}
                </div>
            )}
        </>
    );
};

/** Props for the {@linkcode Tooltip} component */
type TooltipProps = {
    /** The title content to show within the tooltip */
    title: ReactNode;

    /** The target content over which the tooltip appears */
    children: ReactNode;

    /**
     * The preferred position of the tooltip relative to the reference element
     * @default "top"
     */
    position?: Placement;

    /**
     * The positioning strategy to use for the tooltip
     * @default "absolute"
     */
    positionStrategy?: Strategy;

    /**
     * Whether to allow the tooltip to flip to a perpendicular side of the reference element if
     * there is not enough space in the preferred position, and if so, which side to prefer
     * (e.g. for a top-positioned tooltip, flip to the left or right side if there is no space
     * above or below the reference element)
     * @default "none"
     */
    fallbackAxisSideDirection?: FlipOptions["fallbackAxisSideDirection"];
};

/** Maximum width of the tooltip in pixels */
const TOOLTIP_MAX_WIDTH = 224;

/** Offset for the tooltip's position relative to the reference element in pixels */
const TOOLTIP_OFFSET = 8;

/** Minimum spacing between the tooltip and the edge of the viewport in pixels */
const TOOLTIP_VIEWPORT_PADDING = 16;

export default Tooltip;
