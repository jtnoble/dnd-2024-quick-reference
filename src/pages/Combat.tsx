import { Container } from "react-bootstrap";
import '../styles/Combat.css';

function Combat() {
    return(
        <Container fluid="xl" className="container">
            <h1 style={{borderBottom: "solid black 2px"}}>Combat (Work in progress...)</h1>
            <section>
                <h2>What Is Combat?</h2>
                <span>You run into a group of not-so-savory folk, and the DM mutters the words "roll for initiative". This means that you have started a combat encounter.</span>
                <br /><br />
                <span>Combat is broken up into turns and rounds. Based on the initiative order, your will go turn by turn. For example, you may have four party members (including yourself) and two bad guys. Your rolls determine who goes first and in what order. A round is considered as the time it takes to get back to your turn again. Each round is considered as 6 seconds for purposes of tracking time-based events.</span>
            </section>
            <section>
                <h2>Roll For Initiative</h2>
                <span>Roll a D20. If you have your Initiative modifier written down, great! Otherwise, just add your DEX modifier to your D20 roll.</span>
                <br />
                <span>You may ask, "What if someone else also rolls the same as me?" In that case, whoever has the higher DEX number will go first.</span>
            </section>
            <section>
                <h2>On your turn</h2>
                <span>During your turn, you can do a number of things:</span>
                <h3>Movement</h3>
                <span>Movement will be on your character sheet in the measurement of feet, or ft. If you are playing using a board (such as Roll20 or a physical battle map), each square or hexagon is normally indicative of 5ft.</span>
                <h4>Difficult Terrain</h4>
                <span>Sometimes you will be stuck in knee dip water or dense vines. In these cases, your cost to move is typically doubled, making each square of movement take 10ft instead of 5ft.</span>
                <h3>Taking Action</h3>
                <span>Typically when you do anything of note, it will be considered an Action, Reaction, or Bonus Action</span>
                <h4>Action</h4>
                <span>Actions include the following:</span>
                <ul>
                    <li>Attack</li>
                    <li>Dash</li>
                    <li>Disengage</li>
                    <li>Dodge</li>
                    <li>Help</li>
                    <li>Hide</li>
                    <li>Influence</li>
                    <li>Magic</li>
                    <li>Ready</li>
                    <li>Search</li>
                    <li>Study</li>
                    <li>Utilize</li>
                </ul>
            </section>


        </Container>
    );
}

export default Combat;