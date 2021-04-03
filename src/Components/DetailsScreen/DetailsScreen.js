import React from 'react'
import { DivTitle, H1, P, Button } from './styledDetailsScreen'





export default function DetailsScreen (props) {
    const token = localStorage.getItem("token")
    return (
        <div >
            <DivTitle>
                <H1>Nome da viagem</H1>
                <H1>Descrição</H1>
                <H1>Planeta</H1>
                <H1>Data</H1>
                <H1>Duração</H1>
                {token? <H1>Adm</H1>: <H1></H1>}
           
                <P>{props.name}</P>
                <P>{props.description}</P>
                <P>{props.planet}</P>
                <P>{props.date}</P>
                <P>{props.durationInDays}</P>
                
                {token ? <Button id={props.id} onClick={props.onclick}>Deletar</Button> : ""}

            </DivTitle>

        </div>
    )
}