import { screenSizes } from "../../Global";
import { ChildrenProps } from "../../Types";

/** A container for app content */
const Container = ({ children }: ContainerProps) => (
  <div
    css={{
      width: "85vw",
      maxWidth: screenSizes.lg - 150,
      margin: "auto",
      "& > :not(div):last-child": {
        marginBottom: 0,
      },
    }}
  >
    {children}
  </div>
);

/** Props for the container component */
type ContainerProps = ChildrenProps;

export default Container;
