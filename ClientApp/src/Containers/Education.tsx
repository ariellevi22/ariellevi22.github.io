import Card from '../Components/Card';
import { pluralize } from '../utils';
import SimpleGrid from './SimpleGrid';
import Section from './Section';
import { noSpacing } from '../globals';
import { useTheme } from 'react-jss';
import { AppTheme } from '../theme';
import educationData from '../Data/educationData';

/**
 * A React container for "Education" section elements and data
 */
const Education = () => {
    const theme = useTheme<AppTheme>();

    return (
        <Section id="Education">
            <h1>Education</h1>

            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1}>
                {educationData.map(education => {
                    // Create a component for the education's major
                    let majorInfo;
                    if (education.majors) {
                        majorInfo = (
                            <div>
                                <h3>{pluralize("Major", education.majors.length)}</h3>
                                <p>{education.majors.join(", ")}</p>
                            </div>
                        );
                    }

                    // Create a component for the education's minor
                    let minorInfo;
                    if (education.minors) {
                        minorInfo = (
                            <div>
                                <h3>{pluralize("Minor", education.minors.length)}</h3>
                                <p>{education.minors.join(", ")}</p>
                            </div>
                        );
                    }

                    // Combine the timeline, major, and minor components as needed
                    let educationInfo;
                    if (majorInfo && minorInfo) {
                        // If both major info and minor info are given, create a two-column display for the major and minor
                        educationInfo = (
                            <SimpleGrid numColumnsLarge={2} numColumnsMedium={2} numColumnsSmall={1} rowGap={0}>
                                {majorInfo}
                                {minorInfo}
                            </SimpleGrid>
                        );
                    } else {
                        // If a major and/or minor is not given, there is no education data to show
                        educationInfo = undefined;
                    }

                    return (
                        <Card logoSrc={(education.logoAlt && theme.type === "dark") ? education.logoAlt : education.logo}
                            imgSrc={education.photo} key={education.id} color={education.color}
                        >
                            <h2>{education.school}</h2>

                            <p>
                                <em>
                                    {[
                                        education.location,
                                        education.degree,
                                        `${education.startDate} to ${education.endDate ? education.endDate : "Present"}`
                                    ].join(" \u2022 ")}
                                </em>
                            </p>

                            {educationInfo}

                            {education.additionalInfo?.map((info, index) => {
                                return (
                                    <div key={index}>
                                        <h3>{info.heading}</h3>
                                        <p>{info.text}</p>
                                    </div>
                                );
                            })}

                            <h3>What I Learned</h3>
                            <p className={noSpacing}>{education.classes.join(", ")}</p>
                        </Card>
                    );
                })}
            </SimpleGrid>
        </Section>
    );
}

export default Education;