import React from 'react';

// Personal website assets
import personalWebsitePhoto from '../Assets/PersonalWebsite/Personal_Website_Photo.png';
import personalWebsiteLogo from '../Assets/PersonalWebsite/Personal_Website_Logo.png';

// ToGather assets
import toGatherLogo from '../Assets/ToGather/ToGather_Logo_Light.png';
import toGatherPhoto from '../Assets/ToGather/ToGather_Photo.png';

import Section from './Section';
import SimpleGrid from './SimpleGrid';
import Card from '../Components/Card';
import IconButton from '../Components/Button/IconButton';
import IconButtonGroup from '../Components/Button/IconButtonGroup';

/**
 * A React container for "Portfolio" section elements and data
 */
const Portfolio = () => {
    return (
        <Section id="Portfolio">
            <h1>Portfolio</h1>

            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1}>
                {portfolioData.map(project => {
                    return (
                        <Card logoSrc={project.logo} imgSrc={project.photo} color={project.color} key={project.id}>
                            <h2>{project.title}</h2>

                            <p>{project.description}</p>

                            {project.technologiesUsed && project.technologiesUsed.length > 0 ?
                                <React.Fragment>
                                    <h3>Technologies Used</h3>
                                    <p>{project.technologiesUsed.join(", ")}</p>
                                </React.Fragment> : undefined
                            }

                            <h3>View the Project</h3>
                            <IconButtonGroup>
                                <IconButton iconName="external-link-alt" href={project.website} title="Open Project" variant="secondary"/>
                                {project.codeWebsite ? <IconButton iconName="code" href={project.codeWebsite} title="View Project Code" variant="secondary"/> : undefined}
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
    technologiesUsed?: string[],
    website?: string,
    codeWebsite?: string,
    logo: string,
    photo?: string,
    color?: string,
}

const portfolioData: PortfolioData[] = [
    // Personal website
    {
        id: 0,
        title: "Personal Website",
        description: "To combine my passions for code, writing, and design, I created this personal portfolio website that showcases my experiences, accomplishments, and interests.",
        technologiesUsed: ["TypeScript", "React.js", "HTML", "CSS"],
        website: "https://alevi22.github.io",
        codeWebsite: "https://github.com/alevi22/alevi22.github.io",
        logo: personalWebsiteLogo,
        photo: personalWebsitePhoto,
    },

    // ToGather
    {
        id: 1,
        title: "ToGather Front-End",
        description: "ToGather is an application for safely supporting connections between friends and family members during the COVID-19 pandemic.",
        technologiesUsed: ["TypeScript", "React.js", "HTML", "CSS"],
        website: "https://www.togatherapp.org",
        logo: toGatherLogo,
        photo: toGatherPhoto,
        color: "#439A9C",
    },
];

export default Portfolio;