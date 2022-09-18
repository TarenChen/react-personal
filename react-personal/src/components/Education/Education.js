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
                            <Card.Text>Lowell, MA <br /> September 2017 - December 2022</Card.Text>
                            <Card.Text>Bachelor of Science in Computer Science</Card.Text>
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
                                    <Card.Text><strong>About</strong><br />The  <a style={{ textDecoration: 'none' }} href='https://www.uml.edu/' target="_blank">University of Massachusetts Lowell</a> is a national research university committed to preparing students for work in the real world solving real problems and helping real people by providing an affordable, high-quality education </Card.Text>
                                    <Card.Text><strong>Academics</strong><br />I graduated with a Bachelor of Science in <a style={{ textDecoration: 'none' }} href='https://www.uml.edu/sciences/computer-science/' target="_blank">Computer Science</a> - Cum Laude</Card.Text>
                                    <Card.Text><strong>Extracurriculars</strong><br />
                                        Athletics
                                        <ul>
                                            <li>
                                                Men's Volleyball Team competing in the <a style={{ textDecoration: 'none' }} href='https://necvl.org/' target="_blank">New England Club Volleyball League</a>
                                            </li>
                                            <li>
                                                Table Tennis Team competing in the <a style={{ textDecoration: 'none' }} href='http://www.nctta.org/' target="_blank">National Collegiate Table Tennis Association</a>. This is my <a style={{ textDecoration: 'none' }} href='http://www.danserver.com/nctta/Players.asp?id=23221' target="_blank">career</a> records
                                            </li>
                                        </ul>
                                    </Card.Text>
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
