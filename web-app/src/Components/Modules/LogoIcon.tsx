import { useTransition } from "../../Theme";

/**
 * A component for the application logo's icon (the logo without the text),
 * which can have its color changed using the `color` property
 */
const LogoIcon = (props: LogoIconProps) => {
  return (
    <svg
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 924.16 620.22"
      fill="currentColor"
      {...props}
      css={{
        height: "2.25rem",
        transition: useTransition("color", "transform"),
      }}
    >
      <path d="M534.56,84.22h0C417.45-32.9,221.16-27.16,97,97c-124.16,124.16-129.9,320.45-12.79,437.56,56.31,56.31,130.92,84.21,207.02,84.21,82.17,0,166.08-32.54,230.54-97,19-19,35.21-39.69,48.65-61.53v135.57c0,13.35,10.82,24.18,24.18,24.18s24.18-10.82,24.18-24.18c0,0-.04-299.34-.06-299.73,1.21-77.77-26.65-154.37-84.15-211.88Zm-46.98,403.36c-105.31,105.31-270.91,111.05-369.17,12.79C20.15,402.11,25.89,236.5,131.19,131.2c55.05-55.05,126.57-82.89,196.34-82.89,63.7,0,125.94,23.21,172.83,70.1,98.23,98.26,92.51,263.87-12.79,369.17Z" />
      <path d="M899.79,571.49h-129.96V67.91c0-13.46-10.91-24.37-24.37-24.37s-24.37,10.91-24.37,24.37V595.86c0,13.46,10.91,24.37,24.37,24.37h154.32c13.46,0,24.37-10.91,24.37-24.37s-10.91-24.37-24.37-24.37Z" />
    </svg>
  );
};

/** Props for the logo icon component */
type LogoIconProps = React.SVGAttributes<SVGElement>;

export default LogoIcon;
