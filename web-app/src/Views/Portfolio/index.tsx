import { useTheme } from "@emotion/react";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Chip,
  ChipGroup,
  IconButton,
  IconButtonGroup,
} from "../../Components";
import { Section, SimpleGrid } from "../../Containers";
import { getPreferredFormatOption } from "../../Utils";
import portfolioData from "./data";

/**
 * "Portfolio" section
 */
const Portfolio = () => {
  const theme = useTheme();

  return (
    <Section id="portfolio">
      <h2>Portfolio</h2>

      <SimpleGrid numColumns={{ large: 2, medium: 2, small: 1 }}>
        {portfolioData.map((portfolioItem) => (
          <Card
            logoSrc={getPreferredFormatOption(portfolioItem.logo, theme.type)}
            logoAlt={`${portfolioItem.title} Logo`}
            imgSrc={portfolioItem.photo}
            imgPosition={portfolioItem.photoPosition}
            color={getPreferredFormatOption(portfolioItem.color, theme.type)}
            key={portfolioItem.id}
          >
            <h3>{portfolioItem.title}</h3>

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
                      icon={faArrowUpRightFromSquare}
                      href={portfolioItem.website}
                      openWithNewTab={!portfolioItem.website.startsWith("#")}
                      title={`Open ${portfolioItem.title}`}
                      aria-label={`Open ${portfolioItem.title}`}
                      backgroundColor={theme.colors.backgroundSecondary}
                      textColor={theme.colors.textPrimary}
                    />
                  )}
                  {portfolioItem.codeWebsite && (
                    <IconButton
                      icon={faCode}
                      href={portfolioItem.codeWebsite}
                      openWithNewTab
                      title={`View Project Code for ${portfolioItem.title}`}
                      aria-label={`View Project Code for ${portfolioItem.title}`}
                      backgroundColor={theme.colors.backgroundSecondary}
                      textColor={theme.colors.textPrimary}
                    />
                  )}
                </IconButtonGroup>
              </>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default Portfolio;
