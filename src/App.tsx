import React from 'react';
import { Homepage, AboutMe } from './Components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

const App: React.FC = () => {

  function Home(){
    return (
      <Container>
        <Homepage />
      </Container>
    )
  }

  function About(){
    return (
      <Container>
        <AboutMe />
      </Container>
    )
  }
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
