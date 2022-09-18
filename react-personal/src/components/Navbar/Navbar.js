import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Navbar/Navbar.css"

function HomePageNavBar() {
    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='m-auto justify-content-center' activeKey="/">
                        <Nav.Link href="/"><strong>HOME</strong></Nav.Link>
                        <Nav.Link href="/#about"><strong>ABOUT</strong></Nav.Link>
                        <Nav.Link href="/#education"><strong>EDUCATION</strong></Nav.Link>
                        <Nav.Link href="/#experience"><strong>EXPERIENCES</strong></Nav.Link>
                        <Nav.Link href="/#project"><strong>PROJECTS</strong></Nav.Link>
                        <Nav.Link href="https://docs.google.com/document/d/1Q7v9_3jaVtGfpa6nyZNFBDAd0O0u5H9u/export?format=pdf"><strong>RESUME</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HomePageNavBar;