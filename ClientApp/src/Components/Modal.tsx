import React from 'react';
import { noSpacing, ReactChildren, screenSizes } from '../globals';
import { disableBodyScrolling, enableBodyScrolling } from '../utils';
import IconButton from './Button/IconButton';
import ShowcaseCard from './ShowcaseCard';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../theme';

export type ModalProps = {
    imgSrc?: string,
    logoSrc?: string,
    heading: string,
    subheading: string,
    closeModal?: () => void,
    children: ReactChildren,
}

const useStyles = createUseStyles<"modal" | "background" | "closeButton" | "content", ModalProps, Theme>({
    modal: {
        width: "75vw",
        maxWidth: "1000px",
        height: "min-content",
        maxHeight: "80vh",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        overflow: "auto",
        zIndex: 1000,
        backgroundColor: data => data.theme.colors.light,
        boxShadow: data => `0 0 2em 0 ${data.theme.colors.dark}`,
        animation: "grow 0.25s ease 0s 1 normal",

        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            width: "100vw",
            height: "100vh",
            maxHeight: "none",
        }
    },

    background: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(3px)",
        animation: "fade 0.25s ease 0s 1 normal",

        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            display: "none",
        }
    },

    closeButton: {
        position: "fixed",
        top: "1.5em",
        right: "1.5em",
        zIndex: 1001,
        animation: "fade 0.25s ease 0s 1 normal",
    },

    content: {
        padding: "2em",
    },
});

/**
 * React component representing a modal box with a header image, logo, heading, and subheading
 */
const Modal = (props: ModalProps) => {
    const theme = useTheme<Theme>();
    const styles = useStyles({...props, theme});

    // Disable background scrolling
    disableBodyScrolling();

    // Define a function for closing the modal
    const closeModal = () => {
        // Restore background scrolling
        enableBodyScrolling();

        // Run user-defined close modal operations
        if (props.closeModal) {
            props.closeModal();
        }
    }

    return (
        <React.Fragment>
            <IconButton variant="dark" className={styles.closeButton}
                onClick={closeModal}
                iconName="times" iconPrefix="fas"
                aria-label="Close Modal"
            />

            <div className={styles.modal}>
                <ShowcaseCard imgSrc={props.imgSrc} logoSrc={props.logoSrc}>
                    <h2>{props.heading}</h2>
                    <p className={noSpacing}>{props.subheading}</p>
                </ShowcaseCard>

                <div className={styles.content}>
                    {props.children}
                </div>
            </div>

            <div className={styles.background} onClick={closeModal}/>
        </React.Fragment>
    );
}

export default Modal;