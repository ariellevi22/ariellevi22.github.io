import Section from "./Section";
import Link from "../Components/Link";
import SimpleGrid from "./SimpleGrid";
import Card from "../Components/Card";
import { useTheme } from "react-jss";
import { AppTheme } from "../theme";
import ChipGroup from "../Components/Chip/ChipGroup";
import Chip from "../Components/Chip/Chip";
import experienceData from "../Data/experienceData";
import { separator } from "../globals";

/**
 * A React container for "Experience" section elements and data
 */
const Experience = () => {
    const theme = useTheme<AppTheme>();

    return (
        <Section id="Experience">
            <h2>Experience</h2>

            <SimpleGrid
                numColumns={{ large: 2, medium: 2, small: 1 }}
                priority={experienceData.length % 2 !== 0}
            >
                {experienceData.map((experience) => {
                    return (
                        <Card
                            logoSrc={
                                experience.logoAlt && theme.type === "dark"
                                    ? experience.logoAlt
                                    : experience.logo
                            }
                            logoAlt={`${experience.companyName} Logo`}
                            imgSrc={experience.photo}
                            color={
                                experience.colorAlt && theme.type === "dark"
                                    ? experience.colorAlt
                                    : experience.color
                            }
                            key={experience.id}
                        >
                            <h3>{experience.title}</h3>

                            <p>
                                <b>
                                    <Link
                                        href={experience.companyWebsite}
                                        openWithNewTab
                                    >
                                        {experience.companyName}
                                    </Link>
                                </b>
                                {[
                                    "",
                                    experience.location,
                                    `${experience.startDate} to ${
                                        experience.endDate || "Present"
                                    }`,
                                ].join(separator)}
                            </p>

                            {experience.responsibilities.length > 0 && (
                                <ul>
                                    {experience.responsibilities.map(
                                        (item, index) => {
                                            return <li key={index}>{item}</li>;
                                        }
                                    )}
                                </ul>
                            )}

                            {experience.technologies && (
                                <>
                                    <h4>Technologies</h4>

                                    <ChipGroup>
                                        {experience.technologies.map(
                                            (technology) => (
                                                <Chip key={technology}>
                                                    {technology}
                                                </Chip>
                                            )
                                        )}
                                    </ChipGroup>
                                </>
                            )}
                        </Card>
                    );
                })}
            </SimpleGrid>
        </Section>
    );
};

export default Experience;
