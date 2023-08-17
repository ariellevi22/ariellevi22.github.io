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

  const priority = experienceData.length % 2 !== 0;

  return (
    <Section id="experience">
      <h2>Experience</h2>

      <SimpleGrid
        numColumns={{ large: 2, medium: 2, small: 1 }}
        priority={priority}
      >
        {experienceData.map((experience, index) => (
          <Card
            logoSrc={getPreferredFormatOption(experience.logo, theme.type)}
            logoAlt={`${experience.organization} Logo`}
            imgSrc={experience.photo}
            color={getPreferredFormatOption(experience.color, theme.type)}
            key={experience.id}
            enableHorizontal={priority && index === 0}
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
              <>
                <h4>Technologies</h4>

                <ChipGroup>
                  {experience.technologies.map((technology) => (
                    <Chip key={technology}>{technology}</Chip>
                  ))}
                </ChipGroup>
              </>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default Experience;
