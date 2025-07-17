import { useState } from "react";
import ClickedElementModal from "./ActionTileModal";
import '../styles/ActionTile.css';

interface ActionTileProps {
    icon: string
    title: string
    shortDescription: string
    longDescription: string
}
function ActionTile(props: ActionTileProps) {
    const {icon, title, shortDescription, longDescription} = props;

    const [showClickedModal, setShowClickedModal] = useState(false);

    return (
        <>
            <div className="clickable-element" onClick={() => setShowClickedModal(true)}>
                <img src={icon} alt="icon" className="element-icon" />
                <div className="element-text">
                    <h3 className="element-title">{title}</h3>
                    <p className="element-description">{shortDescription}</p>
                </div>
            </div>
            <ClickedElementModal 
                show={showClickedModal}
                icon={icon}
                title={title}
                description={longDescription}
                onHide={() => setShowClickedModal(false)}
            >
            </ClickedElementModal>
        </>
    );
}

export default ActionTile;