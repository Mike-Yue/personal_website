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
        <Card border="info">
            <Card.Img variant="top" src={hobbies} />
            <Card.Body>
              <Card.Title>
                Hobbies
              </Card.Title>
              <Card.Text>
                <p>
                  In my free time, I enjoy building custom computers from the ground up. I see it as a challenge to beat out the 
                  price to performance ratio of prebuilt computers sold by companies such as Best Buy or Canada Computers.

                  Due to the need to relocate frequently due to internships, my current PC build is housed within a Fractal Design Node 202 case, which 
                  is small enough to fit within my carry-on. Check out my parts list below!
                </p>
                <a href='https://ca.pcpartpicker.com/list/Qv8RfH' target="_blank"><Button>View Parts List</Button></a>
              </Card.Text>
            </Card.Body>
          </Card>
        <Card bg="light" border="info">
          <Card.Img variant="top" src={myself} />
          <Card.Body>
            <Card.Title>
              About Me
            </Card.Title>
            <Card.Text>
              <p>
                Hello and welcome to my page! My name is Mike Yue, and I am a 4th year Computer Engineering student at UBC. I will be graduating with my Bachelors of Applied Science in May 2020, and am actively looking
                for full time opportunities in software development. Check out my Github and Linkedin below!
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
                I have interned as a software developer at companies such as Shopify and BC Cancer Research Center, as well 
                as competed in hackathons such as NwHacks 2019. The experiences I've gained include simple scripting, interfacing with REST/GraphQL APIs, front-end/back-end development, and 
                continuous integration/continuous deployment. Currently, my preferred languages are Python and Javascript.
                
              </p>
              <a href='./resume.pdf' download><Button>Download My Resume</Button></a>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}
