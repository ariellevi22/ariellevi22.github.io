import styles from "./menu-icon.module.css";

/**
 * A component for that transforms from a hamburger menu icon to a close icon
 */
const MenuIcon = ({ close }: MenuIconProps) => (
    <div
        className={[styles.icon, close ? styles.close : styles.open].join(" ")}
    >
        <div />
    </div>
);

/** Props for the menu icon component */
type MenuIconProps = {
    close?: boolean;
};

export default MenuIcon;
