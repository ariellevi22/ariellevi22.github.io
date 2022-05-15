import { ReactChildren } from "../models";
import { createUseStyles } from "react-jss";
import * as CSS from "csstype";
import { screenSizes } from "../globals";

/**
 * A React component representing a container for grid items
 */
const SimpleGrid = (props: SimpleGridProps) => {
    const styles = useStyles(props);

    return <div className={styles.grid}>{props.children}</div>;
};

/**
 * Based on the properties for the number of columns, gets the correct number of columns
 * to display in the grid for the given screen size
 *
 * @param size the size for which to determine the number of columns
 * @param numColumns the number of columns for differently sized screens
 * @returns the number of columns to display in the grid for the given screen size
 */
const getNumColumnsForSize = (
    size: keyof ColumnSettings,
    numColumns?: ColumnSettings
) => {
    let numColumnsSmall = 1;
    let numColumnsMedium = 1;
    let numColumnsLarge = 1;

    // If the number of columns for small screens is specified, set it
    if (numColumns && numColumns.small) {
        numColumnsSmall = numColumns.small;
    }

    if (numColumns && numColumns.medium) {
        // If the number of columns for medium screens is specified, set it
        numColumnsMedium = numColumns.medium;
    } else {
        // Otherwise, assume it to be the same as for small screens
        numColumnsMedium = numColumnsSmall;
    }

    if (numColumns && numColumns.large) {
        // If the number of columns for large screens is specified, set it
        numColumnsLarge = numColumns.large;
    } else {
        // Otherwise, assume it to be the same as for medium screens
        numColumnsLarge = numColumnsMedium;
    }

    // Based on the input to this function, determine which size's template needs to be returned
    if (size === "large") {
        return numColumnsLarge;
    } else if (size === "medium") {
        return numColumnsMedium;
    } else {
        return numColumnsSmall;
    }
};

/**
 * Constructs the string representing the CSS `grid-template-columns` property for the specified screen size
 *
 * @param size the screen size for which to determine the column template string
 * @param numColumns the number of columns for differently sized screens
 * @returns the string representation of the CSS `grid-template-columns` property based on the given
 *          screen size and column counts
 */
const getColumnTemplate = (
    size: keyof ColumnSettings,
    numColumns?: ColumnSettings
) => {
    let sizedNumColumns = getNumColumnsForSize(size, numColumns);
    return Array(sizedNumColumns).fill("1fr").join(" ");
};

/**
 * Constructs the string representing the CSS `grid-auto-rows` property for the specified screen size
 *
 * @param size the screen size for which to determine the auto rows string (small, medium, or large)
 * @param numColumns the number of columns for differently sized screens
 * @param justifyRows whether the rows of the grid should have equal heights
 * @returns the string representation of the CSS `grid-auto-rows` property based on the given
 *          screen size and column counts
 */
const getAutoRows = (
    size: keyof ColumnSettings,
    numColumns?: ColumnSettings,
    justifyRows?: boolean
) => {
    let sizedNumColumns = getNumColumnsForSize(size, numColumns);

    if (justifyRows && sizedNumColumns > 1) {
        return "1fr";
    } else {
        return "auto";
    }
};

/**
 * Constructs the string representing the CSS `gap` property
 *
 * @param gap the size of the gap (spacing) between rows and columns of the grid
 * @param rowGap the size of the gap (spacing) between rows of the grid
 * @param columnGap the size of the gap (spacing) between columns of the grid
 * @returns the string representation of the CSS `gap` property based on the given
 *          gap, row gap, and/or column gap values
 */
const getGap = (
    gap?: CSS.Property.Gap,
    rowGap?: CSS.Property.RowGap,
    columnGap?: CSS.Property.ColumnGap
) => {
    const defaultGap = "2.25rem";

    if (gap) {
        // If a gap value is given, use it
        return gap;
    } else {
        // If a gap value is not given, use the given row and column gap values or their default values if they are not given
        return `${rowGap !== undefined ? rowGap : defaultGap} ${
            columnGap !== undefined ? columnGap : defaultGap
        }`;
    }
};

/**
 * Creates the grid's styles
 */
const useStyles = createUseStyles<"grid", SimpleGridProps>({
    grid: {
        width: (data) => (data.width ? data.width : "100%"),
        display: "grid",
        gap: (data) => getGap(data.gap, data.rowGap, data.columnGap),

        // If more than one column, ensure that all rows of the grid are the same height
        gridAutoRows: (data) =>
            getAutoRows("large", data.numColumns, data.justifyRows),

        // Determine the columns for large screens
        gridTemplateColumns: (data) =>
            getColumnTemplate("large", data.numColumns),

        // Determine the columns for medium screens
        [`@media screen and (max-width: ${screenSizes.medium}px)`]: {
            gridTemplateColumns: (data) =>
                getColumnTemplate("medium", data.numColumns),

            // If more than one column, ensure that all rows of the grid are the same height
            gridAutoRows: (data) =>
                getAutoRows("medium", data.numColumns, data.justifyRows),
        },

        // Determine the columns for small screens
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            gridTemplateColumns: (data) =>
                getColumnTemplate("small", data.numColumns),

            // If more than one column, ensure that all rows of the grid are the same height
            gridAutoRows: (data) =>
                getAutoRows("small", data.numColumns, data.justifyRows),
        },

        "& :first-child": {
            gridColumn: (data) => (data.priority ? "1 / -1" : undefined),
        },
    },
});

/**
 * Props for the simple grid component
 */
type SimpleGridProps = {
    /** The number of columns the grid should show for differently sized screens */
    numColumns?: ColumnSettings;

    /** Whether the grid should show the first item larger than all others */
    priority?: boolean;

    /** The width of the grid container */
    width?: CSS.Property.Width;

    /** The gap between rows and columns in the grid */
    gap?: CSS.Property.Gap;

    /** The gap between rows in the grid */
    rowGap?: CSS.Property.RowGap;

    /** The gap between columns in the grid */
    columnGap?: CSS.Property.ColumnGap;

    /** Whether to equalize the heights of all rows in the grid */
    justifyRows?: boolean;

    /** Contents to place within the grid */
    children: ReactChildren;
};

/**
 * Settings for the grid's columns' sizes
 */
type ColumnSettings = {
    large?: number;
    medium?: number;
    small?: number;
};

export default SimpleGrid;
