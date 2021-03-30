
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from '../Components/Navbar/Navbar'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripPage from '../Pages/ListTripsPage/ListTripsPage'
import LoginPage from '../Pages/LoginPage/LoginPage'

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                //Para o usuário escolher entre login e formulário de aplicação
                <Route exact path="/">
                    <Navbar/>
                    <HomePage/>
                </Route>

                //Para qualquer usuário poder se increver
                <Route exact path="/application-form">
                    <Navbar/>
                    <ApplicationFormPage/>
                </Route>

                //Para o admin poder se logar
                <Route exact path="/login">
                    <Navbar/>
                    <LoginPage/>
                </Route>

                //Para criarmos viagens
                <Route exact path="/trips/create">
                    <Navbar/>
                    <CreateTripPage/>
                </Route>

                //Para vermos todas as viagens
                <Route exact path="/trips/list">
                    <Navbar/>
                    <ListTripPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}