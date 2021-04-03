import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Title } from "../../Assents/color/ColorItems";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import PlanetSelect from "../../Components/PlanetSelect/PlanetSelect";
import { RequestPost } from "../../Requests/Requests";
import {
  ButtonCreate,
  Div,
  DivChild,
  DivSelect,
  Img,
  Span,
  useStyles,
} from "./styledCreateTripPage";

export default function CreateTripPage() {
  const [messageForm, setMessageForm] = useState(0);
  const [form, setForm] = useState();

  useProtectedPage();
  const classes = useStyles();

  const handleInput = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
    setMessageForm(0);
  };

  const createTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips`;
    const header = { headers: { auth: localStorage.getItem("token") } };
    RequestPost(url, body, header);

    setMessageForm(1);
  };

  return (
    <Div>
      <Img
        src={
          "https://s1.1zoom.me/big3/260/Alien_Covenant_Starship_Ships_532194_4000x2000.jpg"
        }
      />
      <DivChild>
        <form onSubmit={createTrip} className={classes.root}>
          <div>
            <Title>
              <Span>Criar Viagem</Span>EX
            </Title>
          </div>

          <div>
            <TextField
              pattern={"[A-Za-z]{5}"}
              label="Nome da viagem"
              variant="outlined"
              size="small"
              type="text"
              onChange={handleInput}
              name={"name"}
              required
            />
          </div>

          <div>
            <TextField
              variant="outlined"
              size="small"
              type="date"
              onChange={handleInput}
              name={"date"}
              required
            />
          </div>

          <div>
            <TextField
              pattern={"[A-Za-z]{30}"}
              label="Descrição"
              variant="outlined"
              size="small"
              type="text"
              onChange={handleInput}
              name={"description"}
              required
            />
          </div>

          <div>
            <TextField
              min="50"
              label="Duração em dias"
              variant="outlined"
              size="small"
              type="number"
              onChange={handleInput}
              name={"durationInDays"}
              required
            />
          </div>

          <DivSelect>
            <PlanetSelect name="planet" onchange={handleInput} required />
          </DivSelect>

          <ButtonCreate>Criar viagem</ButtonCreate>
          {messageForm === 1 ? <p>Seja bem vindo a viagem, tripulante!</p> : ""}
        </form>
      </DivChild>
    </Div>
  );
}
