import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
    <div>
      <h1>REACT COMPONENT RENDERING</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('react-app'));