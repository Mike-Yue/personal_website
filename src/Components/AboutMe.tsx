import {Button, Card} from 'react-bootstrap'
import React from 'react';
import NavBar from './Navbar'

export default function AboutMe(){
  return(
    <div>
    <NavBar />
      <Card>
      <Card.Body>
          <Card.Text>
            I'm a 4th year UBC student studying Computer Engineering
          </Card.Text>
      </Card.Body>
      </Card>
    </div>
  )
}
