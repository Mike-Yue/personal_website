import {Card, Button, CardGroup} from 'react-bootstrap'
import React from 'react';

import myself from '../images/profilepic.jpg'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

export default function Homepage(){
  return(
    <div id="about">
      <br />
      <br />
      <CardGroup>
        <Card bg="light" border="info">
          <Card.Img variant="top" src={myself} />
          <Card.Footer>
            <small className="text-muted">Last day @ Shopify (August 2019)</small>
          </Card.Footer>
        </Card>
        <Card bg="light" border="info">
          <Card.Body>
            <Card.Title>
              About Me
            </Card.Title>
            <Card.Text>
              <p>
                Welcome to my website! My name is Mike Yue, and I am a Computer Engineering student finishing my final year at the University
                of British Columbia (UBC). I've just recently just finished 16 months of internships, where I worked at companies such as 
                <a href="https://www.shopify.ca/" target="_blank"> Shopify </a> and the 
                <a href="https://shahlab.ca/" target="_blank"> Shah Computational Cancer Research Lab </a>.
              </p>
              <p>
                The experiences I've gained at these internships include (but aren't limited to):
                <ul>
                  <li>Backend Development (Django, Ruby on Rails)</li>
                  <li>Frontend Development (ReactJs)</li>
                  <li>REST and GraphQL APIs</li>
                  <li>CI/CD (Jenkins, BuildKite, Shipit)</li>
                </ul>
              </p>
              <p>Check out my Linkedin and Github profiles, or download my resume!</p>
              <a href="https://www.github.com/mike-yue" target="_blank"><Button variant="light"><img src={github} /></Button></a>
              <a href="https://www.linkedin.com/in/mike-yue/" target="_blank"> <Button variant="light" ><img src={linkedin} /></Button></a>
              <span>&nbsp; &nbsp; &nbsp;</span>
              <a href='./resume.pdf' download><Button>My Resume</Button></a>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}
