import React, { Fragment, useEffect } from "react";
import './assets/styles/app/app.css';
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import Extra from "./pages/Extra";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [])
  return (
    <Fragment>
      <Nav />
      <ToastContainer/>
      <Switch>
        <Route exact path="/">
          <Info />
        </Route>
        <Route path="/info" > 
          <Info />
        </Route>
        <Route path="/extra"> 
          <Extra />
        </Route>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </Fragment>
  )
};

export default App;
