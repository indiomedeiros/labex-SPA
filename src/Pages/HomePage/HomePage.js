import React from "react";
import { useHistory } from "react-router-dom";
import { Body, Button, H1, Img } from "./styledHomePage";

export default function HomePage() {
  const history = useHistory();

  const goToPage = (path) => {
    history.push(path);
  };

  return (
    <Body>
      <Img
        src={
          "https://s1.1zoom.me/b4647/584/Cosmonauts_Surface_of_planets_525931_1920x1080.jpg"
        }
      />
      <H1>
        Embarque com a LABEX <br />O Universo espera por você!
      </H1>
      <Button
        onClick={() => {
          goToPage("/trips/list");
        }}
      >
        Quero ver todas as viagens
      </Button>
    </Body>
  );
}
