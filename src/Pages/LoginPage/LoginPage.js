import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Title } from "../../Assents/color/ColorItems";
import {
  ButtonLogin,
  Div,
  DivChild,
  Img,
  Span,
  useStyles,
} from "./styledLoginPage";

export default function LoginPage() {
  const classes = useStyles();
  const [form, setForm] = useState({ email: "", password: "" });
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    token ? history.push("/trips/create") : history.push("/login");
  }, [history]);

  function onSubmitForm(event) {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };

    //Para testar:
    //login: adm@ex.com.br
    //password: 123456
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/trips/create");
      })
      .catch((error) => {});
  }

  const handleInput = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Div>
      <Img
        src={
          "https://s1.1zoom.me/big3/156/Surface_of_planets_Cosmonauts_Helmet_519590_5200x3250.jpg"
        }
      />
      <DivChild>
        <form onSubmit={onSubmitForm} className={classes.root}>
          <div>
            <Title>
              <Span>Login</Span>AdmEX
            </Title>
          </div>

          <div>
            <TextField
              label="E-mail"
              variant="outlined"
              size="small"
              type="email"
              onChange={handleInput}
              value={form.email}
              name={"email"}
              required
            />
          </div>

          <div>
            <TextField
              label="Senha"
              variant="outlined"
              size="small"
              type="password"
              onChange={handleInput}
              value={form.password}
              name={"password"}
              required
            />
          </div>

          <ButtonLogin>login</ButtonLogin>
        </form>
      </DivChild>
    </Div>
  );
}
