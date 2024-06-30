"use client";

import { useEffect, useState } from "react";
import styles from "./nav-menu.module.css";

/**
 * A component for the navigation menu that pops out from the navigation
 * bar on small screens
 */
const NavMenu = ({ children, open }: NavMenuProps) => {
  // Keep track of whether the menu is on the screen (opening, open, or closing)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (open) {
      // When the menu is opened, make it visible immediately
      setVisible(true);
    } else {
      // When the menu is closed, wait until it is finished animating off
      // the screen before making it invisible
      timerId = setTimeout(() => setVisible(false), 250);
    }

    return () => clearTimeout(timerId);
  }, [open]);

  const navMenuClassNames = [
    styles.navMenu,

    // The menu is fully onscreen (not at all translated off) when it is
    // both open and visible
    open && visible ? styles.open : styles.closed,
  ].join(" ");

  return (
    <div
      className={navMenuClassNames}
      hidden={
        // Display the menu while it is opening, open, or closing
        !(open || visible)
      }
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
};

export default NavMenu;
