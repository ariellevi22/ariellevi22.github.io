import { clsx } from "@/utils/css";
import React, { createElement } from "react";
import styles from "./container.module.css";

/** A container of page content */
const Container = <TElement extends keyof React.JSX.IntrinsicElements = "div">({
    as,
    children,
    className,
    ...props
}: ContainerProps<TElement>) => {
    const containerClassNames = clsx(styles.container, className);

    return createElement(
        as || "div",
        { ...props, className: containerClassNames },
        children
    );
};

/** Props for the {@linkcode Container} component */
type ContainerProps<
    TElement extends keyof React.JSX.IntrinsicElements = "div",
> = Omit<React.ComponentPropsWithRef<TElement>, "as"> & {
    /**
     * The HTML element as which to render the container
     * @example "section"
     * @default "div"
     */
    as?: TElement;
};

export default Container;
