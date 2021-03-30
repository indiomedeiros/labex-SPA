import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Select = styled.select `
    width: 100px;
    height: 30px;
    border: 0.5px solid #a1a1a1;
    color:#a1a1a1;
    outline: none;
`
export default function TripIdSelect (props) {
    const [listTrip, setListTrip] = useState()
    
    useEffect(() => {
        getListTrip()
        
    },[])

    //pega a  lista de viagem
    const getListTrip = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips")
        .then(response => {
            
            const list = response.data.trips.map((trip) =>{
                return <option id={trip.id} value={trip.id} name={trip.id}>{trip.name}</option>    
             })
             //guarda a lista mapeada com tags no state/hook
             setListTrip(list)
        })
        .catch(error => {
            
        })
    }
   
    return (
      
            <div>
                {/* seçetor de viagens */}
                <Select onChange={props.onchange} name={props.name}>
                    <option>Viagens</option>
                    { listTrip}
                </Select>
                  
            </div>
    )

}