/** @jsxImportSource @emotion/react */

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

/** A component for a button with an icon, such as a social button */
const IconButton = (props: IconButtonProps) => {
  const { icon, isTransparent, ...buttonBaseProps } = props;

  return (
    <ButtonBase
      {...buttonBaseProps}
      isTransparent={isTransparent}
      css={{
        borderRadius: isTransparent ? undefined : "50%",
        padding: isTransparent ? 0 : undefined,
        width: isTransparent ? undefined : "2.25em",
        height: isTransparent ? undefined : "2.25em",
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
