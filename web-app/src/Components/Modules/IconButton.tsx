import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

/** A component for a button with an icon, such as a social button */
const IconButton = ({ isTransparent, ...otherProps }: ButtonBaseProps) => (
  <ButtonBase
    {...otherProps}
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
  />
);

export default IconButton;
