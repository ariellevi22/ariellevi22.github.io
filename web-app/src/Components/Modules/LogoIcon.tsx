import { useTheme } from "@emotion/react";

/** A component for the application logo's icon (the logo without the text) */
const LogoIcon = ({
  height,
  width,
  fill,
  color,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 920"
      height={height ?? (width ? undefined : "2.75rem")}
      width={width}
      fill={fill ?? theme.colors.accentPrimary}
      color={color}
      role="img"
    >
      <g id="a">
        <path
          fill="currentColor"
          d="m187.36,514.64C83.58,516.57,0,606.57,0,717.32s83.58,200.75,187.36,202.68v-405.36Z"
        />
        <path
          fill="currentColor"
          d="m484.92,450.68c0-110.75-83.58-200.75-187.36-202.68v468.92h0c0,.13,0,.27,0,.4,0,110.75,83.58,200.75,187.36,202.68v-469h0c0-.11,0-.21,0-.32Z"
        />
        <path
          fill="currentColor"
          d="m782.47,202.68c0-110.75-83.58-200.75-187.36-202.68v716.92h0c0,.13,0,.27,0,.4,0,110.75,83.58,200.75,187.36,202.68V203h0c0-.11,0-.21,0-.32Z"
        />
        <path d="m187.3,380.5c0,51.64-41.93,93.5-93.65,93.5S0,432.14,0,380.5s93.65-132.5,93.65-132.5c0,0,93.65,80.86,93.65,132.5Z" />
        <path d="m892.7,787.5c0-51.64,41.93-93.5,93.65-93.5s93.65,41.86,93.65,93.5-93.65,132.5-93.65,132.5c0,0-93.65-80.86-93.65-132.5Z" />
      </g>
    </svg>
  );
};

export default LogoIcon;
