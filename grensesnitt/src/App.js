import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/pages/Menu";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import PlaceOrder from "./components/pages/PlaceOrder";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/place-order" exact component={PlaceOrder} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
