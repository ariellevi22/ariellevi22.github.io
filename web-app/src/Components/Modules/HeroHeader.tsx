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
          height: `${photoSize / 2 + spacing}rem`,
          maxHeight: `calc(${photoMaxSize / 2}vw + ${spacing}rem)`,

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
            maxHeight: "100%",
          },
        }}
      />

      <Container>
        <div
          css={{
            display: "grid",
            gap: `${spacing}rem`,
            zIndex: 1,
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",

            [`@media (min-width: ${screenSizes.md}px)`]: {
              grid: "auto / 1fr auto 1fr",
              padding: `${spacing}rem 0`,
            },
          }}
        >
          <div />

          <img
            src={profilePicture}
            alt={title}
            css={{
              width: `${photoSize}rem`,
              maxWidth: `${photoMaxSize}vw`,
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: `0 0.2em 1em 0 ${theme.colors.shadow}`,
            }}
          />

          <div
            css={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",

              [`@media (min-width: ${screenSizes.md}px)`]: {
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

/** The photo's width and height in rem */
const photoSize = 22;

/** The photo's max width and max height in vw */
const photoMaxSize = 75;

/** The spacing between hero header elements in rem */
const spacing = 2;

export default HeroHeader;
