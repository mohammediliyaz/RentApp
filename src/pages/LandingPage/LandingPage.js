import React, { useState } from "react";
import Misc from "../../Components/Misc/Misc";
import InfoCard from "../../Components/InfoCard/InfoCard";
import Payment from "../../Components/payment/Payment";
import { Div, Buttonbox, P } from "./style";
import { Button } from "../../Components/Button/style";
import dataset from "../../dataset";


export default function LandingPage() {
  const [home, sethome] = useState(dataset[0]);
  console.log("rendered again")
  const Button1 = () => {
    const selected = 0;
    sethome(dataset[selected]);
  };
  const Button2 = () => {
    const selected = 1;
    sethome(dataset[selected]);
  };
  const Button3 = () => {
    const selected = 2;
    sethome(dataset[selected]);
  };
  const Button4 = () => {
    const selected = 3;
    sethome(dataset[selected]);
  };

  return (
    <div>
      <P style={{ fontSize: "20vm" }}>Tenant Name : {home.Name}</P>
      
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
        <InfoCard home={home} />
        <Payment />
        <Misc />
      </Div>
    </div>
  );
}
