import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
import './Experience.css';


function Experience() {
    const [open, setOpen] = useState(false);
    return <section id="experience">
        <Container>
            <h1>EXPERIENCES</h1>
            <hr></hr>
            <Card className="Card" style={{ border: "none" }}>
                <Row>
                    <Col lg={2}>
                        <Card.Img src={require('../../pictures/ibm.png')} />
                    </Col>
                    <Col lg={10}>
                        <Card.Body>
                            <Card.Title>IBM</Card.Title>
                            <Card.Text>Cambridge, MA <br /> February 2022 - Present</Card.Text>
                            <Card.Text>Associate Software Developer </Card.Text>
                            <Button style={{ float: "right" }}
                                onClick={() => setOpen(!open)}
                                aria-controls="UMass-Lowell-Text"
                                aria-expanded={open}
                                variant="outline-dark"
                            >
                                See more
                            </Button>
                            <Collapse in={open}>
                                <div id="UMass-Lowell-Text">
                                    <Card.Text><strong>Teaching Assistant</strong><br />Tutored and graded Computing 1 students</Card.Text>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Card className="Card" style={{ border: "none" }}>
                <Row>
                    <Col lg={2}>
                        <Card.Img src={require('../../pictures/jpmorgan.jpg')} />
                    </Col>
                    <Col lg={10}>
                        <Card.Body>
                            <Card.Title>JPMorgan Chase & Co.</Card.Title>
                            <Card.Text>Plano, TX <br /> June 2021 - August 2021</Card.Text>
                            <Card.Text>Software Engineer Intern</Card.Text>
                            <Button style={{ float: "right" }}
                                onClick={() => setOpen(!open)}
                                aria-controls="UMass-Lowell-Text"
                                aria-expanded={open}
                                variant="outline-dark"
                            >
                                See more
                            </Button>
                            <Collapse in={open}>
                                <div id="UMass-Lowell-Text">
                                    <Card.Text><strong>Teaching Assistant</strong><br />Tutored and graded Computing 1 students</Card.Text>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Card className="Card" style={{ border: "none" }}>
                <Row>
                    <Col lg={2}>
                        <Card.Img src={require('../../pictures/fidelity.jpg')} />
                    </Col>
                    <Col lg={10}>
                        <Card.Body>
                            <Card.Title>Fidelity Investments</Card.Title>
                            <Card.Text>Merrimack, NH <br /> June 2020 - August 2020</Card.Text>
                            <Card.Text>Software Engineer Intern</Card.Text>
                            <Button style={{ float: "right" }}
                                onClick={() => setOpen(!open)}
                                aria-controls="UMass-Lowell-Text"
                                aria-expanded={open}
                                variant="outline-dark"
                            >
                                See more
                            </Button>
                            <Collapse in={open}>
                                <div id="UMass-Lowell-Text">
                                    <Card.Text><strong>Teaching Assistant</strong><br />Tutored and graded Computing 1 students</Card.Text>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Card className="Card" style={{ border: "none" }}>
                <Row>
                    <Col lg={2}>
                        <Card.Img src={require('../../pictures/philips.PNG')} />
                    </Col>
                    <Col lg={10}>
                        <Card.Body>
                            <Card.Title>Philips</Card.Title>
                            <Card.Text>Andover, MA  <br />June 2019 - December 2019</Card.Text>
                            <Card.Text>Software Engineer Co-op</Card.Text>
                            <Button style={{ float: "right" }}
                                onClick={() => setOpen(!open)}
                                aria-controls="UMass-Lowell-Text"
                                aria-expanded={open}
                                variant="outline-dark"
                            >
                                See more
                            </Button>
                            <Collapse in={open}>
                                <div id="UMass-Lowell-Text">
                                    <Card.Text><strong>Teaching Assistant</strong><br />Tutored and graded Computing 1 students</Card.Text>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container >
    </section>
}



export default Experience;
