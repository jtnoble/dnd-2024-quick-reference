import { Container } from "react-bootstrap";

function About() {
    return (
        <Container fluid='xl' className="container">
        <h1>What is this?</h1>
        <p>This is a DND Quick Reference guide for the 2024 ruleset.</p>
        <p>Heavily inspired by <a href="https://github.com/crobi/dnd5e-quickref">DND 5e QuickRef</a> by Crobi</p>
        <p>While inspired, this is still my own work, and does not resemble DND parent companies in any fashion.</p>

        <h1>Any further plans?</h1>
        <p>I'm thinking about adding some more content, such has how combat works, a character creation tool, etc.</p>
        <p>The main problem currently is that I am limited to what is in the publically available SRD. This means that certain content is not allowed to be shared at this time, such as all of the subclasses for each class (the SRD only references one per class). Once this information becomes more available, I will gladly add more content.</p>
        
        <h2>Links</h2>
        <ul>
            <li><a href="https://github.com/crobi/dnd5e-quickref">Crobi's Quick Reference Guide For 5e</a></li>
            <li><a href="https://game-icons.net/">Game Icons</a></li>
            <li><a href="https://github.com/jtnoble/dnd-2024-quick-reference">GitHub Repository for this project</a></li>
        </ul>
        </Container>
    );
}

export default About;