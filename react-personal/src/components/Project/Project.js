import React from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';


function Project() {
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <Button
                type="button"
                style={{ float: "right" }}
                onClick={decoratedOnClick}
                variant="outline-dark"
            >
                {children}
            </Button>
        );
    }
    return <section id="project">
        <Container >
            <h1>PROJECTS</h1>
            <hr></hr>
            <Accordion>
                <Card className="Card" style={{ border: "none" }}>
                    <Row>
                        <Col lg={2}>
                            <a style={{ textDecoration: 'none' }} href="https://www.redhat.com/" target="_blank"><Card.Img src={require("../../pictures/redhat.PNG")} /></a>
                        </Col>
                        <Col lg={10}>
                            <Card.Body>
                                <Card.Title>Red Hat</Card.Title>
                                <Card.Text>Lowell, MA <br /> 2021 </Card.Text>
                                <Card.Text>Industry Project at UMass Lowell</Card.Text>
                                <CustomToggle eventKey="0">Learn More</CustomToggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <Card.Text><a style={{ textDecoration: 'none' }} href="https://www.redhat.com/" target="_blank">Red Hat</a> is an American IBM subsidiary software company that provides open source software products to enterprises.</Card.Text>
                                        <Card.Text>Contributions:</Card.Text>
                                        Worked on Pulp 3 User Interface <br /> <br />
                                        Pulp is a platform for managing repositories of software packages and making them available to a large number of consumers. We developed a web application to interact with Pulp's REST API to generate an interactive display for managing software content using React and Patternfly.
                                        <br /> <br />Learn more about the project <a style={{ textDecoration: 'none' }} href="https://hackmd.io/@pulp/Byy2t7kfv" target="_blank">here</a>!
                                    </div>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="Card" style={{ border: "none" }}>
                    <Row>
                        <Col lg={2}>
                            <a style={{ textDecoration: 'none' }} href="https://amiechan.github.io/sdv-checker/" target="_blank"><Card.Img src={require("../../pictures/stardew.png")} /></a>
                        </Col>
                        <Col lg={10}>
                            <Card.Body>
                                <Card.Title>Stardew Valley Tracker</Card.Title>
                                <Card.Text>Lowell, MA <br /> 2021 </Card.Text>
                                <Card.Text>Senior Capstone Project </Card.Text>
                                <CustomToggle eventKey="1">Learn More</CustomToggle>
                                <Accordion.Collapse eventKey="1">
                                    <div>
                                        <a style={{ textDecoration: 'none' }} href="https://www.stardewvalley.net/" target="_blank">Stardew Valley</a> is a simulation role-playing video game developed by Eric "ConcernedApe" Barone. Players take the role of a character who takes over their deceased grandfather's dilapidated farm in a place known as Stardew Valley.                                        <Card.Text>Contributions:</Card.Text>
                                        With my partners, we  <a style={{ textDecoration: 'none' }} href="https://github.com/amiechan/sdv-checker" target="_blank">developed</a> and <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/watch?v=Bl2HPk45JgQ" target="_blank">presented</a> our Stardew Valley Game Tracker for <a style={{ textDecoration: 'none' }} href="https://www.uml.edu/catalog/courses/comp/4620" target="_blank">Graphical User Interface Programming II</a> at UMass Lowell<br /> <br />
                                        Check out our <a style={{ textDecoration: 'none' }} href="https://amiechan.github.io/sdv-checker/" target="_blank">application</a>!
                                    </div>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Accordion>
        </Container >
    </section >
}


export default Project;
