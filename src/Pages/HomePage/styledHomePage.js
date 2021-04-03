import styled from 'styled-components'
import {ButtonHome} from '../../Assents/color/ColorItems'

export const Button = styled(ButtonHome)`
  position: absolute;
  font-size: 1.5em;
  margin: auto;
  padding: 10px 30px;
  margin-left: 115px;
  margin-top: 60px;
`;
export const H1 = styled.h1`
  position: absolute;
  font-size: 2.2em;
  font-weight: lighter;
  margin: auto;
  margin-top: -200px;
  padding: 10px 30px;
  color: white;
  margin-left: 80px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Img = styled.img`
  width: 100vw;
  height: 95vh;
  filter: brightness(0.4);
  transform: scaleX(-1);
`;
