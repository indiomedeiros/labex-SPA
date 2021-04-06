import styled from 'styled-components'
import {Button, ButtonsNavigation} from '../../Assents/color/ColorItems'

export const Header = styled.header `

    display:flex;
    box-shadow: 0.5px 0.2px 0.5px gray;
    width:100vw;
    height:5vh;
    background-color: white;
    align-items: center;
    justify-content: space-between;
`
export const ButtonNav = styled(ButtonsNavigation) `
    outline: none;
    font-size: 1.2em;
    font-weight:lighter;
    margin-right:30px;
`

export const ButtonLabex = styled.button `
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
export const ButtonCreate  = styled(Button) `
    font-size: 1.2em;
    padding:5px;
    margin-right: 10px;
    width:130px;
`
export const Span = styled.span `
    color: #102b89;
`