import Section from './Section';
import Link from '../Components/Link';
import SimpleGrid from './SimpleGrid';
import Card from '../Components/Card';
import { useTheme } from 'react-jss';
import { AppTheme } from '../theme';
import ChipGroup from '../Components/Chip/ChipGroup';
import Chip from '../Components/Chip/Chip';
import experienceData from '../Data/experienceData';

/**
 * A React container for "Experience" section elements and data
 */
const Experience = () => {
    const theme = useTheme<AppTheme>();

    return (
        <Section id="Experience">
            <h1>Experience</h1>

            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1}>
                {experienceData.map(experience => {
                    return (
                        <Card logoSrc={(experience.logoAlt && theme.type === "dark") ? experience.logoAlt : experience.logo}
                            imgSrc={experience.photo} color={experience.color} key={experience.id}
                        >
                            <h2>{experience.jobTitle}</h2>

                            <p>
                                <em>
                                    <Link href={experience.companyWebsite} openWithNewTab>
                                        {experience.companyName}
                                    </Link> &bull; {experience.location} &bull; {`${experience.startDate} to ${experience.endDate ? experience.endDate : "Present"}`}
                                </em>
                            </p>

                            <p>{experience.companyDescription}</p>

                            <ul>
                                {experience.responsibilities.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>

                            {experience.technologies &&
                                <>
                                    <h3>Technologies Used</h3>

                                    <ChipGroup>
                                        {experience.technologies.map(technology => <Chip key={technology}>{technology}</Chip>)}
                                    </ChipGroup>
                                </>
                            }
                        </Card>
                    )
                })}
            </SimpleGrid>
        </Section>
    );
}

export default Experience;