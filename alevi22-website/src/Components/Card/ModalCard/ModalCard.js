import React, {useState} from 'react';
import Modal from '../../Modal/Modal';
import './ModalCard.css';

const ModalCard = (props) => {
    // Initially, the modal is not showing
    const [showModal, setShowModal] = useState(false);

    let modal = undefined;
    if (showModal) {
        modal = (
            <Modal
                imgSrc={props.imgSrc}
                logoSrc={props.logoSrc}
                heading={props.heading}
                subheading={props.subheading}
                alt={props.alt}
                closeModal={setShowModal.bind(false)}
            >
                {props.children}
            </Modal>
        );
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
            <div className="modal-card" onClick={setShowModal.bind(true)}>
                {image}
                {logo}
                <div className="card-text">
                    <h2>{props.heading}</h2>
                    <p>{props.subheading}</p>
                </div>
            </div>

            {modal}
        </React.Fragment>
    );
}

export default ModalCard;