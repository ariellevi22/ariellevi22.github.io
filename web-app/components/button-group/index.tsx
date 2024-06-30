import styles from "./button-group.module.css";

/** A container for a group of buttons */
const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <div className={styles.buttonGroup}>{children}</div>
);

/** Props for the button group component */
type ButtonGroupProps = {
  /** The button group's contents */
  children: React.ReactNode;
};

export default ButtonGroup;
