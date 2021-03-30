import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {Button, Title} from '../Styled/ColorItems'


const Img = styled.img `
  width: 100vw;
  height: 95vh;
  filter: brightness(0.6);
`

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 200,
      background: "white",
   
    },
  },
}));

const Div= styled.div `
      
    display:flex;
    margin: auto;
    border-radius: 10px;
    flex-direction:column;
    width:300px;
    align-items:center;
    justify-content: center;
    background-color:#F5F5F5;
`

const ButtonLogin = styled(Button) `
    
    font-size: 1.2em;
    padding:5px;
    width:200px;
    margin-top:10px;
`
const DivChild = styled.div `

  margin-left: -66vw;
  position: absolute;
  border: 1px solid white;
  width: 300px;
  text-align: center;
  padding-bottom: 100px;
  background-color: white;
  border-radius: 30px;
`
const Span = styled.span `
    color: #102b89;
    font-weight:lighter;
`

export default function LoginPage(){
  const classes = useStyles();
  const [form, setForm] = useState({email: "", password: ""})
  const history = useHistory()
 
  
  useEffect(() => {
      const token = localStorage.getItem("token")

      //redireciona a página ao logar-se
      token? history.push("/trips/create") : history.push("/login")
  }, [history])

  
  function onSubmitForm(event) {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };
    
    //Para testar:
    //login: adm@ex.com.br
    //password: 123456
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/login", body)
    .then(response=> {
      localStorage.setItem("token", response.data.token)
      history.push("/trips/create")
    })
    .catch(error => {

    })
    
  }

//inputs controlados: email e senha
const handleInput = (event) => {
  const {value, name} = event.target
  setForm({...form, [name]: value})
  
}

  return (
  <Div>
      {/* imagem de fundo */}
     <Img src={"https://s1.1zoom.me/big3/156/Surface_of_planets_Cosmonauts_Helmet_519590_5200x3250.jpg"}/>
    <DivChild>
    <form onSubmit={onSubmitForm} className={classes.root} >
      <div>
          <Title><Span>Login</Span>AdmEX</Title>
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
          type= "password"
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
