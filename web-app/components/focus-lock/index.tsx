"use client";

import { useEffect, useRef } from "react";

/** Component that locks the user's focus within its contents */
const FocusLock = ({
  children,
  enabled = true,
  onEscapeKey,
  onClickOutside,
}: FocusLockProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const focusableItemsRef = useRef<HTMLElement[]>([]);

  // Keep track of the focusable items within the focus lock
  useEffect(() => {
    const setFocusableItems = () => {
      if (rootRef.current) {
        focusableItemsRef.current = Array.from(
          rootRef.current.querySelectorAll(
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
    if (rootRef.current) {
      observer.observe(rootRef.current, { childList: true });
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
            document.activeElement === focusableItemsRef.current.at(-1)
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

  // Handle presses of the escape key
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && enabled && onEscapeKey) {
        onEscapeKey(event);
      }
    };

    if (enabled && onEscapeKey) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [enabled, onEscapeKey]);

  // Handle clicks outside the focus lock
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        enabled &&
        onClickOutside &&
        rootRef.current &&
        !event.composedPath().includes(rootRef.current)
      ) {
        onClickOutside(event);
      }
    };

    if (enabled && onClickOutside) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [enabled, onClickOutside]);

  useEffect(() => {
    document.body.style.overflow = enabled ? "hidden" : "";
  }, [enabled]);

  return <div ref={rootRef}>{children}</div>;
};

/** Props for the focus lock component */
type FocusLockProps = {
  /** The focus lock's contents */
  children?: React.ReactNode;

  /** Whether the focus lock is enabled */
  enabled?: boolean;

  /** Handles a press of the escape key when the focus lock is enabled */
  onEscapeKey?: (event: KeyboardEvent) => void;

  /** Handles clicks outside the focus lock when the focus lock is enabled */
  onClickOutside?: (event: MouseEvent) => void;
};

export default FocusLock;
