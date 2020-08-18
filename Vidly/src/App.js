import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Moives from "./components/moives";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFounded from "./components/NotFounded";
import NavBar from "./components/navBar";
import MoviesForm from "./components/moiveForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
import RegisterForm from "./components/registerForm";
import SearchBox from "./components/searchBox";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/moives/:id" component={MoviesForm}></Route>
          <Route path="/moives" component={Moives}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFounded}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/movies/:id" component={MoviesForm}></Route>
          <Redirect from="/" exact to="/moives" />
          <Redirect to="/not-found" />
        </Switch>
        {/* <Moives /> */}
      </main>
    </React.Fragment>
  );
}

export default App;
