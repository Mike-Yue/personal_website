import React from 'react';
import { Homepage, Languages, Hobbies, Navigation } from './Components'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

const App: React.FC = () => {

  function Home(){
    return (
      <Container>
        <Navigation />
        <Homepage />
        <Languages />
        <Hobbies />
      </Container>
    )
  }

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
