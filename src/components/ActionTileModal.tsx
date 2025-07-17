import { Modal, Button } from 'react-bootstrap';
import '../styles/ActionTileContainer.css';

interface ActionTileModalProps {
    show: boolean;
    icon: string;
    title: string;
    description: string;
    onHide: () => void;
}

function ActionTileModal({ show, icon, title, description, onHide }: ActionTileModalProps) {
    return (
        <div>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <img src={icon} alt="icon" className="small-icon" />
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='modal-description'>{description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActionTileModal;
