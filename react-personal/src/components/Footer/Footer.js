import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import Container from 'react-bootstrap/Container';
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer text-center'>
                <h4>Connect with me!</h4>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col xs lg="1"><SocialIcon url="https://linkedin.com/in/tarenchen" target={"_blank"} /></Col>
                        <Col xs lg="1"><SocialIcon url="https://instagram.com/tarenchen3" target={"_blank"} /></Col>
                        <Col xs lg="1"><SocialIcon url="https://facebook.com/tarenchen" target={"_blank"} /></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;