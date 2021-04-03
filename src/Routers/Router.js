import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListTripPage from "../Pages/ListTripsPage/ListTripsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <HomePage />
        </Route>
        <Route exact path="/application-form">
          <Navbar />
          <ApplicationFormPage />
        </Route>
        <Route exact path="/login">
          <Navbar />
          <LoginPage />
        </Route>
        <Route exact path="/trips/create">
          <Navbar />
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <Navbar />
          <ListTripPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
