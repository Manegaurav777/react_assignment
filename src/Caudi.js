import React from 'react';
import ReactDOM from 'react'
import {Row,Button,Col,Container,Nav,Navbar,Card,NavDropdown} from 'react-bootstrap'


function Caudi() {

    return(
        <Container className="c_info_container" >
        <Row>
        <Col>
        <div class="card">
      <h2>Audi Q2</h2>
      <p>The Audi Q2 has 1 Petrol Engine on offer. The Petrol engine is 1984 cc . 
          It is available with Automatic transmission.Depending upon the variant and fuel type the Q2 has a mileage of 6.5 kmpl .
           The Q2 is a 5 seater 4 cylinder car and has length of 4318mm, width of 1805mm and a wheelbase of 2593mm.</p>
    </div>
       <br></br>
       <h1>Features</h1>
       <br></br>
       <div class="card">
      <h2 id="specific">Specification of Audi Q2</h2>
      <br></br>
      <table className="table">
                        <tbody>
                            <tr>
                                <th>Specification</th>
                                <th>Features</th>
                                
                            </tr>
                            <tr>
                                <th>Fuel type</th>
                                <th>Petrol</th>
                                </tr>
                                <tr><th>Max Torque (nm@rpm)</th>
                                <th>320nm@1500–4180rpm</th></tr>
                                
                                <tr> <th>TransmissionType</th>
                                <th>Automatic</th>
                                 </tr>
                                <th>Seating Capacity</th>
                                <th>5</th>
                                 
                           
                           
                        </tbody>
                    </table>
    </div>
        </Col>
        
      </Row>
      </Container>
    
    


    );
}
export default Caudi;