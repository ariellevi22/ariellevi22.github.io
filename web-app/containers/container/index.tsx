import { ReactHTML, createElement } from "react";
import styles from "./container.module.css";

/** A container of page content */
const Container = ({
  component = "div",
  children,
  className,
  ...props
}: ContainerProps) => {
  const containerClassNames = [styles.container, className].join(" ");

  return createElement(
    component,
    { className: containerClassNames, ...props },
    children
  );
};

/** Props for the container component */
type ContainerProps = React.HTMLAttributes<HTMLElement> & {
  component?: keyof ReactHTML;
};

export default Container;
