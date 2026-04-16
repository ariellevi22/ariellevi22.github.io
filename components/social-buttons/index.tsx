"use client";

import { socialTabs } from "@/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, { ButtonBaseProps } from "../button";
import ButtonGroup from "../button-group";
import Tooltip from "../tooltip";

/** A component for a group of social buttons */
const SocialButtons = ({ color, colorOverrides }: SocialButtonsProps) => (
    <ButtonGroup>
        {socialTabs.map((socialTab) => (
            <Tooltip
                key={socialTab.label}
                title={socialTab.label}
                position="bottom"
            >
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
                >
                    <FontAwesomeIcon icon={socialTab.icon} />
                </Button>
            </Tooltip>
        ))}
    </ButtonGroup>
);

/** Props for the {@linkcode SocialButtons} component */
type SocialButtonsProps = Omit<ButtonBaseProps, "icon">;

export default SocialButtons;
