import {Card, Image, CardDeck, Button} from 'react-bootstrap'
import React from 'react';

import myself from '../images/picture.jpg'
import coding from '../images/programming.jpeg'
import hobbies from '../images/hobbies.jpeg'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

export default function Homepage(){
  return(
    <div>
      <br />
      <CardDeck>
        <Card bg="light" border="info">
          <Card.Img variant="top" src={myself} />
          <Card.Body>
            <Card.Title>
              About Me
            </Card.Title>
            <Card.Text>
              <p>
                Hey, welcome to my page! My name is Mike Yue, and I am a 4th year Computer Engineering student at UBC. I will be graduating with my Bachelors of Applied Science in May 2020, and will be looking
                for full time opportunities in software development starting at that time. Check out my Github and Linkedin below!
              </p>
              <a href="https://www.github.com/mike-yue" target="_blank"><Button variant="light"><img src={github} /></Button></a>
              <a href="https://www.linkedin.com/in/mike-yue/" target="_blank"> <Button variant="light" ><img src={linkedin} /></Button></a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="light" border="info">
          <Card.Img variant="top" src={coding}/>
          <Card.Body>
            <Card.Title>
              Technical Experience
            </Card.Title>
            <Card.Text>
              <p>
                I have interned at 3 different companies (Shopify, BC Cancer Research Center, and UBC Center for Learning and Technology), as well 
                as competed in hackathons such as NwHacks 2019. The experience I've gained from these internships include simple scripting, 
                full stack development, devOps, and API interactions. The languages I am currently most comfortable with are Python and Javascript.
              </p>
              <a href='./resume.pdf' download><Button>Download My Resume</Button></a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="info">
          <Card.Img variant="top" src={hobbies} />
          <Card.Body>
            <Card.Title>
              Hobbies
            </Card.Title>
            <Card.Text>
              <p>
                In my off time, I enjoy building computers as well as reading up on the latest technological advancements in the computing sector. I've built in ATX and mATX cases, 
                and my current build is a mini-ITX contained in a Node 202 so I can fly around the country with it.
              </p>
              <a href='https://ca.pcpartpicker.com/list/Qv8RfH' target="_blank"><Button>Check out my PC Build List</Button></a>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}
