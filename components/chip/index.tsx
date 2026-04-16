import styles from "./chip.module.css";

/** A component for an informational chip */
const Chip = ({ children }: ChipProps) => (
    <li className={styles.chip}>{children}</li>
);

/** Props for the {@linkcode Chip} component */
type ChipProps = {
    /** The chip's contents */
    children?: React.ReactNode;
};

export default Chip;
