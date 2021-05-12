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
    children: ReactChildren,
};

const getColumnTemplate = (size: "small" | "medium" | "large", numColumnsLarge?: number, numColumnsMedium?: number, numColumnsSmall?: number) => {
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

    // Create the template for as many equally sized columns as needed: "1fr 1fr ... 1fr"
    return Array(numColumns).fill("1fr").join(" ");
}

const getGap = (gap?: CSS.Property.Gap, rowGap?: CSS.Property.RowGap, columnGap?: CSS.Property.ColumnGap) => {
    const defaultGap = "1.5em";

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
        gridAutoRows: "1fr", // to ensure that all rows of the grid are the same height

        // Determine the columns for large screens
        gridTemplateColumns: data => getColumnTemplate("large", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall),

        // Determine the columns for medium screens
        [`@media screen and (max-width: ${screenSizes.medium}px)`]: {
            gridTemplateColumns: data => getColumnTemplate("medium", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall),
        },

        // Determine the columns for small screens
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            gridTemplateColumns: data => getColumnTemplate("small", data.numColumnsLarge, data.numColumnsMedium, data.numColumnsSmall),
        },

        '& :first-child': {
            gridColumn: data => data.priority ? "1 / -1" : undefined,
        },
    },
});

const SimpleGrid = (props: SimpleGridProps) => {
    const styles = useStyles(props);

    return (
        <div className={styles.grid}>
            {props.children}
        </div>
    );
}

export default SimpleGrid;