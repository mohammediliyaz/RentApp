import React, { useState } from "react";
import Misc from "../../Components/Misc/Misc";
import InfoCard from "../../Components/InfoCard/InfoCard";
import Payment from "../../Components/payment/Payment";
import { Div, Buttonbox, P } from "./style";
import { Button } from "../../Components/Button/style";
import dataset from "../../dataset";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [join, setjoin] = useState("");

  const Button1 = () => {
    setName(dataset.Home1.Name);
    setInfo(dataset.Home1.phoneNumber);
    setjoin(dataset.Home1.joinedDate);
  };
  const Button2 = () => {
    setName(dataset.Home2.Name);
    setInfo(dataset.Home2.phoneNumber);
  };
  const Button3 = () => {
    setName(dataset.Home3.Name);
    setInfo(dataset.Home3.phoneNumber);
  };
  const Button4 = () => {
    setName(dataset.Home4.Name);
    setInfo(dataset.Home4.phoneNumber);
  };

  return (
    <div>
      <P style={{ fontSize: "20vm" }}>Tenant Name : {name}</P>
      <Buttonbox>
        <Button buttonnumber="Home1" onClick={() => Button1()}>
          Home1
        </Button>
        <Button buttonnumber="Home1" onClick={() => Button2()}>
          Home2
        </Button>
        <Button buttonnumber="Home1" onClick={() => Button3()}>
          Home3
        </Button>
        <Button buttonnumber="Home1" onClick={() => Button4()}>
          Home4
        </Button>
      </Buttonbox>
      <Div>
        <InfoCard information={info} join={join} />
        <Misc />
        <Payment />
      </Div>
    </div>
  );
}
