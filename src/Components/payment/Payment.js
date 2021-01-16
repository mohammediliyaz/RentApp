import React, { useState } from "react";
import Calendar from "react-calendar";
import { Div } from "./style";
import "../../../node_modules/react-calendar/dist/Calendar.css";

export default function Payment() {
  const [value, onChange] = useState(new Date());
  return (
    <Div>
      <Calendar onChange={onChange} value={value} />
    </Div>
  );
}
