import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
