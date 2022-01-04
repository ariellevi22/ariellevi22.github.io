import { createUseStyles, useTheme } from 'react-jss';
import { ReactChildren } from '../../models';
import { AppTheme } from '../../theme';

type ChipProps = {
    children: ReactChildren,
}

/**
 * A React component representing a chip
 */
const Chip = (props: ChipProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({theme});

    return (
        <li className={styles.root}>
            {props.children}
        </li>
    );
}

/**
 * Creates the chip's styles
 */
const useStyles = createUseStyles<"root", {}, AppTheme>({
    root: {
        backgroundColor: data => data.theme.colors.backgroundTertiary,
        borderRadius: "1em",
        padding: "0.2em 0.5em",
        display: "inline-block",
    },
});


export default Chip;