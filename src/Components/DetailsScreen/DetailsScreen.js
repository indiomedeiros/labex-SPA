import React from 'react'
import styled from 'styled-components'
import {ButtonsListTrip} from '../../Assents/color/ColorItems'


const DivTitle = styled.div `
    display:grid;
    grid-template-columns: 1fr 2fr 0.5fr 0.5fr 0.5fr 0.5fr;
    grid-template-rows: 1fr 4fr;
    box-shadow: 1px 1px 2px gray;
    width:1080px;
    margin:auto;
    margin-bottom: 20px;
    background-color: white;
    
`
const H1 = styled.p `
    
    font-size:1.1em;
    color:white;
    background-color: #102b89;
    border-bottom: 1px solid black;
    padding: 0px 10px;
    margin: 0;
`
const P = styled.p ` 
    padding: 0px 10px;
    margin: 0;  
    
`
const Button = styled(ButtonsListTrip) `
    margin: auto;
    grid-column: 6/6;
    grid-row: 2;
    height: 30px;
`


export default function DetailsScreen (props) {
    const token = localStorage.getItem("token")
    return (
        <div >
            {/* tela de detalhes da lista de viagem */}
            <DivTitle>
                <H1>Nome da viagem</H1>
                <H1>Descrição</H1>
                <H1>Planeta</H1>
                <H1>Data</H1>
                <H1>Duração</H1>
                {/* se logado como adm, terá função de deletar */}
                {token? <H1>Adm</H1>: <H1></H1>}
           
                <P>{props.name}</P>
                <P>{props.description}</P>
                <P>{props.planet}</P>
                <P>{props.date}</P>
                <P>{props.durationInDays}</P>
                
                {/* se logado como adm, terá função de deletar */}
                {token ? <Button id={props.id} onClick={props.onclick}>Deletar</Button> : ""}

            </DivTitle>

        </div>
    )
}