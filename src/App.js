import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
// import { connect } from 'react-redux'
import { HashRouter, Route, Switch, Redirect  } from 'react-router-dom'
//Components
import Landing from './Components/Landing'
import Header from './Components/Header'
import Projects from './Components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
     <HashRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/projects" component={Projects} />
            {/* <Route path="/" component={Landing} /> */}
          </Switch>
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
