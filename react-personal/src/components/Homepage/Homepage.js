import React from 'react';
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Project from '../Project/Project'
import About from '../About/About'
import Footer from '../Footer/Footer'
import ReactTypingEffect from 'react-typing-effect';
import Card from 'react-bootstrap/Card';
import "./Homepage.css"
import Container from 'react-bootstrap/Container';


class Homepage extends React.Component {
  render() {
    return <>
      <div className='backgroundHomePage' >
        <Container>
          <Card className="noBorder" bg="transparent" style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "3rem", border: "none" }}>
            <ReactTypingEffect style={{ fontWeight: "bold" }}
              text={["print(\"Hello World\")", "I'm Taren!", "Welcome :)"]}
              cursorRenderer={cursor => <h1>{cursor}</h1>}
              displayTextRenderer={(text) => {
                return (
                  <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                    {text}
                  </h1>
                );
              }}
            />
          </Card>
        </Container>
      </div >
      <About />
      <Education />
      <Experience />
      <Project />
      <Footer />

    </>
  }
}


export default Homepage;
