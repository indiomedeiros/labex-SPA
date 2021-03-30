import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import DetailsScreen from '../../Components/DetailsScreen/DetailsScreen'

const Div = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const Span = styled.span `
    color: white;
    font-weight: lighter;
`
const H1 = styled.h1 `
   
    font-size: 3em;
    text-align: center;
    color:#a5b1d9;

`
const DivChild = styled.div `
    position:absolute;
`
const Img = styled.img `
  filter: brightness(0.6);
  width: 100vw;
  height: 120vh;

`

export default function ListTripPage(){
    const [listTrip, setListTrip] = useState()
   
    //quando logado como adm, deleta a viagem
    const onDelete = (event) => {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips/${event.target.id}`)
        .then(response => {
            window.location.reload()
        })
        .catch(error => {

        })
        
    }


    useEffect(() => {
        //pega a lista de viagens ao iniciar a pagina
        getListTrip()
        
    },[])

    //pega a lista de viagens
    const getListTrip = () => {
        
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips")
        .then(response => {
            
            const list = response.data.trips.map((trip) =>{
                return <DetailsScreen
                    
                    id={trip.id}
                    name= {trip.name}
                    date={trip.date}
                    description={trip.description}
                    planet={trip.planet}
                    durationInDays={trip.durationInDays+" dias"}
                    onclick={onDelete}
                />    
             })
             //guarda a lista de viagens mapeada no state/hook
             setListTrip(list)
        })
        .catch(error => {
    
        })
    }
    return(
        <Div>
            {/* imagem do fundo */}
            <Img src={"https://s1.1zoom.me/big3/461/Star_Citizen_Starship_536691_3034x1809.jpg"}/>
            <DivChild>
                <H1><Span>Lista de viagens</Span>EX</H1>
                {listTrip}
            </DivChild>
        </Div>
    )
}