import { useTheme } from "@emotion/react";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Chip,
  ChipGroup,
  IconButton,
  IconButtonGroup,
} from "../../Components";
import { Section, SimpleGrid } from "../../Containers";
import portfolioData from "./data";

/** "Portfolio" section */
const Portfolio = () => {
  const theme = useTheme();
  const id = "portfolio";

  return (
    <Section id={id}>
      <h2>Portfolio</h2>

      <SimpleGrid numColumns={{ lg: 2, md: 2, sm: 1 }}>
        {portfolioData.map((portfolioItem) => {
          const logoDescriptionId = `${id}-${portfolioItem.id}`;

          return (
            <Card
              imgSrc={portfolioItem.photo}
              imgPosition={portfolioItem.photoPosition}
              color={
                portfolioItem.color?.[theme.type] ?? portfolioItem.color?.light
              }
              key={portfolioItem.id}
            >
              <portfolioItem.logo
                height="1.75rem"
                aria-labelledby={logoDescriptionId}
              />

              <h3 id={logoDescriptionId} css={{ marginTop: "0.5rem" }}>
                {portfolioItem.title}
              </h3>

              <p>{portfolioItem.description}</p>

              {portfolioItem.technologies &&
                portfolioItem.technologies.length > 0 && (
                  <ChipGroup>
                    {portfolioItem.technologies.map((technology) => (
                      <Chip key={technology}>{technology}</Chip>
                    ))}
                  </ChipGroup>
                )}

              {(portfolioItem.website || portfolioItem.codeWebsite) && (
                <>
                  <h4 css={{ marginTop: "1em" }}>View the Project</h4>
                  <IconButtonGroup>
                    {portfolioItem.website && (
                      <IconButton
                        href={portfolioItem.website}
                        openWithNewTab={!portfolioItem.website.startsWith("#")}
                        title={`Open ${portfolioItem.title}`}
                        aria-label={`Open ${portfolioItem.title}`}
                        backgroundColor={theme.colors.backgroundSecondary}
                        textColor={theme.colors.textPrimary}
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          fixedWidth
                        />
                      </IconButton>
                    )}
                    {portfolioItem.codeWebsite && (
                      <IconButton
                        href={portfolioItem.codeWebsite}
                        openWithNewTab
                        title={`View Project Code for ${portfolioItem.title}`}
                        aria-label={`View Project Code for ${portfolioItem.title}`}
                        backgroundColor={theme.colors.backgroundSecondary}
                        textColor={theme.colors.textPrimary}
                      >
                        <FontAwesomeIcon icon={faCode} fixedWidth />
                      </IconButton>
                    )}
                  </IconButtonGroup>
                </>
              )}
            </Card>
          );
        })}
      </SimpleGrid>
    </Section>
  );
};

export default Portfolio;
