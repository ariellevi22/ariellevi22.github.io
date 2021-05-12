import React, { useState } from 'react';
import { noSpacing } from '../globals';
import Modal, { ModalProps } from './Modal';
import ShowcaseCard from './ShowcaseCard';

/**
 * A React component representing a showcase card that expands into a modal box when clicked
 * 
 * Props:
 * * all modal props
 */
const ModalCard = (props: ModalProps) => {
    // Initially, the modal is not showing
    const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>
            <ShowcaseCard imgSrc={props.imgSrc} logoSrc={props.logoSrc} onClick={() => setShowModal(true)}>
                <h2>{props.heading}</h2>
                <p className={noSpacing}>{props.subheading}</p>
            </ShowcaseCard>

            {
                showModal ?
                    <Modal
                        imgSrc={props.imgSrc}
                        logoSrc={props.logoSrc}
                        heading={props.heading}
                        subheading={props.subheading}
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