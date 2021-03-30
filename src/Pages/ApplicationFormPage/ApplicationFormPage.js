import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import Country from '../Selects/CountrySelect';
import TripIdSelect from '../';
import { Button, Title } from '../Styled/ColorItems';
import { RequestPost } from '../../Requests/Requests';

const Img = styled.img `
  width: 100vw;
  height: 95vh;
 
`
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 300,
      background: "white"
    },
  },
}));

const Div= styled.div `
    display:flex;
    border-radius: 10px;
    align-items:center;
    justify-content: center;
    background-color:#F5F5F5;
`

const DivChild = styled.div `
  position: absolute;
  border: 1px solid white;
  color:#a5b1d9;
  width: 400px;
  text-align: center;
  padding-bottom: 100px;
  background-color: white;
  border-radius: 30px;
  margin-left: -66vw;
 
`
const ButtonSubinsc = styled(Button)`
    font-size: 1.2em;
    padding:5px;
    width:200px;
    margin-top:60px;
 
`
const DivSelect = styled.div `
    display:flex;
    width:300px;
    align-items: center;
    justify-content:space-between;
    margin-left: 50px;
`
const Span = styled.span `
    color: #102b89;
    font-weight: lighter;
`

export default function ApplicationFormPage(){
    const [form , setForm] = useState()
    const [messageForm, setMessageForm] =useState (0)
    const classes = useStyles();

    //controla os inputs
    const handleInput = (event) => {
        const {value, name, id} = event.target
        setMessageForm(0)
        setForm({...form, [name]:value})
      }

      //formulário de candidatura
      function onSubmitForm(event) {
        event.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText ,
            profession: form.profession,
            country: form.country
        };
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips/${form.id}/apply`
        RequestPost(url, body)
        //troca a mensagem para sucesso
        setMessageForm(1)
      }

    return(
    <Div>
        {/* imagem de fundo */}
        <Img src={"https://s1.1zoom.me/big3/157/374615-blackangel.jpg"}/>
        <DivChild> 
            <form onSubmit={onSubmitForm} className={classes.root} >
            <div>
            <Title><Span>Candidato</Span>EX</Title>
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
                type= "number"
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
                type= "text"
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
                type= "text"
                onChange={handleInput}
                name={"profession"}
                required
                />
            </div>

            <DivSelect>
                <Country 
                name="country"
                onchange={handleInput}
                required/>
                <TripIdSelect 
                name="trip"
                onchange={handleInput}
                required/>
            </DivSelect>

            <ButtonSubinsc>inscrever-se</ButtonSubinsc>
            {/* //mensagem de sucesso */}
            {messageForm === 1 ? <p>Seja bem vindo a viagem, tripulante!</p> : ""} 
        </form>
    </DivChild> 
</Div>
    )
}