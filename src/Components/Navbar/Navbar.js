import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {Button, ButtonsNavigation} from '../../Assents/color/ColorItems'

const Header = styled.header `

    display:flex;
    box-shadow: 0.5px 0.2px 0.5px gray;
    width:100vw;
    height:5vh;
    background-color: white;
    align-items: center;
    justify-content: space-between;
`
const ButtonNav = styled(ButtonsNavigation) `
    outline: none;
    font-size: 1.2em;
    font-weight:lighter;
    margin-right:30px;
`

const ButtonLabex = styled.button `
    font-weight:lighter;
    color: #a5b1d9;
    margin-left: 30px;
    background-color:white;
    margin-left: 100px;
    border: none;
    font-size: 1.8em;
    outline:none;
    :hover{
        cursor: pointer;
    }
`
const ButtonCreate  = styled(Button) `
    font-size: 1.2em;
    padding:5px;
    margin-right: 10px;
    width:130px;
`
const Span = styled.span `
    color: #102b89;
`
export default function Navbar(){
    const history = useHistory()
    const token = localStorage.getItem("token")

    const goToPage = (path) => {
        history.push(path)
        
    }
    const logout = (path) => {
            localStorage.removeItem("token")
            history.push(path)
    }
    

    return(
        <Header>
            <div>
             <ButtonLabex onClick={() => {goToPage("/")}}> <Span>LAB</Span>EX </ButtonLabex>
            </div>
            <div>
                
                <ButtonNav onClick={() => {goToPage("/")}}>Home</ButtonNav>
                <ButtonNav onClick={() => {goToPage("/trips/list")}}>Viagens</ButtonNav>
                <ButtonNav onClick={() => {goToPage("/application-form")}}>Candidate-se</ButtonNav> 
                {!token ? <ButtonNav onClick={() => {goToPage("/login")}}>Login</ButtonNav>: <ButtonNav name="sair" onClick={() => {logout("/login")}}>Sair</ButtonNav>}
                {token ? <ButtonCreate onClick={() => {goToPage("/trips/create")}}>Criar viagem</ButtonCreate > : ""}
            </div>
        </Header>
    )
}