import { useTheme } from "@emotion/react";
import { Card } from "../../Components";
import { Section, SimpleGrid } from "../../Containers";
import { separator } from "../../Global";
import { pluralize } from "../../Utils";
import educationData from "./data";

/** "Education" section */
const Education = () => {
  const theme = useTheme();
  const id = "education";

  return (
    <Section id={id}>
      <h2>Education</h2>

      <SimpleGrid numColumns={{ lg: 2, md: 2, sm: 1 }}>
        {educationData.map((education) => {
          const logoDescriptionId = `${id}-${education.id}`;

          const FieldsOfStudy = () => {
            // Create a component for the education's major
            const MajorInfo = () =>
              education.majors && (
                <div>
                  <h4>{pluralize("Major", education.majors.length)}</h4>
                  <p>{education.majors.join(", ")}</p>
                </div>
              );

            // Create a component for the education's minor
            const MinorInfo = () =>
              education.minors && (
                <div>
                  <h4>{pluralize("Minor", education.minors.length)}</h4>
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
              color={education.color?.[theme.type] ?? education.color?.light}
            >
              <education.logo
                height="1.75rem"
                aria-labelledby={logoDescriptionId}
              />

              <h3 css={{ marginTop: "0.5rem" }}>{education.degree}</h3>

              <p>
                <b id={logoDescriptionId}>{education.school}</b>
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
