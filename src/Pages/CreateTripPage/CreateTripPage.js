import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import { Button, Title } from '../Styled/ColorItems';
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import PlanetSelect from '../Selects/PlanetSelect';
import { RequestPost } from '../../Requests/Requests';



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

const Img = styled.img `
  width: 100vw;
  height: 95vh;
  
`
const DivSelect = styled.div `
    display:flex;
    width:300px;
    align-items: center;
    justify-content:space-between;
    margin-left: 50px;
`

const ButtonCreate = styled(Button) `
    font-size: 1.2em;
    padding:5px;
    width:200px;
    margin-top:60px;
`
const Span = styled.span `
    color: #102b89;
    font-weight:lighter;
`

export default function CreateTripPage(){
  const [messageForm, setMessageForm] =useState (0)
  const [form, setForm] = useState()

  //protege a página
  useProtectedPage()
  const classes = useStyles();


//controla inputs
  const handleInput = (event) => {
    const {value, name} = event.target
    setForm({...form, [name]: value})
    setMessageForm(0)
  }

  //cria a viagem
  const createTrip = (event) => {
    event.preventDefault()
    

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }
    
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips`
    const header = {headers: {auth: localStorage.getItem("token")}}
    RequestPost(url, body, header)

    //muda a mensagem para sucesso
    setMessageForm(1)
  }

    
    return(
      <Div>
        {/* imagem de fundo */}
       <Img src={"https://s1.1zoom.me/big3/260/Alien_Covenant_Starship_Ships_532194_4000x2000.jpg"}/>
       <DivChild>  
          <form onSubmit={createTrip} className={classes.root} >
          <div>
          <Title><Span>Criar Viagem</Span>EX</Title>
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
              type= "date"
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
              type= "text"
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
              type= "number"
              onChange={handleInput}
              name={"durationInDays"}
              required
              />
          </div>

          <DivSelect>
            <PlanetSelect
                name="planet"
                onchange={handleInput}
                required
              />
          </DivSelect>

          <ButtonCreate>Criar viagem</ButtonCreate>
          {messageForm === 1 ? <p>Seja bem vindo a viagem, tripulante!</p> : ""}
      </form>
  </DivChild>
</Div>
    )
}