import Card from "@/components/card";
import Chip from "@/components/chip";
import ChipGroup from "@/components/chip-group";
import Section from "@/containers/section";
import SimpleGrid from "@/containers/simple-grid";
import { separator } from "@/global";
import Link from "next/link";
import experienceData from "./data";

/** Experience section */
const Experience = () => {
  const id = "experience";

  return (
    <Section id={id}>
      <h2>Experience</h2>

      <SimpleGrid>
        {experienceData.map((experience) => {
          const logoDescriptionId = `${id}-${experience.id}`;

          return (
            <Card
              imgSrc={experience.photo}
              imgPosition={experience.photoPosition}
              colorLight={experience.color?.light}
              colorDark={experience.color?.dark}
              key={experience.id}
              enableHorizontal
            >
              <experience.logo
                height="1.75rem"
                aria-labelledby={logoDescriptionId}
              />

              <h3>{experience.title}</h3>

              <p>
                <b id={logoDescriptionId}>
                  <Link
                    href={experience.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.organization}
                  </Link>
                </b>
                {experience.organizationNote &&
                  ` (${experience.organizationNote})`}

                {[
                  "",
                  experience.location,
                  `${experience.startDate} to ${
                    experience.endDate ?? "present"
                  }`,
                ].join(separator)}
              </p>

              {experience.responsibilities &&
                experience.responsibilities.length > 0 && (
                  <ul>
                    {experience.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
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
