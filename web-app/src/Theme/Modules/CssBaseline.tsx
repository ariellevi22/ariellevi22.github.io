import { Global, useTheme } from "@emotion/react";
import { useTransition } from "./Transition";

/** Baseline styling based on the application's theme */
const CssBaseline = () => {
  const theme = useTheme();
  const fonts = ["Poppins", "system-ui", "sans-serif"];

  return (
    <Global
      styles={{
        "*": {
          boxSizing: "border-box",
          margin: 0,
          fontFamily: "inherit",
          zIndex: "inherit",
        },

        html: { scrollBehavior: "smooth" },

        body: {
          fontFamily: fonts.join(", "),
          backgroundColor: theme.colors.backgroundPrimary,
          color: theme.colors.textPrimary,
          transition: useTransition("backgroundColor", "color"),
        },

        h1: {
          fontSize: "2.5rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
          lineHeight: "110%",
        },

        h2: {
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "1rem",
          lineHeight: "120%",
        },

        h3: {
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "0.25rem",
          lineHeight: "120%",
        },

        h4: {
          fontSize: "1.125rem",
          fontWeight: 600,
          marginBottom: "0.25rem",
          lineHeight: "120%",
        },

        "p, ul, ol": {
          marginBottom: "0.75rem",
        },

        li: {
          marginBottom: "0.25rem",
        },
      }}
    />
  );
};

export default CssBaseline;
