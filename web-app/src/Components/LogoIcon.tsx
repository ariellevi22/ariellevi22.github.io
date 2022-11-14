import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../theme";
import { ReactComponent as LogoSvg } from "../Assets/Logo.svg";

/**
 * A React component representing the application logo's icon (the logo without the text).
 * The color of the logo icon can be changed using the `color` property.
 */
const LogoIcon = (props: LogoIconProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    const classes = [styles.root];
    if (props.className) {
        classes.push(props.className);
    }

    return <LogoSvg {...props} className={classes.join(" ")} />;
};

/**
 * Creates the logo icon's styles
 */
const useStyles = createUseStyles<"root", LogoIconProps, AppTheme>({
    root: (data) => ({
        height: "2.25rem",
        transition: data.theme.transition,
    }),
});

/**
 * Props for the logo icon component
 */
type LogoIconProps = React.SVGAttributes<SVGElement>;

export default LogoIcon;
