import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar'

function Education() {
    const [open, setOpen] = useState(false);
    return <section id="education">
        <Container>
            <h1>EDUCATION</h1>
            <hr></hr>
            <Card style={{ border: "none" }}>
                <Row>
                    <Col lg={2}>
                        <Card.Img src={require('../../pictures/umlLogo.png')} />
                    </Col>
                    <Col lg={10}>
                        <Card.Body>
                            <Card.Title><strong>University of Massachusetts Lowell</strong></Card.Title>
                            <Card.Text>Lowell, MA</Card.Text>
                            <Card.Text>Bachelor of Science in <strong>Computer Science</strong> <br /> September 2017 - December 2022</Card.Text>
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


export default Education;
