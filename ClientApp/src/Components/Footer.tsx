import IconButton from './Button/IconButton';
import Logo from './Logo/Logo';
import { getCurrentYear } from '../utils';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../theme';
import IconButtonGroup from './Button/IconButtonGroup';
import { IconTab } from '../globals';

type FooterProps = {
    copyrightHolderName: string,
    socialButtons: IconTab[],
}

const useStyles = createUseStyles<"footer" | "copyrightText", FooterProps, Theme>({
    footer: {
        padding: "2.5em",
        width: "100%",
        backgroundColor: data => data.theme.colors.dark,
        color: data => data.theme.colors.light,
        display: "flex",
        flexDirection: "column",
        gap: "1.5em",
        alignItems: "center",
    },
    copyrightText: {
        fontSize: "0.75em",
        margin: 0,
    },
});

/**
 * React component representing the footer of the website, which contains
 * copyright information. The copyright year automatically updates to the current year.
 * 
 * Props:
 * * `copyrightHolderName` the person or organization to be shown as the copyright holder
 * * `socialButtons` a list of social buttons to display within the footer
 */
const Footer = (props: FooterProps) => {
    const theme = useTheme<Theme>();
    const styles = useStyles({...props, theme});

    return (
        <footer className={styles.footer}>
            <Logo stacked href="#top"/>
            
            <IconButtonGroup>
                {props.socialButtons.map(button => {
                    return (
                        <IconButton iconName={button.iconName} iconPrefix={button.iconPrefix}
                            hoverBgColor={button.colorPrimary} hoverTextColor={button.colorSecondary}
                            variant="light"
                            href={button.href}
                            key={[button.iconPrefix, button.iconName].join(" ")}
                        />
                    );
                })}
            </IconButtonGroup>

            <p className={styles.copyrightText}>&copy; {getCurrentYear()} {props.copyrightHolderName}</p>
        </footer>
    );
}

export default Footer;