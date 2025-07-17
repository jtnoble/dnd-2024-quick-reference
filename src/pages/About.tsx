import { Container } from "react-bootstrap";

function About() {
    return (
        <Container fluid='xl' className="container">
        <h1>What is this?</h1>
        <p>This is a DND Quick Reference guide for the 2024 ruleset.</p>

        <p>Heavily inspired by <a href="https://github.com/crobi/dnd5e-quickref">DND 5e QuickRef</a> by Crobi</p>
        </Container>
    );
}

export default About;