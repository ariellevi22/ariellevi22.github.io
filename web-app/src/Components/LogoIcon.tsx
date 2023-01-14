/** @jsxImportSource @emotion/react */

import { ReactComponent as LogoSvg } from "../Assets/Logo.svg";
import { transition } from "../Theme";

/**
 * A component for the application logo's icon (the logo without the text),
 * which can have its color changed using the `color` property
 */
const LogoIcon = (props: LogoIconProps) => {
  return (
    <LogoSvg
      {...props}
      css={{
        height: "2.25rem",
        transition: transition("color", "transform"),
      }}
    />
  );
};

/** Props for the logo icon component */
type LogoIconProps = React.SVGAttributes<SVGElement>;

export default LogoIcon;
