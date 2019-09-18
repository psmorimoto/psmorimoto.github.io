import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import Projects from './projects.jsx';

const Index = (props) => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const About = (props) => {
  return (
    <h2>About</h2>
  )
}

const Routing = (props) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  )
}


ReactDOM.render(<Routing />, document.getElementById('react-app'));

{/* <Route exact path="/" component={App} />
<Route path={process.env.PUBLIC_URL + '/'} component={Projects} /> */}