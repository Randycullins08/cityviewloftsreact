import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from './HomePage';
import PhotosPage from './PhotosPage';
import Footer from './FooterComponent';
import AmenitiesPage from './AmenitiesPage';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/photos" component={PhotosPage}/>
          <Route exact path="/amenities" component={AmenitiesPage}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
