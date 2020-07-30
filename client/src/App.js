import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home, Work, Contact} from './components/index';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <CssBaseline>
          <Navbar>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
          </Navbar>
        </CssBaseline>
    </Router>
  );
}

export default App;
