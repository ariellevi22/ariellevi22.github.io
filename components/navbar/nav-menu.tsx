"use client";

import { useRef, useState } from "react";
import styles from "./nav-menu.module.css";

const transitionDurationMilliseconds = 250;

/**
 * A component for the navigation menu that pops out from the navigation
 * bar on small screens
 */
const NavMenu = ({ children, open, setOpen }: NavMenuProps) => {
    // Keep track of whether the user is swiping the menu open/closed
    const [touchPosition, setTouchPosition] = useState<number>();
    const [touchOffset, setTouchOffset] = useState(0);
    const swipeDirectionRef = useRef(0);

    /** Resets the touch states to indicate that the user is no longer swiping */
    const onSwipeEnd = () => {
        setTouchPosition(undefined);
        setTouchOffset(0);
        swipeDirectionRef.current = 0;
    };

    return (
        <div
            className={styles.navMenu}
            style={{
                // Display the menu while it is opening, open, or closing
                visibility: open || touchPosition ? "visible" : "hidden",

                transition: touchPosition
                    ? // When the user is swiping the menu, do not use a transition time so that the swipe
                      // does not lag behind their touch
                      undefined
                    : [
                          `translate ${transitionDurationMilliseconds}ms ease`,
                          open
                              ? // When the menu is opening, transition immediately from "hidden" to "visible"
                                // so that the content is visible while sliding onto the screen
                                ""
                              : // When the menu is closing, delay the transition from "visible" to "hidden" to
                                // ensure that the content fully slides off the screen before it disappears
                                `visibility 1ms ${transitionDurationMilliseconds}ms`,
                      ]
                          .filter(Boolean)
                          .join(", "),

                translate: touchPosition
                    ? // The menu is positioned according to the user's touch
                      `clamp(0px, 100% - ${window.innerWidth - (touchPosition - touchOffset)}px, 100%)`
                    : open
                      ? // The menu is open, so it is not translated off the screen
                        "0px"
                      : // The menu is closed, so it is translated all the way off the screen
                        "100%",
            }}
            onTouchStart={onSwipeEnd}
            onTouchMove={(event) => {
                if (event.targetTouches.length === 1) {
                    const newTouchPosition = event.targetTouches[0].clientX;

                    // If the user is first starting to swipe, record the distance from the leftmost
                    // edge of the menu to their touch
                    if (!touchPosition) {
                        const menuPosition =
                            event.currentTarget.getBoundingClientRect().x;
                        setTouchOffset(newTouchPosition - menuPosition);
                    }

                    // Determine if the user is swiping the menu open (negative direction) or
                    // closed (positive direction)
                    swipeDirectionRef.current = touchPosition
                        ? Math.sign(newTouchPosition - touchPosition)
                        : open
                          ? // The menu is open, so the user is beginning to swipe it closed
                            1
                          : // The menu is closed, so the user is beginning to swipe it open
                            -1;

                    setTouchPosition(newTouchPosition);
                }
            }}
            onTouchEnd={() => {
                if (touchPosition && swipeDirectionRef.current) {
                    setOpen(swipeDirectionRef.current < 0);
                }

                onSwipeEnd();
            }}
        >
            <div className={styles.navMenuItems}>{children}</div>
        </div>
    );
};

/** Props for the navigation menu component */
type NavMenuProps = {
    /** The menu's contents */
    children?: React.ReactNode;

    /** Whether the menu is open */
    open: boolean;

    /** Opens or closes the menu */
    setOpen: (open: boolean) => void;
};

export default NavMenu;
