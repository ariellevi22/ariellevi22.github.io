import { ReactChildren } from '../globals';
import { createUseStyles } from 'react-jss';
import * as CSS from 'csstype';
import { screenSizes } from '../globals';

type SimpleGridProps = {
    numColumnsLarge?: number,
    numColumnsMedium?: number,
    numColumnsSmall?: number,
    priority?: boolean,
    width?: CSS.Property.Width,
    gap?: CSS.Property.Gap,
    rowGap?: CSS.Property.RowGap,
    columnGap?: CSS.Property.ColumnGap,
    justifyRows?: boolean,
    children: ReactChildren,
};

/**
 * Based on the properties for the number of columns, gets the correct number of columns
 * to display in the grid for the given screen size
 * 
 * @param size the size for which to determine the number of columns (small, medium, or large)
 * @param numColumnsLarge the number of columns for large screens
 * @param numColumnsMedium the number of columns for medium screens
 * @param numColumnsSmall the number of columns for small screens
 * @returns the number of columns to display in the grid for the given screen size
 */
const getNumColumnsForSize = (size: "small" | "medium" | "large", numColumnsLarge?: number, numColumnsMedium?: number, numColumnsSmall?: number) => {
    // If the number of columns for small screens is not specified, assume it to be 1
    if (numColumnsSmall === undefined) {
        numColumnsSmall = 1;
    }

    // If the number of columns for medium screens is not specified, assume it to be the same as for small screens
    if (numColumnsMedium === undefined) {
        numColumnsMedium = numColumnsSmall;
    }

    // If the number of columns for large screens is not specified, assume it to be the same as for medium screens
    if (numColumnsLarge === undefined) {
        numColumnsLarge = numColumnsMedium;
    }

    // Based on the input to this function, determine which size's template needs to be returned
    let numColumns: number;
    if (size === "large") {
        numColumns = numColumnsLarge;
    } else if (size === "medium") {
        numColumns = numColumnsMedium;
    } else {
        numColumns = numColumnsSmall;
    }

    return numColumns;
}

/**
 * Constructs the string representing the CSS `grid-template-columns` property for the specified screen size
 * 
 * @param size the screen size for which to determine the column template string (small, medium, or large)
 * @param numColumnsLarge the number of columns for large screens
 * @param numColumnsMedium the number of columns for medium screens
 * @param numColumnsSmall the number of columns for small screens
 * @returns the string representation of the CSS `grid-template-columns` property based on the given
 *          screen size and column counts
 */
const getColumnTemplate = (size: "small" | "medium" | "large", numColumnsLarge?: number, numColumnsMedium?: number, numColumnsSmall?: number) => {
    let numColumns = getNumColumnsForSize(size, numColumnsLarge, numColumnsMedium, numColumnsSmall);
    return Array(numColumns).fill("1fr").join(" ");
}

/**
 * Constructs the string representing the CSS `grid-auto-rows` property for the specified screen size
 * 
 * @param size the screen size for which to determine the auto rows string (small, medium, or large)
 * @param numColumnsLarge the number of columns for large screens
 * @param numColumnsMedium the number of columns for medium screens
 * @param numColumnsSmall the number of columns for small screens
 * @param justifyRows whether the rows of the grid should have equal heights
 * @returns the string representation of the CSS `grid-auto-rows` property based on the given
 *          screen size and column counts
 */
const getAutoRows = (size: "small" | "medium" | "large", numColumnsLarge?: number, numColumnsMedium?: number, numColumnsSmall?: number, justifyRows?: boolean) => {
    let numColumns = getNumColumnsForSize(size, numColumnsLarge, numColumnsMedium, numColumnsSmall);
    
    if (justifyRows && (numColumns > 1)) {
        return "1fr";
    } else {
        return "auto";
    }
}

/**
 * Constructs the string representing the CSS `gap` property
 * 
 * @param gap the size of the gap (spacing) between rows and columns of the grid
 * @param rowGap the size of the gap (spacing) between rows of the grid
 * @param columnGap the size of the gap (spacing) between columns of the grid
 * @returns the string representation of the CSS `gap` property based on the given
 *          gap, row gap, and/or column gap values
 */
const getGap = (gap?: CSS.Property.Gap, rowGap?: CSS.Property.RowGap, columnGap?: CSS.Property.ColumnGap) => {
    const defaultGap = "2.25em";

    if (gap) {
        // If a gap value is given, use it
        return gap;
    } else {
        // If a gap value is not given, use the given row and column gap values or their default values if they are not given
        return `${(rowGap !== undefined) ? rowGap : defaultGap} ${(columnGap !== undefined) ? columnGap : defaultGap}`;
    }
}

const useStyles = createUseStyles<"grid", SimpleGridProps>({
    grid: {
        width: data => data.width ? data.width : "100%",
        display: "grid",
        gap: data => getGap(data.gap, data.rowGap, data.columnGap),

        // If more than one column, ensure that all rows of the grid are the same height
        gridAutoRows: data => getAutoRows("large", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall, data.justifyRows),

        // Determine the columns for large screens
        gridTemplateColumns: data => getColumnTemplate("large", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall),

        // Determine the columns for medium screens
        [`@media screen and (max-width: ${screenSizes.medium}px)`]: {
            gridTemplateColumns: data => getColumnTemplate("medium", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall),

            // If more than one column, ensure that all rows of the grid are the same height
            gridAutoRows: data => getAutoRows("medium", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall, data.justifyRows),
        },

        // Determine the columns for small screens
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            gridTemplateColumns: data => getColumnTemplate("small", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall),

            // If more than one column, ensure that all rows of the grid are the same height
            gridAutoRows: data => getAutoRows("small", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall, data.justifyRows),
        },

        '& :first-child': {
            gridColumn: data => data.priority ? "1 / -1" : undefined,
        },
    },
});

/**
 * A React component representing a container for grid items
 */
const SimpleGrid = (props: SimpleGridProps) => {
    const styles = useStyles(props);

    return (
        <div className={styles.grid}>
            {props.children}
        </div>
    );
}

export default SimpleGrid;