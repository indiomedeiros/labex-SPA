import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Button } from "../../Assents/color/ColorItems";

export const Img = styled.img`
  width: 100vw;
  height: 95vh;
`;
export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 300,
      background: "white",
    },
  },
}));

export const Div = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const DivChild = styled.div`
  position: absolute;
  border: 1px solid white;
  color: #a5b1d9;
  width: 400px;
  text-align: center;
  padding-bottom: 100px;
  background-color: white;
  border-radius: 30px;
  margin-left: -66vw;
`;
export const ButtonSubinsc = styled(Button)`
  font-size: 1.2em;
  padding: 5px;
  width: 200px;
  margin-top: 60px;
`;
export const DivSelect = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
`;
export const Span = styled.span`
  color: #102b89;
  font-weight: lighter;
`;
