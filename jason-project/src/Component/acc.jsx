import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Resume from '/src/assets/Resume_icon.jpg';
export function BasicExample() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <h1>Highlighted Skills</h1>
      <br></br>
      <Accordion defaultActiveKey="0" style={{ width: '300px' }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Detail-oriented</Accordion.Header>
          <Accordion.Body>
            When given any task, I pay great attention to detail by taking the time to understand.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>Team Player</Accordion.Header>
          <Accordion.Body>
            I work well in teams. I believe working in teams is the best way to gain hands-on experience in whatever skills you want to master.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Strong Communication Skills</Accordion.Header>
          <Accordion.Body>
            I effectively communicate with others.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br>
      </br>
    </div>
  );
}

export function Box() {
  const handleDownload = () => {
     // The URL of the file you want to download
     const fileUrl = 'src/assets/Jason Ramjattan - resume.pdf';
     const link = document.createElement('a');
     link.href = fileUrl;
     link.download = 'Jason Ramjattan - resume.pdf';
     link.click();
  }
    return (
      <div>
      <div className= "d-flex justify-content-center align-items-center" style={{ height: '70vh'}}>
       
      
      <Card style={{ width: '35rem'}}>
        <Card.Img variant="top" src={Resume} />
        <Card.Body>
          <Card.Title>My Resume</Card.Title>
          <Card.Text>
            This resume showcases my work experience and skills.
          </Card.Text>
          <Button variant="primary" onClick={handleDownload}> 
            Click to download</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
    );
  }
  
  export function Layout() {
    return (
      <Container>
        <Row className="mb-4">
          <Col>
            <BasicExample />
          </Col>
        </Row>
        <Row>
          <Col>
            <Box />
          </Col>
        </Row>
      </Container>
    );
  }

