import Section from './Section';
import SimpleGrid from './SimpleGrid';
import Card from '../Components/Card';
import IconButton from '../Components/Button/IconButton';
import IconButtonGroup from '../Components/Button/IconButtonGroup';
import { useTheme } from 'react-jss';
import { AppTheme } from '../theme';
import Chip from '../Components/Chip/Chip';
import ChipGroup from '../Components/Chip/ChipGroup';
import portfolioData from '../Data/portfolioData';

/**
 * A React container for "Portfolio" section elements and data
 */
const Portfolio = () => {
    const theme = useTheme<AppTheme>();

    return (
        <Section id="Portfolio">
            <h1>Portfolio</h1>

            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1}>
                {portfolioData.map(portfolioItem => {
                    return (
                        <Card logoSrc={(portfolioItem.logoAlt && theme.type === "dark") ? portfolioItem.logoAlt : portfolioItem.logo}
                            imgSrc={portfolioItem.photo} color={portfolioItem.color} key={portfolioItem.id}
                        >
                            <h2>{portfolioItem.title}</h2>

                            <p>{portfolioItem.description}</p>

                            <ul>
                                {portfolioItem.responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
                            </ul>

                            {(portfolioItem.technologies && (portfolioItem.technologies.length > 0)) &&
                                <>
                                    <h3>Technologies Used</h3>
                                    <ChipGroup style={{ marginBottom: "1em" }}>
                                        {portfolioItem.technologies.map(skill => <Chip key={skill}>{skill}</Chip>)}
                                    </ChipGroup>
                                </>
                            }

                            {(portfolioItem.website || portfolioItem.codeWebsite) &&
                                <>
                                    <h3>View the Project</h3>
                                    <IconButtonGroup>
                                        <IconButton iconName="external-link-alt" href={portfolioItem.website} title="Open Project"
                                            backgroundColor={theme.colors.backgroundSecondary} textColor={theme.colors.textPrimary}
                                        />
                                        {portfolioItem.codeWebsite &&
                                            <IconButton iconName="code" href={portfolioItem.codeWebsite} title="View Project Code"
                                                backgroundColor={theme.colors.backgroundSecondary} textColor={theme.colors.textPrimary}
                                            />
                                        }
                                    </IconButtonGroup>
                                </>
                            }
                        </Card>
                    );
                })}
            </SimpleGrid>
        </Section>
    );
}

export default Portfolio;