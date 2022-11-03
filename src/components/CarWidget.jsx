import React from "react";
import Bolsita from "../iconos/bolsita/bag.svg";

export default function CarWidget() {
  return (
    <div>
      <div className="btn">
        <img src={Bolsita} alt="icono de bag" className="img-fluid" />
      </div>
    </div>
  );
}
