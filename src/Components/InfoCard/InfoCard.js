import React from "react";
import { Div, P } from "./style";

export default function InfoCard(props) {
  return (
    <Div>
      <P>ph: {props.home.phoneNumber}</P>
      <p>joined date: {props.home.joinedDate}</p>
    </Div>
  );
}
