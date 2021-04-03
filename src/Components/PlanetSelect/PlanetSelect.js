import React from 'react'
import { Select } from './styledPlanetSelect'

export default function PlanetSelect(props) {
    return (

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