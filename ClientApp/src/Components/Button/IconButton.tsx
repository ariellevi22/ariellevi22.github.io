import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { createUseStyles } from 'react-jss';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';

type IconButtonProps = ButtonBaseProps & {
    iconName: IconName,
    iconPrefix?: IconPrefix,
};

/**
 * A React component representing a button with an icon, such as for social buttons
 * 
 * Props:
 * * `iconName` the name of the Font Awesome icon to place in the button
 * * `iconPrefix` the prefix of the FontAwesome icon to place in the button (such as "fas" or "fab")
 */
const IconButton = (props: IconButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const styles = useStyles(props);

    // Separate out icon button props and general button props
    const { iconName, iconPrefix, ...buttonBaseProps } = props;

    return (
        <ButtonBase {...buttonBaseProps} className={[styles.iconButton, props.className].join(" ")}>
            <FontAwesomeIcon icon={iconPrefix ? [iconPrefix, iconName] : iconName} fixedWidth />
        </ButtonBase>
    );
}

/**
 * Creates the icon button's styles
 */
const useStyles = createUseStyles<"iconButton", IconButtonProps>({
    iconButton: {
        borderRadius: "50%",
        padding: data => data.isTransparent ? 0 : "0.5em",
        textAlign: "center",
    }
});

export default IconButton;