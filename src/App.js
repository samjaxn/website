import React from 'react';
import './App.css';
import Main from './components/Main';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container fluid={true} className="containerStyle">
      <Main />
    </Container>
  );
}

export default App;
