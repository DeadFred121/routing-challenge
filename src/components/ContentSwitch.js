import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'
import About from './About';
import Topics from './Topics';
import Contact from './Contact';
import Home from './Home';
import NoMatch from './NoMatch';


const ContentSwitch = () => (
  <Switch>
    <Route path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    <Route component={NoMatch} />
  </Switch>
)

export default ContentSwitch