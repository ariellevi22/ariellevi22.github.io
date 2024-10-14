"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./nav-menu.module.css";

const transitionDurationMilliseconds = 250;

/**
 * A component for the navigation menu that pops out from the navigation
 * bar on small screens
 */
const NavMenu = ({ children, open, setOpen }: NavMenuProps) => {
  // Keep track of whether the menu is on the screen (opening, open, or closing)
  const [visible, setVisible] = useState(false);

  // When the menu is opened, make it visible immediately
  useEffect(() => {
    if (open) {
      setVisible(true);
    }
  }, [open]);

  // Keep track of whether the user is swiping the menu open/closed
  const [touchPosition, setTouchPosition] = useState<number>();
  const touchOffsetRef = useRef(0);
  const swipeDirectionRef = useRef(0);

  /** Resets the touch states to indicate that the user is no longer swiping */
  const onSwipeEnd = () => {
    setTouchPosition(undefined);
    touchOffsetRef.current = 0;
    swipeDirectionRef.current = 0;
  };

  return (
    <div
      className={styles.navMenu}
      hidden={
        // Display the menu while it is opening, open, or closing
        !(open || visible)
      }
      style={{
        transition: touchPosition
          ? undefined
          : `transform ${transitionDurationMilliseconds}ms ease`,
        transform: touchPosition
          ? // The menu is positioned according to the user's touch
            `translate(clamp(0px, 100% - ${window.innerWidth - (touchPosition - touchOffsetRef.current)}px, 100%))`
          : open && visible
            ? // The menu is open, so it is not translated off the screen
              "translate(0px)"
            : // The menu is closed, so it is translated all the way off the screen
              "translate(100%)",
      }}
      onTouchStart={onSwipeEnd}
      onTouchMove={(event) => {
        if (event.targetTouches.length === 1) {
          const menuPosition = event.currentTarget.getBoundingClientRect().x;
          const newTouchPosition = event.targetTouches[0].clientX;

          // If the user is first starting to swipe, record the distance from the leftmost
          // edge of the menu to their touch
          if (!touchPosition) {
            touchOffsetRef.current = newTouchPosition - menuPosition;
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
      onTransitionEnd={() => {
        // When the menu is closed, wait until it is finished animating off
        // the screen before making it invisible
        setVisible(open || Boolean(touchPosition));
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
