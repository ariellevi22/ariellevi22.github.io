import React, {useState} from 'react';
import Modal, { ModalProps } from '../Modal/Modal';
import './ModalCard.css';

type ModalCardProps = ModalProps & {
    children: React.ReactElement | React.ReactElement[] | React.ReactNode[] | JSX.Element[] | JSX.Element,
}

/**
 * React component representing a display card (containing a picture, heading, subheading, etc.)
 * that expands into a modal box when clicked
 * 
 * Usage:
 * ```tsx
 * <ModalCard
 *     imgSrc="./path/to/image"
 *     logoSrc="./path/to/logo"
 *     heading="Title Text" subheading="Subtitle Text"
 *     alt="Image/Logo Title"
 *     closeModal={functionToCloseModal}
 * >
 *     <p>Lorem ipsum dolor sit amet...</p>
 * </ModalCard>
 * ```
 */
const ModalCard = (props: ModalCardProps) => {
    // Initially, the modal is not showing
    const [showModal, setShowModal] = useState(false);

    let image = props.imgSrc ? <img src={props.imgSrc} alt={props.alt} className="background"/> : undefined;
    let logo = props.logoSrc ? <img src={props.logoSrc} alt={props.alt + " Logo"} className="logo"/> : undefined;

    return (
        <React.Fragment>
            <div className="modal-card" onClick={() => setShowModal(true)}>
                {image}
                {logo}
                <div>
                    <h2>{props.heading}</h2>
                    <p>{props.subheading}</p>
                </div>
            </div>

            {
                showModal ?
                    <Modal
                        imgSrc={props.imgSrc}
                        logoSrc={props.logoSrc}
                        heading={props.heading}
                        subheading={props.subheading}
                        alt={props.alt}
                        closeModal={() => setShowModal(false)}
                    >
                        {props.children}
                    </Modal> :
                    undefined
            }
        </React.Fragment>
    );
}

export default ModalCard;