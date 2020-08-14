import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.css';
import ImdbComponent from './components/imdb';

function App() {
  return (
    <Router>
      <Switch>
        <ImdbComponent></ImdbComponent>
      </Switch>
    </Router>
  );
}

export default App;
