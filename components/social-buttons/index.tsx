"use client";

import { socialTabs } from "@/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import ButtonGroup from "../button-group";
import Tooltip from "../tooltip";

/** A component for a group of social buttons */
const SocialButtons = ({
    backgroundColor,
    textColor,
    interactionBackgroundColor,
    interactionTextColor,
}: SocialButtonsProps) => (
    <ButtonGroup>
        {socialTabs.map((socialTab) => (
            <Tooltip
                key={socialTab.label}
                title={socialTab.label}
                position="bottom"
            >
                <Button
                    icon
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    interactionBackgroundColor={
                        socialTab.colorPrimary ?? interactionBackgroundColor
                    }
                    interactionTextColor={
                        socialTab.colorSecondary ?? interactionTextColor
                    }
                    href={socialTab.href}
                    openWithNewTab={socialTab.openWithNewTab}
                    aria-label={socialTab.label}
                >
                    <FontAwesomeIcon icon={socialTab.icon} />
                </Button>
            </Tooltip>
        ))}
    </ButtonGroup>
);

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
