import React from 'react';
import ReactDom from 'react-dom';
import {Row,Button,Col,Container,Nav,Navbar,Card,NavDropdown, Table} from 'react-bootstrap'


function C_info() {
return(

<div className="info1">

<Container className="c_info_container" >
  <Row>
    <Col>
    <div class="card">
  <h2>Mercedes-Benz EQC</h2>
  <p>The price of Mercedes-Benz EQC starts at Rs. 1.06 Cr and goes upto Rs. 1.06 Cr.
         Mercedes-Benz EQC is offered in 1 variants - the base model of EQC is 400 4MATIC.
   the top variant Mercedes-Benz EQC 400 4MATIC which comes at a price tag of Rs. 1.06 Cr.</p>
</div>
   <br></br>
   <h1>Features</h1>
   <br></br>
   <div class="card">
  <h2 id="specific">Specification of Mercedes-Benz EQC</h2>
  <br></br>
  <table className="table">
                    <tbody>
                        <tr>
                            <th>Specification</th>
                            <th>Features</th>
                            
                        </tr>
                        <tr>
                            <th>Fuel type</th>
                            <th>Electric</th>
                            </tr>
                            <tr><th>Max Torque (nm@rpm)</th>
                            <th>760Nm</th></tr>
                            
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
</div>


);
}

export default C_info;