import { navbarTabs, socialTabs } from "@/global";
import { Placement } from "@floating-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { MouseEventHandler } from "react";
import Tooltip from "../tooltip";

/** A component for the links in the navigation bar or navigation menu */
const NavLinks = ({
    onClickLink: onClickTab,
    tooltipPosition = "bottom",
}: NavLinksProps) => (
    <>
        {navbarTabs.map((tab) => (
            <Link
                key={tab.label}
                href={tab.href}
                target={tab.openWithNewTab ? "_blank" : undefined}
                rel={tab.openWithNewTab ? "noopener noreferrer" : undefined}
                onClick={onClickTab}
            >
                {tab.label}
            </Link>
        ))}

        {socialTabs.map((tab) => (
            <Tooltip
                key={tab.label}
                title={tab.label}
                position={tooltipPosition}
            >
                <Link
                    href={tab.href}
                    target={tab.openWithNewTab ? "_blank" : undefined}
                    rel={tab.openWithNewTab ? "noopener noreferrer" : undefined}
                    aria-label={tab.label}
                    onClick={onClickTab}
                >
                    <FontAwesomeIcon icon={tab.icon} />
                </Link>
            </Tooltip>
        ))}
    </>
);

/** Props for the {@linkcode NavLinks} component */
type NavLinksProps = {
    /** Event handler for when a link is clicked */
    onClickLink?: MouseEventHandler<HTMLAnchorElement>;

    /**
     * The preferred position of a tooltip relative to a link
     * @default "bottom"
     */
    tooltipPosition?: Placement;
};

export default NavLinks;
