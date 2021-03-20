import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TourForm from './TourForm';

const BookATour = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <div>
            <Button color="light" onClick={toggle} active>Book A Tour</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Book A Tour</ModalHeader>
                <ModalBody>
                    <TourForm />
                </ModalBody>
                <ModalFooter>
                    <Button color="light" onClick={toggle} className="mr-auto" active>Submit</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default BookATour;