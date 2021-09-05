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
                {portfolioData.map(portfolioItem => {
                    return (
                        <Card logoSrc={(portfolioItem.logoAlt && theme.type === "dark") ? portfolioItem.logoAlt : portfolioItem.logo}
                            imgSrc={portfolioItem.photo} color={portfolioItem.color} key={portfolioItem.id}
                        >
                            <h2>{portfolioItem.title}</h2>

                            <p>{portfolioItem.description}</p>

                            <ul>
                                {portfolioItem.responsibilities.map(responsibility => <li>{responsibility}</li>)}
                            </ul>

                            {portfolioItem.technologies && (portfolioItem.technologies.length > 0) ?
                                <React.Fragment>
                                    <h3>Technologies Used</h3>
                                    <ChipGroup style={{marginBottom: "1em"}}>
                                        {portfolioItem.technologies.map(skill => <Chip key={skill}>{skill}</Chip>)}
                                    </ChipGroup>
                                </React.Fragment> : undefined
                            }

                            {portfolioItem.website || portfolioItem.codeWebsite ?
                                <React.Fragment>
                                    <h3>View the Project</h3>
                                    <IconButtonGroup>
                                        <IconButton iconName="external-link-alt" href={portfolioItem.website} title="Open Project"
                                            backgroundColor={theme.colors.backgroundSecondary} textColor={theme.colors.textPrimary}
                                        />
                                        {portfolioItem.codeWebsite ?
                                            <IconButton iconName="code" href={portfolioItem.codeWebsite} title="View Project Code"
                                                backgroundColor={theme.colors.backgroundSecondary} textColor={theme.colors.textPrimary}
                                            /> : undefined
                                        }
                                    </IconButtonGroup>
                                </React.Fragment> : undefined
                            }
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
    responsibilities: string[],
    technologies?: string[],
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
        responsibilities: [],
        technologies: ["TypeScript", "React.js", "HTML", "CSS"],
        website: "https://alevi22.github.io",
        codeWebsite: "https://github.com/alevi22/alevi22.github.io",
        logo: personalWebsiteLogo,
        logoAlt: personalWebsiteLogoAlt,
        photo: personalWebsitePhoto,
    },

    // ToGather
    {
        id: 1,
        title: "ToGather Web Application",
        description: "ToGather is an application for safely supporting connections between friends and family members during the COVID-19 pandemic.",
        responsibilities: [
            "Designed and developed a web application aimed to simplify safe event planning for friends and families during the COVID-19 pandemic",
            "Collaborated with front-end, back-end, and database developers in an agile team environment"
        ],
        technologies: ["TypeScript", "React.js", "HTML", "CSS"],
        website: "https://www.togatherapp.org",
        logo: toGatherLogo,
        logoAlt: toGatherLogoAlt,
        photo: toGatherPhoto,
        color: "#439A9C",
    },
];

export default Portfolio;