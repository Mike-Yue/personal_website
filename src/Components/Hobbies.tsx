import {Card, CardGroup, Button} from 'react-bootstrap'
import React from 'react';
import hobbies from '../images/hobbies.jpeg'

export default function Hobbies(){
  return (
    <div id="hobbies">
      <br />
      <br />
      <br />
      <CardGroup>
        <Card bg="light" border="info">
          <Card.Img variant="top" src={hobbies} />
        </Card>
        <Card bg="light" border="info">
          <Card.Body>
            <Card.Title>
              Extracurricular Activities
            </Card.Title>
            <Card.Text>
              <h6>Hackathons</h6>
              <p>
                I've participated in hackathons such as NwHacks 2019. I enjoy the rapid-fire development that's done, as it's a welcome change of pace
                from the more rigid, guided development that's done during internships.
              </p>
              <h6>PC Building</h6>
              <p>
                Over the last 3 years, I've built 4 custom desktop computers for myself as well as created custom parts lists for friends. The motto 
                "it's cheaper to do it yourself" 100% applies here. As such, building computers satisfies both my love to tinker with parts and my desire to
                maximize performance given set constraints (in this case, a set budget). My current build is small enough to fit inside my carry-on luggage, 
                which I built for the express purpose of moving around the world during internships. Check out my build below!
              </p>
              <p><a href='https://ca.pcpartpicker.com/list/Qv8RfH' target="_blank"><Button>View Parts List</Button></a></p>
              <h6>Table Tennis</h6>
              <p>
                I started playing table tennis when I was 10 years old, and I was on the provincial team all throughout middle school and high school. I won
                multiple medals at Nationals, and qualified for the National Youth team for several years.
                At UBC, I joined the school team as both a player and a coach, and helped the team qualify for their first ever National Collegiate Championships
                in 2017.
              </p>

            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}