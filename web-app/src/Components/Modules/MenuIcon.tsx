import { transition } from "../../Theme";

/**
 * A component for that transforms from a hamburger menu icon
 * to a close icon
 */
const MenuIcon = ({ close }: MenuIconProps) => {
  const barHeight = "0.15em";
  const barOffset = "-0.35em";

  const movementTransitionDuration = 150;
  const appearanceTransitionDuration = 250;

  return (
    <div
      css={{
        height: "1em",
        width: "1em",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        css={{
          "&, ::before, ::after": {
            width: "100%",
            height: barHeight,
            borderRadius: barHeight,
            backgroundColor: "currentColor",
            position: "absolute",
            left: 0,
            right: 0,
            transition: [
              transition(
                ["top", "bottom"],
                movementTransitionDuration,
                close ? undefined : appearanceTransitionDuration
              ),
              transition(
                ["opacity", "transform"],
                appearanceTransitionDuration,
                close ? movementTransitionDuration : undefined
              ),
            ].join(","),
          },

          "::before, ::after": {
            content: '""',
          },

          // The top bar in the menu icon
          "::before": {
            top: close ? 0 : barOffset,
            opacity: close ? 0 : 1,
          },

          // The middle bar in the menu icon and the \ in the X
          transform: `rotate(${close ? 45 : 0}deg)`,

          // The bottom bar in the menu icon and the / in the X
          "::after": {
            bottom: close ? 0 : barOffset,
            transform: `rotate(${close ? 90 : 0}deg)`,
          },
        }}
      />
    </div>
  );
};

/** Props for the menu icon component */
type MenuIconProps = {
  close?: boolean;
};

export default MenuIcon;
