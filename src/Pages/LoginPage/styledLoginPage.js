import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Button } from "../../Assents/color/ColorItems";

export const Img = styled.img`
  width: 100vw;
  height: 95vh;
  filter: brightness(0.6);
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 200,
      background: "white",
    },
  },
}));

export const Div = styled.div`
  display: flex;
  margin: auto;
  border-radius: 10px;
  flex-direction: column;
  width: 300px;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const ButtonLogin = styled(Button)`
  font-size: 1.2em;
  padding: 5px;
  width: 200px;
  margin-top: 10px;
`;
export const DivChild = styled.div`
  margin-left: -66vw;
  position: absolute;
  border: 1px solid white;
  width: 300px;
  text-align: center;
  padding-bottom: 100px;
  background-color: white;
  border-radius: 30px;
`;
export const Span = styled.span`
  color: #102b89;
  font-weight: lighter;
`;
