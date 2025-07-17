import '../styles/ActionTile.css';

interface ActionTileProps {
    icon: string
    title: string
    shortDescription: string
    onClick: () => void
}
function ActionTile(props: ActionTileProps) {
    const {icon, title, shortDescription, onClick} = props;

    return (
        <>
            <div className="clickable-element" onClick={onClick}>
                <img src={icon} alt="icon" className="element-icon" />
                <div className="element-text">
                    <h3 className="element-title">{title}</h3>
                    <p className="element-description">{shortDescription}</p>
                </div>
            </div>
        </>
    );
}

export default ActionTile;