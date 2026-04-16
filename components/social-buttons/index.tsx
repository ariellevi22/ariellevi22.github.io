"use client";

import { socialTabs } from "@/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, { ButtonBaseProps } from "../button";
import ButtonGroup from "../button-group";

/** A component for a group of social buttons */
const SocialButtons = ({ color, colorOverrides }: SocialButtonsProps) => (
    <ButtonGroup>
        {socialTabs.map((socialTab) => (
            <Button
                icon
                color={color}
                colorOverrides={{
                    ...colorOverrides,
                    interactionBackgroundColor:
                        socialTab.colorPrimary ??
                        colorOverrides?.interactionBackgroundColor,
                    interactionTextColor:
                        socialTab.colorSecondary ??
                        colorOverrides?.interactionTextColor,
                }}
                href={socialTab.href}
                openWithNewTab={socialTab.openWithNewTab}
                key={socialTab.label}
                title={socialTab.label}
                aria-label={socialTab.label}
            >
                <FontAwesomeIcon icon={socialTab.icon} />
            </Button>
        ))}
    </ButtonGroup>
);

/** Props for the {@linkcode SocialButtons} component */
type SocialButtonsProps = Omit<ButtonBaseProps, "icon">;

export default SocialButtons;
