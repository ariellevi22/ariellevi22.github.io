/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { ClassNames, useTheme } from "@emotion/react";
import { navbarHeight, screenSizes } from "../Global";
import IconButton from "./IconButton";
import Link from "./Link";
import Logo from "./Logo";
import { navbarTabs, socialTabs } from "../Global";
import { CSSTransition } from "react-transition-group";
import {
  faBars,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

/**
 * A React component for the website's navigation bar
 */
const Navbar = (props: NavbarProps) => {
  const theme = useTheme();

  /*
   * Keep track of whether the navigation bar menu (shown on small screens instead
   * of the full navigation bar) is open (true) or closed (false). Initially, it is closed.
   */
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Create the display for the navigation bar tabs
  const tabs = (
    <>
      {navbarTabs.map((tab) => {
        return (
          <Link
            href={tab.href}
            key={tab.label}
            openWithNewTab={tab.openWithNewTab}
            removeUnderline
            interactionColor={theme.colors.accentNavigation}
          >
            {tab.label}
          </Link>
        );
      })}

      {socialTabs
        .filter((socialTab) => socialTab.label !== "Email")
        .map((iconTab) => {
          return (
            <IconButton
              isTransparent
              interactionTextColor={theme.colors.accentNavigation}
              icon={iconTab.icon}
              href={iconTab.href}
              openWithNewTab
              aria-label={iconTab.label}
              title={iconTab.label}
              key={iconTab.label}
            />
          );
        })}

      {props.toggleTheme && (
        <IconButton
          isTransparent
          interactionTextColor={theme.colors.accentNavigation}
          icon={theme.type === "light" ? faMoon : faSun}
          onClick={props.toggleTheme}
          aria-label={`Change to ${
            theme.type === "light" ? "dark" : "light"
          } theme`}
          title={`Change to ${theme.type === "light" ? "dark" : "light"} theme`}
        />
      )}
    </>
  );

  // Display the navigation bar
  return (
    <nav>
      <div
        css={{
          padding: "1rem 2.5rem",
          top: 0,
          width: "100%",
          height: `${navbarHeight}em`,
          position: "fixed",
          zIndex: 10,
          backgroundColor: theme.colors.backgroundNavigation,
          color: theme.colors.textNavigation,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          gap: "1rem",
          overflow: "hidden",
        }}
      >
        <Logo
          href="#top"
          onClick={() => setMenuOpen(false)}
          interactionColor={theme.colors.accentNavigation}
        />

        <IconButton
          isTransparent
          interactionTextColor={theme.colors.accentNavigation}
          icon={isMenuOpen ? faClose : faBars}
          onClick={() => setMenuOpen(!isMenuOpen)}
          css={{
            display: ["none", "!important"],
            [`@media screen and (max-width: ${screenSizes.small}px)`]: {
              display: ["block", "!important"],
            },
          }}
          aria-label={`${isMenuOpen ? "Close" : "Open"} Menu`}
          title={`${isMenuOpen ? "Close" : "Open"} Menu`}
        />

        <div
          css={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            alignItems: "center",
            width: "auto",
            height: "auto",
            overflow: "hidden",

            // On small screens, hide the tabs
            [`@media screen and (max-width: ${screenSizes.small}px)`]: {
              display: "none",
            },
          }}
        >
          {tabs}
        </div>
      </div>

      <ClassNames>
        {({ css }) => (
          <CSSTransition
            in={isMenuOpen}
            timeout={theme.transitionTime}
            classNames={{
              enter: css({ opacity: 0, width: 0 }),
              enterActive: css({
                opacity: 1,
                width: menuWidth,
                transition: theme.transition,
              }),
              exit: css({ width: menuWidth, opacity: 1 }),
              exitActive: css({
                width: 0,
                opacity: 0,
                transition: theme.transition,
              }),
            }}
            unmountOnExit
          >
            <div
              css={{
                // Only show the menu on small screens
                [`@media screen and (max-width: ${screenSizes.small}px)`]: {
                  display: "flex",
                  position: "fixed",
                  right: 0,
                  width: menuWidth,
                  height: `calc(100% - ${navbarHeight}rem)`,
                  zIndex: 9,
                  padding: "8rem 2.5rem",
                  backgroundColor: theme.colors.backgroundNavigationMenu,
                  color: theme.colors.textNavigation,
                  gap: "1rem",
                  flexDirection: "column",
                  alignItems: "flex-end", // right align
                  justifyContent: "space-evenly",
                },
              }}
              onClick={() => setMenuOpen(false)}
            >
              {tabs}
            </div>
          </CSSTransition>
        )}
      </ClassNames>
    </nav>
  );
};

const menuWidth = "80vw";

/**
 * Props for the navigation bar component
 */
type NavbarProps = {
  /** A function to change the application theme between light and dark modes */
  toggleTheme?: () => void;
};

export default Navbar;
