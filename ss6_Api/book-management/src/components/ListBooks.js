import {useState} from "react";
import {Button, Modal} from 'react-bootstrap';

function ListBooks() {
    const [listBook, setListBook] = useState([]);
    const ConfirmationModal = ({onDelete}) => {
        const [showModal, setShowModal] = useState(false);

        const handleShowModal = () => {
            setShowModal(true);
        };

        const handleCloseModal = () => {
            setShowModal(false);
        };

        const handleDelete = () => {
            onDelete();
            setShowModal(false);
        };
        return (
            <>
                <Button variant="danger" onClick={handleShowModal}>
                    Xóa
                </Button>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Bạn có chắc chắn muốn xóa không?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Hủy
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>
                            Xóa
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}