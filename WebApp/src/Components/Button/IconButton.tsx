import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconButtonProps = ButtonBaseProps & {
    icon: IconDefinition;
};

/**
 * A React component representing a button with an icon, such as for social buttons
 *
 * Props:
 * * `iconName` the name of the Font Awesome icon to place in the button
 * * `iconPrefix` the prefix of the FontAwesome icon to place in the button (such as "fas" or "fab")
 */
const IconButton = (props: IconButtonProps) => {
    const styles = useStyles(props);

    // Separate out icon button props and general button props
    const { icon, ...buttonBaseProps } = props;

    const buttonBaseClasses = [styles.iconButton];
    if (buttonBaseProps.className) {
        buttonBaseClasses.push(buttonBaseProps.className);
    }

    return (
        <ButtonBase
            {...buttonBaseProps}
            className={buttonBaseClasses.join(" ")}
        >
            <FontAwesomeIcon icon={icon} fixedWidth />
        </ButtonBase>
    );
};

/**
 * Creates the icon button's styles
 */
const useStyles = createUseStyles<"iconButton", IconButtonProps>({
    iconButton: {
        borderRadius: (data) => (data.isTransparent ? undefined : "50%"),
        padding: (data) => (data.isTransparent ? 0 : undefined),
        width: (data) => (data.isTransparent ? undefined : "2.25em"),
        height: (data) => (data.isTransparent ? undefined : "2.25em"),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "inherit",
    },
});

export default IconButton;
