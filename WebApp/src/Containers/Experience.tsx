import Section from "./Section";
import Link from "../Components/Link";
import SimpleGrid from "./SimpleGrid";
import Card from "../Components/Card";
import { useTheme } from "react-jss";
import { AppTheme } from "../theme";
import ChipGroup from "../Components/Chip/ChipGroup";
import Chip from "../Components/Chip/Chip";
import experienceData from "../Data/experienceData";

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
                priority={
                    experienceData.length % 2 !== 0 &&
                    !experienceData[0].isForegroundPhoto
                }
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
                            isDecorativeImg={!experience.isForegroundPhoto}
                            color={experience.color}
                            key={experience.id}
                        >
                            <h3>{experience.jobTitle}</h3>

                            <p>
                                <em>
                                    <Link
                                        href={experience.companyWebsite}
                                        openWithNewTab
                                    >
                                        {experience.companyName}
                                    </Link>
                                    {` \u2022 ${experience.location} \u2022 ${
                                        experience.startDate
                                    } to ${experience.endDate || "Present"}`}
                                </em>
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
                                    <h4>Technologies Used</h4>

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
