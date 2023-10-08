import { useTheme } from "@emotion/react";
import { Card, Chip, ChipGroup, Link } from "../../Components";
import { Section, SimpleGrid } from "../../Containers";
import { separator } from "../../Global";
import { getPreferredFormatOption } from "../../Utils";
import experienceData from "./data";

/**
 * "Experience" section
 */
const Experience = () => {
  const theme = useTheme();

  return (
    <Section id="experience">
      <h2>Experience</h2>

      <SimpleGrid numColumns={{ small: 1 }}>
        {experienceData.map((experience) => (
          <Card
            logoSrc={getPreferredFormatOption(experience.logo, theme.type)}
            logoAlt={`${experience.organization} Logo`}
            imgSrc={experience.photo}
            imgPosition={experience.photoPosition}
            color={getPreferredFormatOption(experience.color, theme.type)}
            key={experience.id}
            enableHorizontal
          >
            <h3>{experience.title}</h3>

            <p>
              <b>
                <Link href={experience.href} openWithNewTab>
                  {experience.organization}
                </Link>
              </b>
              {experience.organizationNote &&
                ` (${experience.organizationNote})`}

              {[
                "",
                experience.location,
                `${experience.startDate} to ${experience.endDate ?? "Present"}`,
              ].join(separator)}
            </p>

            {experience.responsibilities.length > 0 && (
              <ul>
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {experience.technologies && experience.technologies.length > 0 && (
              <ChipGroup>
                {experience.technologies.map((technology) => (
                  <Chip key={technology}>{technology}</Chip>
                ))}
              </ChipGroup>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default Experience;
