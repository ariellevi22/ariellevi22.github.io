/** @jsxImportSource @emotion/react */

import { ChildrenProps } from "Types";

/** A container for a group of icon buttons */
const IconButtonGroup = (props: IconButtonGroupProps) => {
  const { children } = props;

  return (
    <div
      css={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        fontSize: "1.125rem",
      }}
    >
      {children}
    </div>
  );
};

/** Props for the icon button group */
type IconButtonGroupProps = ChildrenProps;

export default IconButtonGroup;
