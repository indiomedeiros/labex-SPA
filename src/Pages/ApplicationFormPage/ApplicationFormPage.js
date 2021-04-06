import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Country from "../../Components/CountrySelect/CountrySelect";
import TripIdSelect from "../../Components/TripIdSelect/TripIdSelect";
import { Title } from "../../Assents/color/ColorItems";
import { RequestPost } from "../../Requests/Requests";
import {
  ButtonSubinsc,
  Div,
  DivChild,
  DivSelect,
  Img,
  Span,
  useStyles,
} from "./styledApplicationForm";

export default function ApplicationFormPage() {
  const [form, setForm] = useState();
  const [messageForm, setMessageForm] = useState(0);
  const classes = useStyles();

  const handleInput = (event) => {
    const { value, name, id } = event.target;
    setMessageForm(0);
    setForm({ ...form, [name]: value });
  };

  function onSubmitForm(event) {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips/${form.id}/apply`;
    RequestPost(url, body);
    setMessageForm(1);
  }

  return (
    <Div>
      <Img src={"https://s1.1zoom.me/big3/157/374615-blackangel.jpg"} />
      <DivChild>
        <form onSubmit={onSubmitForm} className={classes.root}>
          <div>
            <Title>
              <Span>Candidato</Span>EX
            </Title>
          </div>

          <div>
            <TextField
              pattern={"[A-Za-z]{3,}"}
              label="nome"
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
              min="18"
              label="idade"
              variant="outlined"
              size="small"
              type="number"
              onChange={handleInput}
              name={"age"}
              required
            />
          </div>

          <div>
            <TextField
              pattern={"[A-Za-z]{30,}"}
              label="mensagem"
              variant="outlined"
              size="small"
              type="text"
              onChange={handleInput}
              name={"applicationText"}
              required
            />
          </div>

          <div>
            <TextField
              pattern={"[A-Za-z]{10,}"}
              label="Profissão"
              variant="outlined"
              size="small"
              type="text"
              onChange={handleInput}
              name={"profession"}
              required
            />
          </div>

          <DivSelect>
            <Country name="country" onchange={handleInput} required />
            <TripIdSelect name="trip" onchange={handleInput} required />
          </DivSelect>

          <ButtonSubinsc>inscrever-se</ButtonSubinsc>
          {messageForm === 1 ? <p>Seja bem vindo a viagem, tripulante!</p> : ""}
        </form>
      </DivChild>
    </Div>
  );
}
