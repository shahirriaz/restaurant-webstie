import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/pages/Cart';
import Order from './components/pages/Order';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/order' component={Order} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
