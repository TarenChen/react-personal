import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Navbar/Navbar.css"

function HomePageNavBar() {
    return (
        <Navbar bg="dark" expand="lg" sticky='top'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='m-auto justify-content-center' variant='light'>
                        <Nav.Link style={{ color: "white" }} href="/"><strong>HOME</strong></Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/#about"><strong>ABOUT</strong></Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/#education"><strong>EDUCATION</strong></Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/#experience"><strong>EXPERIENCES</strong></Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/#project"><strong>PROJECTS</strong></Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="https://docs.google.com/document/d/1Q7v9_3jaVtGfpa6nyZNFBDAd0O0u5H9u/export?format=pdf"><strong>RESUME</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HomePageNavBar;