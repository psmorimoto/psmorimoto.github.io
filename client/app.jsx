import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';
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
    <div>
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
      </BrowserRouter>
    </div>
  </Router>
)

ReactDOM.render(<routing />, document.getElementById('react-app'));