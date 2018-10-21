import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from "./containers/Home";
import MovieDetails from "./containers/MovieDetails";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:movieId" exact component={MovieDetails} />
    </Switch>
  </BrowserRouter>
);
export default Router;