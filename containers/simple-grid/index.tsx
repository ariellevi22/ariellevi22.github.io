import { clsx } from "@/utils/css";
import { CSSProperties } from "react";
import styles from "./simple-grid.module.css";

/** A container for grid items */
const SimpleGrid = ({
    gap = "2rem",
    rowGap,
    columnGap,
    numColumns,
    priority,
    children,
}: SimpleGridProps) => (
    <div
        className={clsx(styles.grid, priority ? styles.priority : undefined)}
        style={{
            "--num-columns-sm": numColumns?.sm,
            "--num-columns-md": numColumns?.md,
            "--num-columns-lg": numColumns?.lg,

            "--gap":
                rowGap !== undefined || columnGap !== undefined
                    ? `${rowGap ?? gap} ${columnGap ?? gap}`
                    : gap,
        }}
    >
        {children}
    </div>
);

/** Props for the {@linkcode SimpleGrid} component */
type SimpleGridProps = {
    /** Contents for the grid */
    children: React.ReactNode;

    /** The number of columns the grid should show for differently sized screens */
    numColumns?: Partial<ColumnSettings>;

    /** Whether the grid should show the first item larger than all others */
    priority?: boolean;

    /** The gap between rows and columns in the grid */
    gap?: CSSProperties["gap"];

    /** The gap between rows in the grid */
    rowGap?: CSSProperties["rowGap"];

    /** The gap between columns in the grid */
    columnGap?: CSSProperties["columnGap"];
};

/** Settings for the grid's columns' sizes */
type ColumnSettings = {
    /** Setting for the grid columns on large screens */
    lg: number;

    /** Setting for the grid columns on medium screens */
    md: number;

    /** Setting for the grid columns on small screens */
    sm: number;
};

export default SimpleGrid;
