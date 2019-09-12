import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import Projects from './projects';

const App = (props) => {
  return (
    <div>
      <h1>REACT COMPONENT RENDERING</h1>
    </div>
  )
}

const routing = (
  <Router>
    <HashRouter basename="/">
      <div>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
      </div>
    </HashRouter>
  </Router>
)

ReactDOM.render(<routing />, document.getElementById('react-app'));