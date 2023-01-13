/** @jsxImportSource @emotion/react */

import { socialTabs } from "../Global";
import IconButton from "./IconButton";
import IconButtonGroup from "./IconButtonGroup";

/**
 * A React component representing a group of social buttons
 */
const SocialButtons = (props: SocialButtonsProps) => {
  return (
    <IconButtonGroup>
      {socialTabs.map((socialTab) => {
        return (
          <IconButton
            icon={socialTab.icon}
            backgroundColor={props.backgroundColor}
            textColor={props.textColor}
            interactionBackgroundColor={
              socialTab.colorPrimary || props.interactionBackgroundColor
            }
            interactionTextColor={
              socialTab.colorSecondary || props.interactionTextColor
            }
            href={socialTab.href}
            openWithNewTab
            key={socialTab.label}
            title={socialTab.label}
            aria-label={socialTab.label}
          />
        );
      })}
    </IconButtonGroup>
  );
};

/**
 * Props for the social buttons component
 */
type SocialButtonsProps = {
  /** The social buttons' background color */
  backgroundColor?: string;

  /** The social buttons' text color */
  textColor?: string;

  /** The social buttons' background color when interacted with */
  interactionBackgroundColor?: string;

  /** The social buttons' text color when interacted with */
  interactionTextColor?: string;
};

export default SocialButtons;
