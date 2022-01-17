import React from 'react';
import ReactDOM from 'react'
import {Row,Button,Col,Container,Nav,Navbar,Card,NavDropdown} from 'react-bootstrap'


function Cbmw() {

    return(
        <Container className="c_info_container" >
        <Row>
        <Col>
        <div class="card">
      <h2>BMW 3 Series</h2>
      <p>The BMW 3 Series has 1 Diesel Engine and 2 Petrol Engine on offer. The Diesel engine is 1995 cc while the Petrol engine is 1998 cc and 2998 cc .
           It is available with Automatic transmission.Depending upon the variant and fuel type the 3 Series has a mileage of 11.86 to 20.37 kmpl .
            Ground clearance of 3 Series is 165mm.</p>
    </div>
       <br></br>
       <h1>Features</h1>
       <br></br>
       <div class="card">
      <h2 id="specific">Specification of BMW 3</h2>
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
                                <th>3500Nm@1850-5000rpm</th></tr>
                                
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
export default Cbmw;