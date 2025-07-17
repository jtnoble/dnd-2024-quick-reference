import { Container } from "react-bootstrap";
import ActionTile from "../components/ActionTile";
import reactLogo from "../assets/react.svg"

function Home() {
    return(
        <>
            <Container>
                <ActionTile 
                    icon={reactLogo}
                    title="Attack"
                    shortDescription="Perform an attack"
                    longDescription="This is a much longer description, but basically says how an attack works."
                />

            </Container>
        </>
    );
}

export default Home;