import styled from 'styled-components'


//muda botões de criar, candidatar-se e login
export const Button = styled.button `
    border: none;
    background-color:#102b89;
    color: white;
    border-radius: 5px;
    outline: none;
    :hover{
        cursor: pointer;
        background-color:#5C73F2;
    }
`
//muda títulos da página de login, criação e candidatar-se
export const Title = styled.h1 `
    color:#a5b1d9;
`

//muda todos os botões HOME, Viagens, Candidatate-se, Login.
export const ButtonsNavigation = styled.button `
    outline: none;
    font-weight:lighter;
    color: #a5b1d9;
    margin-right:30px;
    background-color: white;
    border: none;
    :hover{
        cursor: pointer;
        color: #102b89;
    }

`
//muda o botão da tela inicial
export const ButtonHome = styled.button `
    background-color:transparent;
    border-radius: 50px;
    border-color: white;
    color: white;
    :hover{
        cursor: pointer;
        color: white;
        background-color: #102b89;
        border-color: transparent;
    }
`
export const ButtonsListTrip = styled.button `
    background-color:red;
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    :hover{
        cursor: pointer;
        background-color:#5C73F2;
        
    }
`