"use client";

import { mergeRefs } from "@/utils/ref";
import { Ref, useEffect, useRef } from "react";

/**
 * Component that allows the user to "escape" its contents by clicking the escape
 * key on their keyboard and/or clicking outside of the contents
 */
const Escapable = ({
    ref,
    children,
    onEscapeKey,
    onClickOutside,
}: EscapableProps) => {
    const localRef = useRef<HTMLDivElement>(null);

    // Handle presses of the escape key
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && onEscapeKey) {
                onEscapeKey(event);
            }
        };

        if (onEscapeKey) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onEscapeKey]);

    // Handle clicks outside the element
    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            if (
                onClickOutside &&
                localRef.current &&
                !event.composedPath().includes(localRef.current)
            ) {
                onClickOutside(event);
            }
        };

        if (onClickOutside) {
            window.addEventListener("click", onClick);
        }

        return () => {
            window.removeEventListener("click", onClick);
        };
    }, [onClickOutside]);

    return <div ref={mergeRefs(ref, localRef)}>{children}</div>;
};

/** Props for the escapable component */
export type EscapableProps = {
    /** Ref to the element */
    ref?: Ref<HTMLDivElement>;

    /** The element's contents */
    children: React.ReactNode;

    /** Handles a press of the escape key */
    onEscapeKey?: (event: KeyboardEvent) => void;

    /** Handles clicks outside the element */
    onClickOutside?: (event: MouseEvent) => void;
};

export default Escapable;
