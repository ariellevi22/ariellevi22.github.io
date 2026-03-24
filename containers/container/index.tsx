import { clsx } from "@/utils/css";
import { createElement } from "react";
import styles from "./container.module.css";

/** A container of page content */
const Container = ({
    component = "div",
    children,
    className,
    ...props
}: ContainerProps) => {
    const containerClassNames = clsx(styles.container, className);

    return createElement(
        component,
        { className: containerClassNames, ...props },
        children
    );
};

/** Props for the container component */
type ContainerProps = React.HTMLAttributes<HTMLElement> & {
    component?: keyof React.JSX.IntrinsicElements;
};

export default Container;
