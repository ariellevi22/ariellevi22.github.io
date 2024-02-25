import { useTheme } from "@emotion/react";
import { Card, Chip, ChipGroup, Link } from "../../Components";
import { Section, SimpleGrid } from "../../Containers";
import { separator } from "../../Global";
import experienceData from "./data";

/** "Experience" section */
const Experience = () => {
  const theme = useTheme();
  const id = "experience";

  return (
    <Section id={id}>
      <h2>Experience</h2>

      <SimpleGrid numColumns={{ sm: 1 }}>
        {experienceData.map((experience) => {
          const logoDescriptionId = `${id}-${experience.id}`;

          return (
            <Card
              imgSrc={experience.photo}
              imgPosition={experience.photoPosition}
              color={experience.color?.[theme.type] ?? experience.color?.light}
              key={experience.id}
              enableHorizontal
            >
              <experience.logo
                height="1.75rem"
                aria-labelledby={logoDescriptionId}
              />

              <h3 css={{ marginTop: "0.5rem" }}>{experience.title}</h3>

              <p>
                <b id={logoDescriptionId}>
                  <Link href={experience.href} openWithNewTab>
                    {experience.organization}
                  </Link>
                </b>
                {experience.organizationNote &&
                  ` (${experience.organizationNote})`}

                {[
                  "",
                  experience.location,
                  `${experience.startDate} to ${
                    experience.endDate ?? "Present"
                  }`,
                ].join(separator)}
              </p>

              {experience.responsibilities.length > 0 && (
                <ul>
                  {experience.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {experience.technologies &&
                experience.technologies.length > 0 && (
                  <ChipGroup>
                    {experience.technologies.map((technology) => (
                      <Chip key={technology}>{technology}</Chip>
                    ))}
                  </ChipGroup>
                )}
            </Card>
          );
        })}
      </SimpleGrid>
    </Section>
  );
};

export default Experience;
