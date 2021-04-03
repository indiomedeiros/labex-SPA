import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DetailsScreen from "../../Components/DetailsScreen/DetailsScreen";
import { Div, DivChild, H1, Img, Span } from "./styledListTripsPage";

export default function ListTripPage() {
  const [listTrip, setListTrip] = useState();

  const onDelete = (event) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips/${event.target.id}`
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getListTrip();
  }, []);

  const getListTrip = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips"
      )
      .then((response) => {
        const list = response.data.trips.map((trip) => {
          return (
            <DetailsScreen
              id={trip.id}
              name={trip.name}
              date={trip.date}
              description={trip.description}
              planet={trip.planet}
              durationInDays={trip.durationInDays + " dias"}
              onclick={onDelete}
            />
          );
        });
        setListTrip(list);
      })
      .catch((error) => {});
  };
  return (
    <Div>
      <Img
        src={
          "https://s1.1zoom.me/big3/461/Star_Citizen_Starship_536691_3034x1809.jpg"
        }
      />
      <DivChild>
        <H1>
          <Span>Lista de viagens</Span>EX
        </H1>
        {listTrip}
      </DivChild>
    </Div>
  );
}
