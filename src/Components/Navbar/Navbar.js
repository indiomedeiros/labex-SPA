import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonCreate } from "../../Pages/CreateTripPage/styledCreateTripPage";
import { ButtonLabex, ButtonNav, Header, Span } from "./styledNavbar";

export default function Navbar() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const goToPage = (path) => {
    history.push(path);
  };
  const logout = (path) => {
    localStorage.removeItem("token");
    history.push(path);
  };

  return (
    <Header>
      <div>
        <ButtonLabex
          onClick={() => {
            goToPage("/");
          }}
        >
          {" "}
          <Span>LAB</Span>EX{" "}
        </ButtonLabex>
      </div>
      <div>
        <ButtonNav
          onClick={() => {
            goToPage("/");
          }}
        >
          Home
        </ButtonNav>
        <ButtonNav
          onClick={() => {
            goToPage("/trips/list");
          }}
        >
          Viagens
        </ButtonNav>
        <ButtonNav
          onClick={() => {
            goToPage("/application-form");
          }}
        >
          Candidate-se
        </ButtonNav>
        {!token ? (
          <ButtonNav
            onClick={() => {
              goToPage("/login");
            }}
          >
            Login
          </ButtonNav>
        ) : (
          <ButtonNav
            name="sair"
            onClick={() => {
              logout("/login");
            }}
          >
            Sair
          </ButtonNav>
        )}
        {token ? (
          <ButtonCreate
            onClick={() => {
              goToPage("/trips/create");
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
