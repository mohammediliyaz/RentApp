import React from "react";
import { Div, P } from "./style";

export default function InfoCard(props) {
  return (
    <Div>
      <h3 style={{ margin: "10px" }}>Informtion</h3>
      <P>ph: {props.home.phoneNumber}</P>
      <p>joined date: {props.home.joinedDate}</p>
    </Div>
  );
}
