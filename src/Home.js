import React from 'react';
import ReactDom from 'react-dom';
import Background from './images/background.jpg'
import Mercedes from './images/mercedes.jpeg'
import Audi from './images/audi.jpeg'
import BMW from './images/BMW.jpg'
import Link from 'react-router-dom';
import {Row,Button,Col,Container,Nav,Navbar,Card,NavDropdown} from 'react-bootstrap'


function Home() {
return(

<div>
<Navbar bg="dark" variant="dark">
    <Container>
   <Nav className="me-auto">
     
      <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="List of Products" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3"> Mercedes</NavDropdown.Item>
          <NavDropdown.Item href="#action4"> Audi</NavDropdown.Item>
          <NavDropdown.Item href="#action4">BMW </NavDropdown.Item>
     </NavDropdown>
    </Nav>
    </Container>
  </Navbar>
  <img src={Background}></img>   
    <br></br><br></br> 
    <h2 id="ab">FIND THE RIGHT CAR</h2>
    <br></br>
    <br></br>   
  
  <Container>
  <Row>
    <Col><Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={Mercedes} />
  <Card.Body>
    <Card.Title>Mercedes</Card.Title>
    <Card.Text>
    Rs.44.00 - 48.10 Lakh*</Card.Text> 
   
  <Button onClick={event =>  window.location.href='./C_info'} > know more</Button>    
 </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Audi} />
  <Card.Body>
    <Card.Title>Audi</Card.Title>
    <Card.Text>
    ₹ 35.00 Lakhonwards
    </Card.Text>
    <Button onClick={event =>  window.location.href='./Caudi'}>Know more</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={BMW} />
  <Card.Body>
    <Card.Title>BMW</Card.Title>
    <Card.Text>
    ₹ 45.36 Lakhonwards
    </Card.Text>
    <Button onClick={event =>  window.location.href='./Cbmw'}>Know more</Button>
  </Card.Body>
</Card></Col>
  </Row>


  </Container>
</div>


);
}

export default Home;