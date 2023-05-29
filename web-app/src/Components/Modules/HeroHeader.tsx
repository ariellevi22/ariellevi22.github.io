/** @jsxImportSource @emotion/react */

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
          width: "50%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: theme.colors.accentPrimary,
          backgroundImage: `linear-gradient(to right, ${theme.colors.accentPrimary}, ${theme.colors.accentSecondary})`,
          boxShadow: `0 0 3rem 0 ${theme.colors.shadow} inset`,

          [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            width: "100%",
            height: "35%",
          },
        }}
      />

      <Container>
        <div
          css={{
            display: "grid",
            grid: "auto / 1fr auto 1fr",
            zIndex: 1,

            [`@media screen and (max-width: ${screenSizes.small}px)`]: {
              grid: "1fr auto 6fr / auto",
            },
          }}
        >
          <div />

          <img
            src={profilePicture}
            alt={title}
            css={{
              margin: "2rem 2.5rem",
              width: "22rem",
              maxWidth: "75vw",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: `0 0.2em 1em 0 ${theme.colors.shadow}`,

              [`@media screen and (max-width: ${screenSizes.small}px)`]: {
                margin: "0 auto",
              },
            }}
          />

          <div
            css={{
              margin: "auto",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",

              [`@media screen and (max-width: ${screenSizes.small}px)`]: {
                margin: "1.5rem auto 0",
                textAlign: "center",
                alignItems: "center",
              },
            }}
          >
            <div>
              <h1>{title}</h1>
              <p style={{ marginBottom: 0 }}>
                Incoming Software Engineer at Garmin
              </p>
            </div>

            <SocialButtons />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeroHeader;
