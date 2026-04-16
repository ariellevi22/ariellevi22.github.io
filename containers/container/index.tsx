import { clsx } from "@/utils/css";
import { createElement } from "react";
import styles from "./container.module.css";

/** A container of page content */
const Container = <TElement extends keyof React.JSX.IntrinsicElements>({
    as,
    children,
    className,
    ...props
}: ContainerProps<TElement>) => {
    const containerClassNames = clsx(styles.container, className);

    return createElement(
        as || "div",
        { className: containerClassNames, ...props },
        children
    );
};

/** Props for the {@linkcode Container} component */
type ContainerProps<TElement extends keyof React.JSX.IntrinsicElements> =
    React.JSX.IntrinsicElements[TElement] & {
        /**
         * The HTML element as which to render the container
         * @example "section"
         * @default "div"
         */
        as?: TElement;
    };

export default Container;
