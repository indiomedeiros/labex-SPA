import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToApplicationFormPage,
  goToCreateTripPage,
  goToHomePage,
  goToListTripPage,
  goToLoginPage,
} from "../../Coordinator/coordinator";
import { ButtonCreate } from "../../Pages/CreateTripPage/styledCreateTripPage";
import { ButtonLabex, ButtonNav, Header, Span } from "./styledNavbar";

export default function Navbar() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    goToLoginPage();
  };

  return (
    <Header>
      <div>
        <ButtonLabex
          onClick={() => {
            goToHomePage(history);
          }}
        >
          {" "}
          <Span>LAB</Span>EX{" "}
        </ButtonLabex>
      </div>
      <div>
        <ButtonNav
          onClick={() => {
            goToHomePage(history);
          }}
        >
          Home
        </ButtonNav>
        <ButtonNav
          onClick={() => {
            goToListTripPage(history);
          }}
        >
          Viagens
        </ButtonNav>
        <ButtonNav
          onClick={() => {
            goToApplicationFormPage(history);
          }}
        >
          Candidate-se
        </ButtonNav>
        {!token ? (
          <ButtonNav
            onClick={() => {
              goToLoginPage(history);
            }}
          >
            Login
          </ButtonNav>
        ) : (
          <ButtonNav name="sair" onClick={logout}>
            Sair
          </ButtonNav>
        )}
        {token ? (
          <ButtonCreate
            onClick={() => {
              goToCreateTripPage(history);
            }}
          >
            Criar viagem
          </ButtonCreate>
        ) : (
          ""
        )}
      </div>
    </Header>
  );
}
