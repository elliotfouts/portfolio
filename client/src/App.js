import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from './components/index';


function App() {
  return (
    <Router>
        <CssBaseline>
          <Switch>
            <Route path="*">
              <Index />
            </Route>
          </Switch>
        </CssBaseline>
    </Router>
  );
}

export default App;
