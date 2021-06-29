import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './composant/contact/contact';
import About from './composant/about/about';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = ({}) => {
  return (
    <Router>
      <div>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
