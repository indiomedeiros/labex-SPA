import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {ButtonHome} from '../Styled/ColorItems'

const Button = styled(ButtonHome) `
    
    position: absolute;
    font-size: 1.5em;
    margin: auto;
    padding:10px 30px ;
    margin-left: 115px;
    margin-top: 60px;

`
const H1 = styled.h1 `

    position: absolute;
    font-size: 2.2em;
    font-weight: lighter;
    margin: auto ;
    margin-top: -200px;
    padding:10px 30px ;
    color: white;
    margin-left: 80px;
 
`

const Body = styled.div `
    display: flex;
    justify-content:start;
    align-items: center;
   
`
const Img = styled.img `
  width: 100vw;
  height: 95vh;
  filter: brightness(0.4);
  transform: scaleX(-1); 
`
export default function HomePage(){
    const history = useHistory()

    //muda de página
    const goToPage = (path) => {
        history.push(path)
    }

    return(
        <Body>
            {/* imagem de fundo */}
            <Img src={"https://s1.1zoom.me/b4647/584/Cosmonauts_Surface_of_planets_525931_1920x1080.jpg"}/>
           <H1> 
               Embarque com a LABEX <br/>
               O Universo espera por você!
            </H1>
           <Button onClick={() => {goToPage("/trips/list")}}>Quero ver todas as viagens</Button>
        </Body>
    )
}