import { CSSObject, ClassNames, useTheme } from "@emotion/react";
import {
  faBars,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FocusOn } from "react-focus-on";
import { CSSTransition } from "react-transition-group";
import { navbarHeight, screenSizes, socialTabs } from "../../Global";
import { transition, transitionDuration } from "../../Theme";
import { NavbarTab } from "../../Types";
import IconButton from "./IconButton";
import Link from "./Link";
import Logo from "./Logo";

/** A component for the website's navigation bar */
const Navbar = ({ toggleTheme }: NavbarProps) => {
  const theme = useTheme();

  // Keep track of whether the navigation bar menu (shown on small screens instead
  // of the full navigation bar) is open or closed (initially closed)
  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // On window resize, close the menu
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  });

  // Styles for the navigation menu on small screens
  const menuHiddenStyle: CSSObject = { transform: "translate(100%)" };
  const menuVisibleStyle: CSSObject = { transform: "translate(0)" };

  /** Navigation bar tabs' information */
  const navbarTabs: NavbarTab[] = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Education", href: "#education" },
  ];

  // Create the display for the navigation bar tabs
  const Tabs = () => (
    <>
      {navbarTabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          openWithNewTab={tab.openWithNewTab}
          removeUnderline
          interactionColor={theme.colors.accentNavigation}
          onClick={closeMenu}
        >
          {tab.label}
        </Link>
      ))}

      {socialTabs.map((iconTab) => (
        <IconButton
          key={iconTab.label}
          isTransparent
          interactionTextColor={theme.colors.accentNavigation}
          icon={iconTab.icon}
          href={iconTab.href}
          openWithNewTab={iconTab.openWithNewTab}
          aria-label={iconTab.label}
          title={iconTab.label}
          onClick={closeMenu}
        />
      ))}

      {toggleTheme && (
        <IconButton
          isTransparent
          interactionTextColor={theme.colors.accentNavigation}
          icon={theme.type === "light" ? faMoon : faSun}
          onClick={() => {
            toggleTheme();
            closeMenu();
          }}
          aria-label={`Change to ${
            theme.type === "light" ? "dark" : "light"
          } theme`}
          title={`Change to ${theme.type === "light" ? "dark" : "light"} theme`}
        />
      )}
    </>
  );

  // Create the display for the navigation bar menu on small screens
  const Menu = () => (
    <div
      css={{
        willChange: "transform",
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

        // Hide the menu on larger screens
        [`@media (min-width: ${screenSizes.md}px)`]: {
          display: "none",
        },
      }}
    >
      <Tabs />
    </div>
  );

  return (
    <nav>
      <FocusOn
        onClickOutside={closeMenu}
        onEscapeKey={closeMenu}
        enabled={isMenuOpen}
      >
        <div
          css={{
            padding: "1rem 7.5%",

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

            [`@media (min-width: ${screenSizes.md}px)`]: {
              padding: "1rem 2.5rem",
            },
          }}
        >
          <Logo
            href="#top"
            onClick={closeMenu}
            accentColor={theme.colors.accentNavigation}
            interactionColor={theme.colors.accentNavigation}
          />

          <div
            css={{
              display: "none",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              width: "auto",
              height: "auto",
              overflow: "hidden",

              // Only show the tabs on larger screens
              [`@media (min-width: ${screenSizes.md}px)`]: {
                display: "flex",
              },
            }}
          >
            <Tabs />
          </div>

          <IconButton
            isTransparent
            interactionTextColor={theme.colors.accentNavigation}
            icon={isMenuOpen ? faClose : faBars}
            onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
            css={{
              display: "block",
              [`@media (min-width: ${screenSizes.md}px)`]: {
                display: "none",
              },
            }}
            aria-label={`${isMenuOpen ? "Close" : "Open"} Menu`}
            title={`${isMenuOpen ? "Close" : "Open"} Menu`}
          />
        </div>

        <ClassNames>
          {({ css }) => (
            <CSSTransition
              in={isMenuOpen}
              timeout={transitionDuration}
              classNames={{
                enter: css(menuHiddenStyle),
                enterActive: css({
                  ...menuVisibleStyle,
                  transition: transition("transform"),
                }),
                enterDone: css(menuVisibleStyle),
                exit: css(menuVisibleStyle),
                exitActive: css({
                  ...menuHiddenStyle,
                  transition: transition("transform"),
                }),
                exitDone: css(menuHiddenStyle),
              }}
              unmountOnExit
            >
              <Menu />
            </CSSTransition>
          )}
        </ClassNames>
      </FocusOn>
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
