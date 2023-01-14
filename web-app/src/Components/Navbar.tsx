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

/** A component for the website's navigation bar */
const Navbar = (props: NavbarProps) => {
  const { toggleTheme } = props;

  const theme = useTheme();

  // Keep track of whether the navigation bar menu (shown on small screens instead
  // of the full navigation bar) is open or closed (initially closed)
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuHiddenStyle = { opacity: 0, width: 0 };
  const menuVisibleStyle = { opacity: 1, width: menuWidth };

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
        .filter((socialTab) => socialTab.label.toLowerCase() !== "email")
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

      {toggleTheme && (
        <IconButton
          isTransparent
          interactionTextColor={theme.colors.accentNavigation}
          icon={theme.type === "light" ? faMoon : faSun}
          onClick={toggleTheme}
          aria-label={`Change to ${
            theme.type === "light" ? "dark" : "light"
          } theme`}
          title={`Change to ${theme.type === "light" ? "dark" : "light"} theme`}
        />
      )}
    </>
  );

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
          onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
          css={{
            display: "none",
            [`@media screen and (max-width: ${screenSizes.small}px)`]: {
              display: "block",
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
              enter: css(menuHiddenStyle),
              enterActive: css({
                ...menuVisibleStyle,
                transition: theme.transition("opacity", "width"),
              }),
              enterDone: css(menuVisibleStyle),
              exit: css(menuVisibleStyle),
              exitActive: css({
                ...menuHiddenStyle,
                transition: theme.transition("opacity", "width"),
              }),
              exitDone: css(menuHiddenStyle),
            }}
            unmountOnExit
          >
            <div
              css={{
                // Only show the menu on small screens
                display: "none",
                [`@media screen and (max-width: ${screenSizes.small}px)`]: {
                  display: "flex",
                  position: "fixed",
                  right: 0,
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
