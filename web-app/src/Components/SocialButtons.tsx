/** @jsxImportSource @emotion/react */

import { socialTabs } from "../Global";
import IconButton from "./IconButton";
import IconButtonGroup from "./IconButtonGroup";

/** A component for a group of social buttons */
const SocialButtons = (props: SocialButtonsProps) => {
  const {
    backgroundColor,
    textColor,
    interactionBackgroundColor,
    interactionTextColor,
  } = props;

  return (
    <IconButtonGroup>
      {socialTabs.map((socialTab) => {
        return (
          <IconButton
            icon={socialTab.icon}
            backgroundColor={backgroundColor}
            textColor={textColor}
            interactionBackgroundColor={
              socialTab.colorPrimary ?? interactionBackgroundColor
            }
            interactionTextColor={
              socialTab.colorSecondary ?? interactionTextColor
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

/** Props for the social buttons component */
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
