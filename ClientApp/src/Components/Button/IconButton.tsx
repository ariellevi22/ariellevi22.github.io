import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { createUseStyles } from 'react-jss';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';

type IconButtonProps = ButtonBaseProps & {
    iconName: IconName,
    iconPrefix?: IconPrefix,
};

const useStyles = createUseStyles({
    iconButton: {
        borderRadius: "50%",
        padding: "0.55em",
        textAlign: "center",
    }
})

/**
 * A React component representing a button with an icon, such as for social buttons
 */
const IconButton = (props: IconButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const styles = useStyles();

    // Separate out icon button props and general button props
    const {iconName, iconPrefix, ...buttonBaseProps} = props;

    return (
        <ButtonBase {...buttonBaseProps} className={[styles.iconButton, props.className].join(" ")}>
            <FontAwesomeIcon icon={iconPrefix ? [iconPrefix, iconName] : iconName} fixedWidth/>
        </ButtonBase>
    );
}

export default IconButton;