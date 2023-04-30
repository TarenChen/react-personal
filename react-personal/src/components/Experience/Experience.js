import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
import './Experience.css';


function Experience() {
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
    return <section id="experience">
        <Container>
            <h1 style={{ color: "#343a40" }}>EXPERIENCES</h1>
            <hr></hr>
            <Accordion>
                <Card className="Card" style={{ border: "none" }}>
                    <Row>
                        <Col lg={2}>
                            <a style={{ textDecoration: 'none' }} href="https://www.jpmorganchase.com/" target="_blank"><Card.Img src={require('../../pictures/jpmorgan.jpg')} /></a>
                        </Col>
                        <Col lg={10}>
                            <Card.Body>
                                <Card.Title>JPMorgan Chase & Co.</Card.Title>
                                <Card.Text>Plano, TX <br /> January 2023 - Present</Card.Text>
                                <Card.Text>Software Engineer III</Card.Text>
                                <CustomToggle eventKey="4">Learn More</CustomToggle>
                                <Accordion.Collapse eventKey="4">
                                    <div>
                                        <Card.Text><a style={{ textDecoration: 'none' }} href="https://www.jpmorganchase.com/" target="_blank">JPMorgan Chase & Co.</a> is an American multinational financial services company. It is the largest bank in the United States and the world's largest bank by market capitalization.</Card.Text>
                                        <Card.Text>Contributions:</Card.Text>
                                        Line of Business: Consumer & Community Banking (CCB)
                                        {/* <ul>
                                            <li>
                                                Created a dashboard using React and Spring Boot (Java) to visualize datastored in an Oracle Database
                                            </li>
                                            <li>
                                                Implemented both the API and user interface that displays Apica and ThousandEyes data in one synthetic monitor
                                            </li>
                                            <li>
                                                Worked in an Agile environment with daily stand-ups and bi-weekly sprint meetings utilizing JIRA for management
                                            </li>
                                        </ul> */}
                                    </div>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="Card" style={{ border: "none" }}>
                    <Row>
                        <Col lg={2}>
                            <a style={{ textDecoration: 'none' }} href="https://www.ibm.com/services/ibmix" target="_blank"><Card.Img src={require('../../pictures/ibm.png')} /></a>
                        </Col>
                        <Col lg={10}>
                            <Card.Body>
                                <Card.Title>IBM</Card.Title>
                                <Card.Text>Manhattan, NY / Cambridge, MA <br /> February 2022 - January 2023</Card.Text>
                                <Card.Text>Associate Software Developer </Card.Text>
                                <CustomToggle eventKey="3">Learn More</CustomToggle>
                                <Accordion.Collapse eventKey="3">
                                    <div>
                                        <Card.Text><a style={{ textDecoration: 'none' }} href="https://www.ibm.com/services/ibmix" target="_blank">IBM iX®</a> works at the intersection of strategy, design and technology to digitally reinvent your business. We take a human-centered, outcomes-led approach to defining your digital strategy and delivering exceptional customer experiences to build your business, by design.</Card.Text>
                                        <Card.Text>Contributions:</Card.Text>
                                        Clients include: Citi, Prudential
                                        <ul>
                                            <li>
                                                Conducted a comprehensive Due Diligence analysis for CitiBank's check processing system, identifying areas for improvement and proposing solutions
                                            </li>
                                            <li>
                                            Collaborated with stakeholders at CitiBank to gather system dependencies, create business requirements, and develop functional architecture diagrams that accurately represented their system's capabilities and limitations
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="Card" style={{ border: "none" }}>
                    <Row>
                        <Col lg={2}>
                            <a style={{ textDecoration: 'none' }} href="https://www.jpmorganchase.com/" target="_blank"><Card.Img src={require('../../pictures/jpmorgan.jpg')} /></a>
                        </Col>
                        <Col lg={10}>
                            <Card.Body>
                                <Card.Title>JPMorgan Chase & Co.</Card.Title>
                                <Card.Text>Plano, TX <br /> June 2021 - August 2021</Card.Text>
                                <Card.Text>Software Engineer Intern</Card.Text>
                                <CustomToggle eventKey="2">Learn More</CustomToggle>
                                <Accordion.Collapse eventKey="2">
                                    <div>
                                        <Card.Text><a style={{ textDecoration: 'none' }} href="https://www.jpmorganchase.com/" target="_blank">JPMorgan Chase & Co.</a> is an American multinational financial services company. It is the largest bank in the United States and the world's largest bank by market capitalization.</Card.Text>
                                        <Card.Text>Contributions:</Card.Text>
                                        Line of Business: Global Technogoly Infrastructure - Enterprise Management and Monitoring Services
                                        <ul>
                                            <li>
                                                Developed a dashboard utilizing React and Spring Boot (Java) to present data stored in an Oracle Database, improving data visibility and accessibility
                                            </li>
                                            <li>
                                                Designed and implemented an API and user interface to display Apica and ThousandEyes data in a single synthetic monitor, increasing monitoring efficiency and reducing redundancy
                                            </li>
                                            <li>
                                            Collaborated in an Agile environment, participating in daily stand-ups and bi-weekly sprint meetings, and utilizing JIRA for efficient project management
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="Card" style={{ border: "none" }}>
                    <Row>
                        <Col lg={2}>
                            <a style={{ textDecoration: 'none' }} href="https://www.fidelity.com/" target="_blank"><Card.Text><Card.Img src={require('../../pictures/fidelity.jpg')} /></Card.Text></a>
                        </Col>
                        <Col lg={10}>
                            <Card.Body>
                                <Card.Title>Fidelity Investments</Card.Title>
                                <Card.Text>Merrimack, NH <br /> June 2020 - August 2020</Card.Text>
                                <Card.Text>Software Engineer Intern</Card.Text>
                                <CustomToggle eventKey="1">Learn More</CustomToggle>
                                <Accordion.Collapse eventKey="1">
                                    <div>
                                        <Card.Text> <a style={{ textDecoration: 'none' }} href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a> is an American multinational financial services corporation based in Boston, Massachusetts. The company was established in 1946 and is one of the largest asset managers in the world with $4.5 trillion in assets under management.</Card.Text>
                                        <Card.Text>Contributions:</Card.Text>
                                        Line of Business: Enterprise Infrastructure - Market Data
                                        <ul>
                                            <li>
                                            Utilized AWS Tools (MetricsFilter, CloudWatch, Lambdas, SNS) to develop an automated notification feature on AWS that detects application failure and recovery logs for the Market Data team
                                            </li>
                                            <li>
                                            Automated email alerts, which eliminated the need for manual tracking of status logs by the operations team, resulting in significant time savings
                                            </li>
                                            <li>
                                            Worked in an Agile environment, attending daily stand-ups and bi-weekly sprint meetings, and utilizing JIRA for project management
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="Card" style={{ border: "none" }}>
                    <Row>
                        <Col lg={2}>
                            <a style={{ textDecoration: 'none' }} href="https://www.usa.philips.com/healthcare" target="_blank"><Card.Img src={require('../../pictures/philips.PNG')} /></a>
                        </Col>
                        <Col lg={10}>
                            <Card.Body>
                                <Card.Title>Philips</Card.Title>
                                <Card.Text>Boston, MA  <br />June 2019 - December 2019</Card.Text>
                                <Card.Text>Software Engineer Co-op</Card.Text>
                                <CustomToggle eventKey="0">Learn More</CustomToggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <Card.Text> <a style={{ textDecoration: 'none' }} href="https://www.usa.philips.com/healthcare" target="_blank">Philips</a>, in full Royal Philips NV, major Dutch manufacturer of consumer electronics, electronic components, medical imaging equipment, household appliances, lighting equipment, and computer and telecommunications equipment.</Card.Text>
                                        <Card.Text>Contributions:</Card.Text>
                                        Patient Monitoring Devices - Patient Wearable Monitoring
                                        <ul>
                                            <li>
                                                Implemented unit tests in C/C++ with Google Test framework for an embedded patient monitoring medical device
                                            </li>
                                            <li>
                                                Ensured code coverage using GCOV/LCOV, resulting in classes with 100% functional, and 80+% line/branch coverage
                                            </li>
                                            <li>
                                                Flashed system boards, refactored Python smoke test scripts and troubleshooted wlan/cts radio devices
                                            </li>
                                        </ul>
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



export default Experience;
