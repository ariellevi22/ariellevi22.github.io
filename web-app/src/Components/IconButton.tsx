/** @jsxImportSource @emotion/react */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/** A component for a button with an icon, such as a social button */
const IconButton = (props: IconButtonProps) => {
  const { icon, ...buttonBaseProps } = props;

  return (
    <ButtonBase
      {...buttonBaseProps}
      css={{
        borderRadius: buttonBaseProps.isTransparent ? undefined : "50%",
        padding: buttonBaseProps.isTransparent ? 0 : undefined,
        width: buttonBaseProps.isTransparent ? undefined : "2.25em",
        height: buttonBaseProps.isTransparent ? undefined : "2.25em",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "inherit",
      }}
    >
      <FontAwesomeIcon icon={icon} fixedWidth />
    </ButtonBase>
  );
};

/** Props for the icon button component */
type IconButtonProps = ButtonBaseProps & {
  /** The icon to place in the button */
  icon: IconDefinition;
};

export default IconButton;
