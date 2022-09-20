import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar'

function Education() {
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
    return <section id="education">
        <Container>
            <h1>EDUCATION</h1>
            <hr></hr>
            <Accordion>
                <Card style={{ border: "none" }}>
                    <Row>
                        <Col lg={2}>
                            <a style={{ textDecoration: 'none' }} href='https://www.uml.edu/' target="_blank">
                                <Card.Img src={require('../../pictures/umlLogo.png')} />
                            </a>
                        </Col>
                        <Col lg={10}>
                            <Card.Body>
                                <Card.Title><strong>University of Massachusetts Lowell</strong></Card.Title>
                                <Card.Text>Lowell, MA <br /> September 2017 - December 2021</Card.Text>
                                <Card.Text>Bachelor of Science in Computer Science</Card.Text>
                                <CustomToggle eventKey="0">Learn More</CustomToggle>
                                <Accordion.Collapse eventKey="0">
                                    <div id="UMass-Lowell-Text">
                                        {/* <Card.Text><strong>About</strong><br />I attended the <a style={{ textDecoration: 'none' }} href='https://www.uml.edu/' target="_blank">University of Massachusetts Lowell</a>,  a public research university in Lowell, Massachusetts </Card.Text> */}
                                        <Card.Text><strong>Academics</strong><br />Graduated with a Bachelor of Science in <a style={{ textDecoration: 'none' }} href='https://www.uml.edu/sciences/computer-science/' target="_blank">Computer Science</a> - Cum Laude <br />
                                            Teaching Assistant for <a style={{ textDecoration: 'none' }} href='https://www.uml.edu/sciences/computer-science/' target="_blank">COMP.1010</a> where I graded and tutored students
                                        </Card.Text>
                                        <Card.Text><strong>Extracurriculars</strong><br />
                                            Athletics
                                            <ul>
                                                <li>
                                                    Men's Volleyball Team competing in the <a style={{ textDecoration: 'none' }} href='https://necvl.org/' target="_blank">New England Club Volleyball League</a>
                                                </li>
                                                <li>
                                                    Table Tennis Team competing in the <a style={{ textDecoration: 'none' }} href='http://www.nctta.org/' target="_blank">National Collegiate Table Tennis Association</a> <br /> Link to my player <a style={{ textDecoration: 'none' }} href='http://www.danserver.com/nctta/Players.asp?id=23221' target="_blank">profile</a>
                                                </li>
                                            </ul>
                                            Clubs
                                            <ul>
                                                <li>Vice President -<a style={{ textDecoration: 'none' }} href='https://umasslowellclubs.campuslabs.com/engage/organization/studentassociationofchineseamericans' target="_blank"> Student Association of Chinese Americans</a></li>
                                                <li>Brotherhood Chair, PM, Rush Chair, Webmaster - <a style={{ textDecoration: 'none' }} href="'http://uml.sigrho.com/'" target="_blank">Sigma Beta Rho</a> </li>
                                                <li>Hall Senator - <a style={{ textDecoration: 'none' }} href="https://www.uml.edu/student-services/reslife/housing/leadership-residence-hall-association.aspx" target="_blank">Resident Hall Association</a> </li>
                                            </ul>
                                            On Campus Jobs
                                            <ul>
                                                <li><a style={{ textDecoration: 'none' }} href='https://www.uml.edu/student-services/career-services/career-peers.aspx' target="_blank"> Career Peer</a> at <a style={{ textDecoration: 'none' }} href='https://www.uml.edu/student-services/career-services/'>Career & Co-op Center</a></li>
                                                <li>Welcome Desk at <a style={{ textDecoration: 'none' }} href="https://www.uml.edu/campusrecreation/'" target="_blank">Campus Recreation Center</a> </li>
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Accordion>
        </Container >
    </section>
}


export default Education;
