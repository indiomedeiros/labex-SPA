import styled from 'styled-components'
import {ButtonsListTrip} from '../../Assents/color/ColorItems'

export const DivTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: 1fr 4fr;
  box-shadow: 1px 1px 2px gray;
  width: 1080px;
  margin: auto;
  margin-bottom: 20px;
  background-color: white;
`;
export const H1 = styled.p`
  font-size: 1.1em;
  color: white;
  background-color: #102b89;
  border-bottom: 1px solid black;
  padding: 0px 10px;
  margin: 0;
`;
export const P = styled.p`
  padding: 0px 10px;
  margin: 0;
`;
export const Button = styled(ButtonsListTrip)`
  margin: auto;
  grid-column: 6/6;
  grid-row: 2;
  height: 30px;
`;
