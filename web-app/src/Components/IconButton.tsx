import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { createUseAppStyles } from "../Theme";

/**
 * A React component representing a button with an icon, such as for social buttons
 */
const IconButton = (props: IconButtonProps) => {
  const styles = useStyles(props);

  // Separate out icon button props and general button props
  const { icon, ...buttonBaseProps } = props;

  const buttonBaseClasses = [styles.root];
  if (buttonBaseProps.className) {
    buttonBaseClasses.push(buttonBaseProps.className);
  }

  return (
    <ButtonBase {...buttonBaseProps} className={buttonBaseClasses.join(" ")}>
      <FontAwesomeIcon icon={icon} fixedWidth />
    </ButtonBase>
  );
};

/**
 * Creates the icon button's styles
 */
const useStyles = createUseAppStyles<IconButtonProps>({
  root: {
    borderRadius: (data) => (data.isTransparent ? undefined : "50%"),
    padding: (data) => (data.isTransparent ? 0 : undefined),
    width: (data) => (data.isTransparent ? undefined : "2.25em"),
    height: (data) => (data.isTransparent ? undefined : "2.25em"),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "inherit",
  },
});

/**
 * Props for the icon button component
 */
type IconButtonProps = ButtonBaseProps & {
  /** The icon to place in the button */
  icon: IconDefinition;
};

export default IconButton;
