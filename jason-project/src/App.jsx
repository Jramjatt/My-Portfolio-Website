import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homePage.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BasicExample, Box } from './Component/acc';
import Green_Lane from '/src/assets/Green_Lane.jpg';
import Mypic from '/src/assets/Mypic.jpg'
import UNH from '/src/assets/UNH.jpg'
import Coding from '/src/assets/Coding.jpg'
import ContactForm from './Component/Contact';
//import { Example } from './assets/fade';
//import Chatbot from './Component/Chatbot.jsx';

function Home() {
  const containerStyle = {
    border: '2px solid black', // Single border around all components
    padding: '20px', // Padding inside the border for spacing
    borderRadius: '10px', // Optional: rounds the corners of the border
    maxWidth: '80%', // Optional: limits the container width
    margin: 'auto', // Centers the container on the page
    backgroundColor: '#f9f9f9', // Optional: light background color inside the border
  };

  return (
    <>
      <div style={{ paddingTop: '60px' }}>
        <div style={containerStyle}>
          <h1 style={{ color: '#007bff' }}>My Portfolio</h1>
          <div style={{ paddingTop: '60px' }}>
            <h2>Hello, I'm Jason Ramjattan</h2>
            <h3>B.S Information Technology Student</h3>
            <h4 style={{ textAlign: 'justify' }}>3 Years of Experience</h4>
            <p>
              Studying at Kean University with the goal of gaining <br /> hands-on experience through practical application.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '60px' }}>
              <img
                src={Mypic}
                alt="Collaborating with classmates"
                style={{ maxWidth: '30%', maxHeight: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Bio() {
  return (
    <div style={{ paddingTop: '60px', maxWidth: '900px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>About Me</h1>

      <div style={styles.storySection}>
        <p style={styles.paragraph}>
          I am a B.S Information Technology student studying at Kean.
          I came into the university as a transfer student from the University of New Hampshire. Before attending Kean I 
          was a communications major.
        </p>
        <img src={UNH} alt="Campus life" style={styles.image} />
      </div>

      <div style={styles.storySection}>
        <img src={Coding} alt="Collaborating with classmates" style={styles.image} />
        <p style={styles.paragraph}>
          Coding in my tech courses challenged me beyond what I thought I could be capable of. I wish to become a network administrator so I can do backend work with operating systems.
        </p>
      </div>

      <div style={styles.storySection}>
        <p style={styles.paragraph}>
          Outside of school, I enjoy exploring new hobbies and expanding my knowledge in other areas, like digital art and game development. I believe that creativity fuels innovation, and these interests help me think outside the box when solving problems.
        </p>
        <img src={Green_Lane} alt="Exploring hobbies" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  storySection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // Ensures content stacks vertically on smaller screens
    gap: '20px', // Adds space between image and text
    margin: '20px 0',
    padding: '20px', // Adds inner space around the content
    border: '2px solid #007bff', // Border color and width
    borderRadius: '8px' // Rounded corners for the border
  },
  paragraph: {
    maxWidth: '400px',
    textAlign: 'center'
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '8px'
  }
};



function App() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '500px'}}>
      <Tabs
        defaultActiveKey="home"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="home" title="Home">
         <Home />
        </Tab>
        <Tab eventKey="profile" title="About">
        <Bio />
        </Tab>
        <Tab eventKey="longer-tab" title="Skills and Experience">
          <BasicExample />
          <Box />
        </Tab>
        <Tab eventKey="contact" title="Contact">
        <ContactForm />
        </Tab>
      </Tabs>
      </div>
    </>
  );
}

export default App;


/* Navbar Code
<Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#hobbies">Hobbies</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
      </Navbar>
*/

//Bio 
//Features
//Pricing
//FavoriteSpots
//BasicExample
//Box



