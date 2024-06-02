import Card from "@/components/card";
import Section from "@/containers/section";
import SimpleGrid from "@/containers/simple-grid";
import { separator } from "@/global";
import { formatUnitForAmount } from "@/utils";
import educationData from "./data";
import Link from "next/link";

/** Education section */
const Education = () => {
  const id = "education";

  return (
    <Section id={id}>
      <h2>Education</h2>

      <SimpleGrid numColumns={{ lg: 1, md: 1, sm: 1 }}>
        {educationData.map((education) => {
          const logoDescriptionId = `${id}-${education.id}`;

          const FieldsOfStudy = () => {
            // Create a component for the education's major
            const MajorInfo = () =>
              education.majors && (
                <div>
                  <h4>
                    {formatUnitForAmount(
                      education.majors.length,
                      "Major",
                      "Majors"
                    )}
                  </h4>
                  <p>{education.majors.join(", ")}</p>
                </div>
              );

            // Create a component for the education's minor
            const MinorInfo = () =>
              education.minors && (
                <div>
                  <h4>
                    {formatUnitForAmount(
                      education.minors.length,
                      "Minor",
                      "Minors"
                    )}
                  </h4>
                  <p>{education.minors.join(", ")}</p>
                </div>
              );

            return (
              education.majors &&
              (education.minors ? (
                <SimpleGrid numColumns={{ lg: 2, md: 2, sm: 1 }} rowGap={0}>
                  <MajorInfo />
                  <MinorInfo />
                </SimpleGrid>
              ) : (
                <MajorInfo />
              ))
            );
          };

          return (
            <Card
              imgSrc={education.photo}
              imgPosition={education.photoPosition}
              key={education.id}
              color={education.color}
              enableHorizontal
            >
              <education.logo
                height="1.75rem"
                aria-labelledby={logoDescriptionId}
              />

              <h3>{education.degree}</h3>

              <p>
                <b id={logoDescriptionId}>
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {education.school}
                  </Link>
                </b>
                {["", education.graduationDate].join(separator)}
              </p>

              <FieldsOfStudy />

              {education.additionalInfo?.map((info) => (
                <div key={`${info.heading} ${info.text}`}>
                  <h4>{info.heading}</h4>
                  <p>{info.text}</p>
                </div>
              ))}

              <h4>What I Learned</h4>
              <p>{education.classes.join(", ")}</p>
            </Card>
          );
        })}
      </SimpleGrid>
    </Section>
  );
};

export default Education;
