"use client";

import { mergeRefs } from "@/utils/ref";
import { RefCallback, useCallback, useEffect, useRef } from "react";
import Escapable, { EscapableProps } from "../escapable";

/** Component that locks the user's focus within its contents */
const FocusLock = ({
    ref,
    children,
    enabled = true,
    disableScroll = true,
    onEscapeKey,
    onClickOutside,
}: FocusLockProps) => {
    const focusableItemsRef = useRef<HTMLElement[]>([]);

    // Keep track of the focusable items within the focus lock
    const localRef = useCallback<RefCallback<HTMLDivElement>>((node) => {
        const setFocusableItems = () => {
            if (node) {
                focusableItemsRef.current = Array.from(
                    node.querySelectorAll(
                        [
                            "button:not(:disabled)",
                            "[href]",
                            "input:not(:disabled)",
                            "select:not(:disabled)",
                            "textarea:not(:disabled)",
                            '[tabindex]:not([tabindex="-1"])',
                            "video",
                        ].join(", ")
                    )
                );
            }
        };

        // On initial render, set the list of focusable items
        setFocusableItems();

        // Observe changes to the contents of the focus lock, and whenever changes occur,
        // reset the list of focusable items
        const observer = new MutationObserver(setFocusableItems);
        if (node) {
            observer.observe(node, { childList: true });
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Handle presses of the tab key
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (enabled) {
                if (
                    event.key === "Tab" &&
                    document.activeElement &&
                    focusableItemsRef.current
                ) {
                    if (focusableItemsRef.current.length === 1) {
                        // Keep the focus on the current element
                        event.preventDefault();
                    } else if (
                        event.shiftKey &&
                        document.activeElement === focusableItemsRef.current[0]
                    ) {
                        // The user is tabbing backwards from the first focusable element, so focus on
                        // the last focusable element
                        event.preventDefault();
                        focusableItemsRef.current.at(-1)?.focus();
                    } else if (
                        !event.shiftKey &&
                        document.activeElement ===
                            focusableItemsRef.current.at(-1)
                    ) {
                        // The user is tabbing forwards from the last focusable element, so focus on
                        // the first focusable element
                        event.preventDefault();
                        focusableItemsRef.current[0].focus();
                    }
                }
            }
        };

        if (enabled) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => window.removeEventListener("keydown", onKeyDown);
    }, [enabled]);

    // Handle scrolling of the page
    useEffect(() => {
        document.body.style.overflow = enabled && disableScroll ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [enabled, disableScroll]);

    return (
        <Escapable
            ref={mergeRefs(ref, localRef)}
            onEscapeKey={onEscapeKey}
            onClickOutside={onClickOutside}
        >
            {children}
        </Escapable>
    );
};

/** Props for the focus lock component */
type FocusLockProps = EscapableProps & {
    /** Whether the focus lock is enabled */
    enabled?: boolean;

    /** Whether to disable scrolling the page when focus is locked */
    disableScroll?: boolean;
};

export default FocusLock;
