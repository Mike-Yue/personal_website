import {Card, Image, CardDeck, Button} from 'react-bootstrap'
import React from 'react';
import {NavBar} from './'

import myself from '../images/picture.jpg'
import coding from '../images/programming.jpeg'
import hobbies from '../images/hobbies.jpeg'

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
                Hey! I'm a 4th year Computer Engineering student at UBC. I am set to graduate in May 2020, and will be looking
                for full time opportunities starting at that time.
              </p>
              <Button href="/about">Learn More</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="light" border="info">
          <Card.Img variant="top" src={coding}/>
          <Card.Body>
            <Card.Title>
              Technical Experiences
            </Card.Title>
            <Card.Text>
              <p>
                I have interned at 3 different companies (Shopify, BC Cancer Research Center, and UBC Center for Learning and Technology), as well 
                as competed in hackathons such as NwHacks 2019. My strongest languages at the moment are Python and Javascript
              </p>
              <Button href="/experiences">Learn More</Button>
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
                In my off time, I enjoy building computers as well as reading up on the latest technological advancements in the computing sector.
                I also play badminton and table tennis, and play games such as CSGO and Apex Legends
              </p>
            </Card.Text>
            <Button href="/hobbies">Learn More</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}
