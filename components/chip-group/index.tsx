import styles from "./chip-group.module.css";

/** A container for a group of chips */
const ChipGroup = ({ children }: ChipGroupProps) => (
    <ul className={styles.chipGroup}>{children}</ul>
);

/** Props for the {@linkcode ChipGroup} component */
type ChipGroupProps = {
    /** The chip group's contents */
    children?: React.ReactNode;
};

export default ChipGroup;
