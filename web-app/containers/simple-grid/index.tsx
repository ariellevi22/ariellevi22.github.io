import { Property as CSSProperty } from "csstype";
import { CSSProperties } from "react";
import styles from "./simple-grid.module.css";

const defaultGap = "2rem";

/** A container for grid items */
const SimpleGrid = ({
    gap = defaultGap,
    rowGap,
    columnGap,
    numColumns,
    priority,
    children,
}: SimpleGridProps) => {
    const gridClassNames = [styles.grid, priority ? styles.priority : undefined]
        .filter(Boolean)
        .join(" ");

    const gridStyles: CSSProperties = {
        "--num-columns-sm": numColumns?.sm,
        "--num-columns-md": numColumns?.md,
        "--num-columns-lg": numColumns?.lg,

        "--gap":
            rowGap !== undefined || columnGap !== undefined
                ? `${rowGap ?? gap} ${columnGap ?? gap}`
                : gap,
    } as CSSProperties;

    return (
        <div className={gridClassNames} style={gridStyles}>
            {children}
        </div>
    );
};

/** Props for the simple grid component */
type SimpleGridProps = {
    /** Contents for the grid */
    children: React.ReactNode;

    /** The number of columns the grid should show for differently sized screens */
    numColumns?: Partial<ColumnSettings>;

    /** Whether the grid should show the first item larger than all others */
    priority?: boolean;

    /** The gap between rows and columns in the grid */
    gap?: CSSProperty.Gap;

    /** The gap between rows in the grid */
    rowGap?: CSSProperty.RowGap;

    /** The gap between columns in the grid */
    columnGap?: CSSProperty.ColumnGap;
};

/** Settings for the grid's columns' sizes */
type ColumnSettings = {
    lg: number;
    md: number;
    sm: number;
};

export default SimpleGrid;
