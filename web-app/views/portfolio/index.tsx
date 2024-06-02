import Button from "@/components/button";
import ButtonGroup from "@/components/button-group";
import Card from "@/components/card";
import Chip from "@/components/chip";
import ChipGroup from "@/components/chip-group";
import Section from "@/containers/section";
import SimpleGrid from "@/containers/simple-grid";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import portfolioData from "./data";

/** Portfolio section */
const Portfolio = () => {
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
              color={portfolioItem.color}
              key={portfolioItem.id}
            >
              <portfolioItem.logo
                height="1.75rem"
                aria-labelledby={logoDescriptionId}
              />

              <h3 id={logoDescriptionId}>{portfolioItem.title}</h3>

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
                  <h4 style={{ marginTop: "1rem" }}>View the Project</h4>
                  <ButtonGroup>
                    {portfolioItem.website && (
                      <Button
                        icon
                        href={portfolioItem.website}
                        openWithNewTab={!portfolioItem.website.startsWith("#")}
                        title={`Open ${portfolioItem.title}`}
                        aria-label={`Open ${portfolioItem.title}`}
                        backgroundColor="var(--background-secondary)"
                        textColor="var(--text-primary)"
                      >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </Button>
                    )}
                    {portfolioItem.codeWebsite && (
                      <Button
                        icon
                        href={portfolioItem.codeWebsite}
                        openWithNewTab
                        title={`View Project Code for ${portfolioItem.title}`}
                        aria-label={`View Project Code for ${portfolioItem.title}`}
                        backgroundColor="var(--background-secondary)"
                        textColor="var(--text-primary)"
                      >
                        <FontAwesomeIcon icon={faCode} />
                      </Button>
                    )}
                  </ButtonGroup>
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
