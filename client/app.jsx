import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import Projects from './projects.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Experience from './experience.jsx';
import Contact from './contact.jsx';

const Routing = (props) => {
  return (
    <Router>
      <div>
        <nav>
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Paul Morimoto</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/projects/">Projects</Link></li>
                <li><Link to="/experience/">Experience</Link></li>
                <li><Link to="/contact/">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/projects/" component={Projects} />
        <Route path="/experience/" component={Experience} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  )
}


ReactDOM.render(<Routing />, document.getElementById('react-app'));

