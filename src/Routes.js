import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//PAGES
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}
