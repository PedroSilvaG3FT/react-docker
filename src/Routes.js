import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//PAGES
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import RegisterUser from "./Pages/RegisterUser/RegisterUser";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home/:id" component={Home} />
      <Route path="/registerUser" component={RegisterUser} />
    </BrowserRouter>
  );
}
