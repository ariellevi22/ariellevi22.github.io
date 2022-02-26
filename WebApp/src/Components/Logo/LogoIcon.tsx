import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../../theme";

type LogoIconProps = {
    color?: string;
};

/**
 * A React component representing the application logo's icon (the logo without the text).
 *
 * Props:
 * * `color` the color in which the logo should be displayed (default value is "inherit")
 * * all other SVG properties
 */
const LogoIcon = (props: LogoIconProps & React.SVGAttributes<SVGElement>) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    const { color, ...svgProps } = props;

    const logoClasses = [styles.logo];
    if (svgProps.className) {
        logoClasses.push(svgProps.className);
    }

    return (
        <svg
            {...svgProps}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 564.58 397.51"
            className={logoClasses.join(" ")}
        >
            <path
                d="M456.46,341.24c-109.59,0-198.75,89.16-198.75,198.76s89.16,198.76,198.75,198.76A198.89,198.89,0,0,0,630.22,636.4v89.86a12.5,12.5,0,0,0,25,0V540C655.22,430.4,566.06,341.24,456.46,341.24Zm0,372.52c-95.81,0-173.75-78-173.75-173.76s77.94-173.76,173.75-173.76S630.22,444.19,630.22,540,552.28,713.76,456.46,713.76Z"
                transform="translate(-257.71 -341.24)"
                fill="currentcolor"
            />
            <path
                d="M809.79,713.76H748v-360a12.5,12.5,0,0,0-25,0V726.26a12.5,12.5,0,0,0,12.5,12.5h74.27a12.5,12.5,0,0,0,0-25Z"
                transform="translate(-257.71 -341.24)"
                fill="currentcolor"
            />
        </svg>
    );
};

/**
 * Creates the logo icon's styles
 */
const useStyles = createUseStyles<"logo", LogoIconProps, AppTheme>({
    logo: (data) => ({
        height: "2.25rem",
        color: data.color ? data.color : "inherit",
        transition: data.theme.transition,
    }),
});

export default LogoIcon;
