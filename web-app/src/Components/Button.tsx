/** @jsxImportSource @emotion/react */

import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

/**
 * A React component representing a button
 */
const Button = (props: ButtonBaseProps) => (
  <ButtonBase
    {...props}
    css={{
      padding: "0.25rem 0.5rem",
      borderRadius: "0.5rem",
    }}
  >
    {props.children}
  </ButtonBase>
);

export default Button;
