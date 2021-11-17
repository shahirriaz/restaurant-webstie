import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/pages/Cart';
import Bestill from './components/pages/Bestill';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/bestill' component={Bestill} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
