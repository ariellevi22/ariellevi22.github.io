import styles from "./chip-group.module.css";

/** A container for a group of chips */
const ChipGroup = ({ children }: ChipGroupProps) => (
  <ul className={styles.chipGroup}>{children}</ul>
);

/** Props for the chip group component */
type ChipGroupProps = {
  children?: React.ReactNode;
};

export default ChipGroup;
