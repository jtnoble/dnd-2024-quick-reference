import { Container } from "react-bootstrap";
import ActionTile from "./ActionTile";
import "../styles/ActionTileContainer.css";
import { useState } from "react";
import ActionTileModal from "./ActionTileModal";

interface ActionTileContainerProps {
    title: string
    limitation: string
    description: string
    tiles: any
}

function ActionTileContainer({ title, limitation, description, tiles }: ActionTileContainerProps) {
    const [selectedTile, setSelectedTile] = useState<any>(null);

    return (
        <Container fluid="md">
            <div className="action-container">
                <h2>{title}</h2>
                <h4 className="limitation">{limitation}</h4>
                <p className="description">{description}</p>
                <div className="tiles-grid">
                    {tiles.map((item: any, index: number) => (
                        <ActionTile 
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            shortDescription={item.shortDescription}
                            onClick={() => setSelectedTile(item)}
                        />
                    ))}
                </div>
            </div>
            {selectedTile && (
                <ActionTileModal 
                    show={!!selectedTile}
                    icon={selectedTile.icon}
                    title={selectedTile.title}
                    description={selectedTile.longDescription}
                    onHide={() => setSelectedTile(null)}
                />
            )}
        </Container>
    );
}
export default ActionTileContainer;