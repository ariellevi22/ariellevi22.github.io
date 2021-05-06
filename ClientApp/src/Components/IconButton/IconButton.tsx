import './IconButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IIconButton from '../../Models/IIconButton';

/**
 * React component representing a button with an icon, such as for social buttons.
 * 
 * Usage:
 * ```tsx
 * <IconButton
 *     iconName="Font Awesome icon name"
 *     iconPrefix="fas, fab, far, or any other Font Awesome prefix"
 *     href="URL for button to go to"
 *     alt="true if alternate button colors should be used (when supported in the CSS), false otherwise"
 * />
 * ```
 */
const IconButton = (props: IIconButton) => {
    let buttonClasses = ["social-button", props.iconName];
    if (props.alternate) {
        buttonClasses.push("alt");
    }

    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <button className={buttonClasses.join(" ")}>
                <FontAwesomeIcon icon={[props.iconPrefix, props.iconName]} fixedWidth/>
            </button>
        </a>
    );
}

export default IconButton;