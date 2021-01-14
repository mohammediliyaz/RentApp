import React from "react";
import { Div, P } from "./style";

export default function InfoCard(props) {
  return (
    <Div>
      <P>{props.information}</P>
      <p>{props.join}</p>
    </Div>
  );
}
