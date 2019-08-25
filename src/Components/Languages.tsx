import {Card, ProgressBar, CardGroup} from 'react-bootstrap'
import React from 'react';
import coding from '../images/programming.jpeg'

export default function Languages(){
  return (
    <div id="exp">
      <br />
      <br />
      <br />
      <CardGroup>
        <Card bg="light" border="info">
          <Card.Img variant="top" src={coding} />
        </Card>
        <Card bg="light" border="info">
          <Card.Body>
            <Card.Title>
              Programming Language Fluency
            </Card.Title>
            <Card.Text>
              <h6>Python</h6>
              <ProgressBar variant="success" now={90} />
              <br />
              <h6>Javascript</h6>
              <ProgressBar variant="success" now={80} />
              <br />
              <h6>Ruby</h6>
              <ProgressBar now={70} />
              <br />
              <h6>C/C++</h6>
              <ProgressBar variant="warning" now={50} />
              <br />
              
              <h5>Other Technologies Fluency</h5>
              <h6>RESTful APIs</h6>
              <ProgressBar variant="success" now={90} />
              <br />
              <h6>GraphQL APIs</h6>
              <ProgressBar variant="success" now={75} />
              <br />
              <h6>Relational Databases</h6>
              <ProgressBar now={70} />
              <br />
              <h6>Continuous Integration/Deployment</h6>            
              <ProgressBar now={70} />
              <br />
              <h6>Docker Containerization</h6>
              <ProgressBar variant="warning" now={55} />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}