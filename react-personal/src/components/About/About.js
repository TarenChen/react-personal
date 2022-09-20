import React from 'react';
import Container from 'react-bootstrap/Container';
import { Card, Row, Col } from 'react-bootstrap';


function About() {
    return <section id='about'>
        <Container >
            <h1>ABOUT ME</h1>
            <hr></hr>
            <Card style={{ border: "none" }}>
                <Row>
                    <Col lg="2">
                        <Card.Img src={require('../../pictures/nycbridgecropped.jpeg')} />
                    </Col>
                </Row>
            </Card>
        </Container >
    </section >
}


export default About;
