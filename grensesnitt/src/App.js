import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Order from "./components/pages/Order";
import Summary from "./components/pages/Summary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "GET_TOTALS",
    });
  }, [basket]);

  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
          <Route path="/summary" component={Summary} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
