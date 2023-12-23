import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

/** A component for a button with an icon, such as a social button */
const IconButton = ({ isTransparent, ...otherProps }: ButtonBaseProps) => (
  <ButtonBase
    {...otherProps}
    isTransparent={isTransparent}
    css={{
      fontSize: "inherit",
      borderRadius: isTransparent ? undefined : "50%",
      width: isTransparent ? undefined : "2.25em",
      height: isTransparent ? undefined : "2.25em",
      overflow: "hidden",

      // Make the clickable area of buttons without backgrounds larger
      padding: isTransparent ? "0.25em" : undefined,
      margin: isTransparent ? "-0.25em" : undefined,

      // Center the icon within the button
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  />
);

export default IconButton;
