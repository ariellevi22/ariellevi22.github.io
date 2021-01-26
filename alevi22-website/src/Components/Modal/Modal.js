import React from 'react';
import './Modal.css';

/**
 * React component representing a modal box with a header image, logo, heading, and subheading.
 * 
 * Usage:
 * ```js
 * <Modal>
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
const Modal = (props) => {
    // Disable background scrolling
    document.body.style.overflow = "hidden";

    // Define a function for closing the modal
    let closeModal = () => {
        if (props.closeModal) {
            props.closeModal();
        }

        // Restore background scrolling when closing the modal
        document.body.style.overflow = "auto";
    }

    let image = undefined;
    if (props.imgSrc) {
        image = <img src={props.imgSrc} alt={props.alt} className="background"/>;
    }

    let logo = undefined;
    if (props.logoSrc) {
        logo = <img src={props.logoSrc} alt={props.alt + " Logo"} className="logo"/>;
    }

    return (
        <React.Fragment>
            <div className="modal">
                <div className="header">
                    {image}
                    {logo}

                    <div className="header-text">
                        <h2>{props.heading}</h2>
                        <p>{props.subheading}</p>
                    </div>

                    <div className="close-button" onClick={closeModal}>
                        <i className="fa fa-close"/>
                    </div>
                </div>

                <div className="content">
                    {props.children}
                </div>
            </div>

            <div className="modal-background" onClick={closeModal}/>
        </React.Fragment>
    );
}

export default Modal;