import React from 'react';
import Header from './Header'
import QuestControl from './QuestControl.js';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Container style={{backgroundColor: 'grey', marginTop: '150px'}}>
        <Header />
        <QuestControl />
      </Container>
    </React.Fragment>
  );
}

export default App;