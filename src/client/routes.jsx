import React from "react";
import { Route } from "react-router";
import Home from "./components/home";
import TestComp from "./components/build-component";

export const routes = (<Route path="/" component={Home}>
  <Route path="test-comp" component={TestComp}/>
</Route>);
