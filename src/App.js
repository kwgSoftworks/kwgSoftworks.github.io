import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact} />
            <Route
                render={() => <Redirect to={{ pathname: "/" }} />}
              />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
