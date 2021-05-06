import React from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IReactChildren } from '../../Models/IReactChildren';

export type ModalProps = {
    imgSrc?: string,
    logoSrc?: string,
    heading: string,
    subheading: string,
    alt: string,
    closeModal?: () => void,
    children: IReactChildren,
}

/**
 * React component representing a modal box with a header image, logo, heading, and subheading.
 * 
 * Usage:
 * ```tsx
 * <Modal
 *     imgSrc="./path/to/image"
 *     logoSrc="./path/to/logo"
 *     heading="Title Text" subheading="Subtitle Text"
 *     alt="Image/Logo Title"
 *     closeModal={functionToCloseModal}
 * >
 *     <p>Lorem ipsum dolor sit amet...</p>
 * </Modal>
 * ```
 */
const Modal = (props: ModalProps) => {
    // Disable background scrolling
    document.body.style.overflowY = "hidden";

    // Define a function for closing the modal
    let closeModal = () => {
        // Restore background scrolling
        document.body.style.overflowY = "auto";

        // Run user-defined close modal operations
        if (props.closeModal) {
            props.closeModal();
        }
    }

    let image = props.imgSrc ? <img src={props.imgSrc} alt={props.alt} className="background"/> : undefined;
    let logo = props.logoSrc ? <img src={props.logoSrc} alt={props.alt + " Logo"} className="logo"/> : undefined;

    return (
        <React.Fragment>
            <div className="modal">
                <div className="header">
                    {image}
                    {logo}

                    <div>
                        <h2>{props.heading}</h2>
                        <p>{props.subheading}</p>
                    </div>
                </div>

                <div className="content">
                    {props.children}
                </div>
            </div>

            <div className="modal-background" onClick={closeModal}/>

            <div className="modal-close-button" onClick={closeModal}>
                <FontAwesomeIcon icon="times" title="Close"/>
            </div>
        </React.Fragment>
    );
}

export default Modal;