import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './components/index.component';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container bg-light py-5">
          <h2>Tiki cart demo</h2> <br />
          <Switch>
            <Route path='/' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;