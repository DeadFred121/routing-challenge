import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import NavLinks from './NavLinks';
import ContentSwitch from './ContentSwitch';

const MainApp = () => (
  <Router>
    <div className="App">
      <div>
        <NavLinks />

        <hr />

        <ContentSwitch />
      </div>
    </div>
  </Router>
)

export default MainApp;
