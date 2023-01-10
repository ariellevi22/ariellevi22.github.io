import Card from "../../Components/Card";
import { getPreferredFormatOption, pluralize } from "../../Utils";
import SimpleGrid from "../../Containers/SimpleGrid";
import Section from "../../Containers/Section";
import { useTheme } from "react-jss";
import { AppTheme } from "../../Theme";
import educationData from "./data";
import { separator } from "../../Global";

/**
 * A React container for "Education" section elements and data
 */
const Education = () => {
  const theme = useTheme<AppTheme>();

  return (
    <Section id="Education">
      <h2>Education</h2>

      <SimpleGrid numColumns={{ large: 2, medium: 2, small: 1 }}>
        {educationData.map((education) => {
          // Create a component for the education's major
          let majorInfo: JSX.Element | undefined;
          if (education.majors) {
            majorInfo = (
              <div>
                <h4>{pluralize("Major", education.majors.length)}</h4>
                <p>{education.majors.join(", ")}</p>
              </div>
            );
          }

          // Create a component for the education's minor
          let minorInfo: JSX.Element | undefined;
          if (education.minors) {
            minorInfo = (
              <div>
                <h4>{pluralize("Minor", education.minors.length)}</h4>
                <p>{education.minors.join(", ")}</p>
              </div>
            );
          }

          // Combine the timeline, major, and minor components as needed
          let educationInfo: JSX.Element | undefined;
          if (majorInfo && minorInfo) {
            // If both major info and minor info are given, create a two-column display for the major and minor
            educationInfo = (
              <SimpleGrid
                numColumns={{ large: 2, medium: 2, small: 1 }}
                rowGap={0}
              >
                {majorInfo}
                {minorInfo}
              </SimpleGrid>
            );
          } else if (majorInfo) {
            // If only a major is given, show it as the education data
            educationInfo = majorInfo;
          } else {
            // If a major and/or minor is not given, there is no education data to show
            educationInfo = undefined;
          }

          return (
            <Card
              logoSrc={getPreferredFormatOption(education.logo, theme.type)}
              logoAlt={`${education.school} Logo`}
              imgSrc={education.photo}
              key={education.id}
              color={getPreferredFormatOption(education.color, theme.type)}
            >
              <h3>{education.degree}</h3>

              <p>
                <b>{education.school}</b>
                {["", education.graduationDate].join(separator)}
              </p>

              {educationInfo}

              {education.additionalInfo?.map((info) => {
                return (
                  <div key={`${info.heading} ${info.text}`}>
                    <h4>{info.heading}</h4>
                    <p>{info.text}</p>
                  </div>
                );
              })}

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