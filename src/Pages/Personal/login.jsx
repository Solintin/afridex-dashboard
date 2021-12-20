import React from "react";
import { Route } from "react-router-dom";
import Login from "../Components/Login";

const login = () => {
  return (
    <div>
      <Route exact path="/Login" component={Login}></Route>
    </div>
  );
};

export default login;
