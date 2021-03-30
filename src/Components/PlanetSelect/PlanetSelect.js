import React from 'react'
import styled from 'styled-components'

const Select = styled.select `
    width: 100px;
    height: 30px;
    border: 0.5px solid #a1a1a1;
    color:#a1a1a1;
    outline: none;
`

export default function PlanetSelect(props) {
    return (

        //seletor de planetas
        <Select defaultValue onChange={props.onchange} name={props.name}>
            <option value={"planeta"}>Planeta</option>
            <option value={"Mercúrio"}>Mercúrio</option>
            <option value={"Vênus"}>Vênus</option>
            <option value={"Terra"}>Terra</option>
            <option value={"Marte"}>Marte</option>
            <option value={"Júpiter"}>Júpiter</option>
            <option value={"Saturno"}>Saturno</option>
            <option value={"Urano"}>Urano</option>
            <option value={"Netuno"}>Netuno</option>
            <option value={"Plutão"}>Plutão</option>
       </Select>
    )
}