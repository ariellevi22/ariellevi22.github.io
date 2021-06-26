// Personal website assets
import personalWebsitePhoto from '../Assets/PersonalWebsite/Personal_Website_Photo.png';
import personalWebsiteLogo from '../Assets/PersonalWebsite/Personal_Website_Logo.png';
import personalWebsiteLogoAlt from '../Assets/PersonalWebsite/Personal_Website_Logo_Alt.png';

// ToGather assets
import toGatherLogo from '../Assets/ToGather/ToGather_Logo.png';
import toGatherLogoAlt from '../Assets/ToGather/ToGather_Logo_Alt.png';
import toGatherPhoto from '../Assets/ToGather/ToGather_Photo.png';

import Section from './Section';
import SimpleGrid from './SimpleGrid';
import Card from '../Components/Card';
import IconButton from '../Components/Button/IconButton';
import IconButtonGroup from '../Components/Button/IconButtonGroup';
import { useTheme } from 'react-jss';
import { AppTheme } from '../theme';
import Chip from '../Components/Chip/Chip';
import ChipGroup from '../Components/Chip/ChipGroup';
import React from 'react';

/**
 * A React container for "Portfolio" section elements and data
 */
const Portfolio = () => {
    const theme = useTheme<AppTheme>();

    return (
        <Section id="Portfolio">
            <h1>Portfolio</h1>

            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1}>
                {portfolioData.map(project => {
                    return (
                        <Card logoSrc={(project.logoAlt && theme.type === "dark") ? project.logoAlt : project.logo}
                            imgSrc={project.photo} color={project.color} key={project.id}
                        >
                            <h2>{project.title}</h2>

                            <p>{project.description}</p>

                            {project.skills && (project.skills.length > 0) ?
                                <React.Fragment>
                                    <h3>Skills</h3>
                                    <ChipGroup style={{marginBottom: "1em"}}>
                                        {project.skills.map(technologyUsed => <Chip key={technologyUsed}>{technologyUsed}</Chip>)}
                                    </ChipGroup>
                                </React.Fragment> : undefined
                            }

                            <h3>View the Project</h3>
                            <IconButtonGroup>
                                <IconButton iconName="external-link-alt" href={project.website} title="Open Project"
                                    backgroundColor={theme.colors.backgroundSecondary} textColor={theme.colors.textPrimary}
                                />
                                {project.codeWebsite ?
                                    <IconButton iconName="code" href={project.codeWebsite} title="View Project Code"
                                        backgroundColor={theme.colors.backgroundSecondary} textColor={theme.colors.textPrimary}
                                    /> : undefined
                                }
                            </IconButtonGroup>
                        </Card>
                    );
                })}
            </SimpleGrid>
        </Section>
    );
}

type PortfolioData = {
    id: number,
    title: string,
    description: string,
    skills?: string[],
    website?: string,
    codeWebsite?: string,
    logo: string,
    logoAlt?: string,
    photo?: string,
    color?: string,
}

const portfolioData: PortfolioData[] = [
    // Personal website
    {
        id: 0,
        title: "Personal Website",
        description: "To combine my passions for code, writing, and design, I created this personal portfolio website that showcases my experiences, accomplishments, and interests.",
        skills: ["TypeScript", "React.js", "HTML", "CSS"],
        website: "https://alevi22.github.io",
        codeWebsite: "https://github.com/alevi22/alevi22.github.io",
        logo: personalWebsiteLogo,
        logoAlt: personalWebsiteLogoAlt,
        photo: personalWebsitePhoto,
    },

    // ToGather
    {
        id: 1,
        title: "ToGather Front-End",
        description: "ToGather is an application for safely supporting connections between friends and family members during the COVID-19 pandemic.",
        skills: ["TypeScript", "React.js", "HTML", "CSS"],
        website: "https://www.togatherapp.org",
        logo: toGatherLogo,
        logoAlt: toGatherLogoAlt,
        photo: toGatherPhoto,
        color: "#439A9C",
    },
];

export default Portfolio;