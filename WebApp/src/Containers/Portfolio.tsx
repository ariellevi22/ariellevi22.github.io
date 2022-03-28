import Section from "./Section";
import SimpleGrid from "./SimpleGrid";
import Card from "../Components/Card";
import IconButton from "../Components/Button/IconButton";
import IconButtonGroup from "../Components/Button/IconButtonGroup";
import { useTheme } from "react-jss";
import { AppTheme } from "../theme";
import Chip from "../Components/Chip/Chip";
import ChipGroup from "../Components/Chip/ChipGroup";
import portfolioData from "../Data/portfolioData";
import {
    faArrowUpRightFromSquare,
    faCode,
} from "@fortawesome/free-solid-svg-icons";

/**
 * A React container for "Portfolio" section elements and data
 */
const Portfolio = () => {
    const theme = useTheme<AppTheme>();

    return (
        <Section id="Portfolio">
            <h2>Portfolio</h2>

            <SimpleGrid numColumns={{ large: 2, medium: 2, small: 1 }}>
                {portfolioData.map((portfolioItem) => {
                    return (
                        <Card
                            logoSrc={
                                portfolioItem.logoAlt && theme.type === "dark"
                                    ? portfolioItem.logoAlt
                                    : portfolioItem.logo
                            }
                            logoAlt={`${portfolioItem.title} Logo`}
                            imgSrc={portfolioItem.photo}
                            color={portfolioItem.color}
                            key={portfolioItem.id}
                        >
                            <h3>{portfolioItem.title}</h3>

                            <p>{portfolioItem.description}</p>

                            <ul>
                                {portfolioItem.responsibilities.map(
                                    (responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    )
                                )}
                            </ul>

                            {portfolioItem.technologies &&
                                portfolioItem.technologies.length > 0 && (
                                    <>
                                        <h4>Technologies Used</h4>
                                        <ChipGroup
                                            style={{
                                                marginBottom:
                                                    (portfolioItem.website ||
                                                        portfolioItem.codeWebsite) &&
                                                    "1em",
                                            }}
                                        >
                                            {portfolioItem.technologies.map(
                                                (skill) => (
                                                    <Chip key={skill}>
                                                        {skill}
                                                    </Chip>
                                                )
                                            )}
                                        </ChipGroup>
                                    </>
                                )}

                            {(portfolioItem.website ||
                                portfolioItem.codeWebsite) && (
                                <>
                                    <h4>View the Project</h4>
                                    <IconButtonGroup>
                                        {portfolioItem.website && (
                                            <IconButton
                                                icon={faArrowUpRightFromSquare}
                                                href={portfolioItem.website}
                                                openWithNewTab={
                                                    !portfolioItem.website.startsWith(
                                                        "#"
                                                    )
                                                }
                                                title={`Open ${portfolioItem.title}`}
                                                aria-label={`Open ${portfolioItem.title}`}
                                                backgroundColor={
                                                    theme.colors
                                                        .backgroundSecondary
                                                }
                                                textColor={
                                                    theme.colors.textPrimary
                                                }
                                            />
                                        )}
                                        {portfolioItem.codeWebsite && (
                                            <IconButton
                                                icon={faCode}
                                                href={portfolioItem.codeWebsite}
                                                title={`View Project Code for ${portfolioItem.title}`}
                                                aria-label={`View Project Code for ${portfolioItem.title}`}
                                                backgroundColor={
                                                    theme.colors
                                                        .backgroundSecondary
                                                }
                                                textColor={
                                                    theme.colors.textPrimary
                                                }
                                            />
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
