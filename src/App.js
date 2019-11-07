import React from 'react';
import './App.css';
import SalonDetails from './components/salon-details';
import SalonList from './components/salon-list';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {  
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/salon-details/:id' component={SalonDetails} />
            <Route path="/" exact component={SalonList} />
          </Switch>
        </Router>
      </div>
    );
  }

export default App;
