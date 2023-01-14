/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { ReactComponent as LogoSvg } from "../Assets/Logo.svg";

/**
 * A component for the application logo's icon (the logo without the text),
 * which can have its color changed using the `color` property
 */
const LogoIcon = (props: LogoIconProps) => {
  const theme = useTheme();

  return (
    <LogoSvg
      {...props}
      css={{ height: "2.25rem", transition: theme.transition }}
    />
  );
};

/** Props for the logo icon component */
type LogoIconProps = React.SVGAttributes<SVGElement>;

export default LogoIcon;
