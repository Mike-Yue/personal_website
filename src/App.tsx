import React from 'react';
import { Homepage} from './Components'
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

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
