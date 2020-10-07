import React from 'react';
import Header from './Header'
import QuestControl from './QuestControl.js';
import { Container } from 'react-bootstrap';
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <Container style={{backgroundColor: 'grey', marginTop: '150px'}}>
            <QuestControl />
          </Container>
        </Route>
      </Switch>
    </Router>

    // <React.Fragment>
    //   <Container style={{backgroundColor: 'grey', marginTop: '150px'}}>
    //     <Header />
    //     <QuestControl />
    //   </Container>
    // </React.Fragment>
  );
}

export default App;