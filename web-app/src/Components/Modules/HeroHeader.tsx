import { useTheme } from "@emotion/react";
import profilePicture from "../../Assets/ProfilePicture.jpg";
import { Container } from "../../Containers";
import { screenSizes, title } from "../../Global";
import SocialButtons from "./SocialButtons";

/**
 * A component for the website's hero header, which contains a heading,
 * a photo, and social buttons
 */
const HeroHeader = () => {
  const theme = useTheme();

  return (
    <header css={{ width: "100%", position: "relative" }}>
      <div
        css={{
          width: "100%",
          height: "35%",

          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: theme.colors.accentPrimary,
          backgroundImage: `linear-gradient(to right, ${theme.colors.accentPrimary}, ${theme.colors.accentSecondary})`,
          boxShadow: `0 0 3rem 0 ${theme.colors.shadow} inset`,

          [`@media (min-width: ${screenSizes.md}px)`]: {
            width: "50%",
            height: "100%",
          },
        }}
      />

      <Container>
        <div
          css={{
            display: "grid",
            grid: "1fr auto 6fr / auto",
            zIndex: 1,

            [`@media (min-width: ${screenSizes.md}px)`]: {
              grid: "auto / 1fr auto 1fr",
            },
          }}
        >
          <div />

          <img
            src={profilePicture}
            alt={title}
            css={{
              margin: "0 auto",

              width: "22rem",
              maxWidth: "75vw",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: `0 0.2em 1em 0 ${theme.colors.shadow}`,

              [`@media (min-width: ${screenSizes.md}px)`]: {
                margin: "2rem 2.5rem",
              },
            }}
          />

          <div
            css={{
              margin: "1.5rem auto 0",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",

              [`@media (min-width: ${screenSizes.md}px)`]: {
                margin: "auto",
                textAlign: "left",
                alignItems: "flex-start",
              },
            }}
          >
            <div>
              <h1>{title}</h1>
              <p css={{ marginBottom: 0 }}>Software Engineer at Garmin</p>
            </div>

            <SocialButtons />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeroHeader;
