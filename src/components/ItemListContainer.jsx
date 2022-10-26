import React from "react";
import "./styles/itemlist.css";
import Diamante from "../images/diamante1.gif";

export default function BodyApp({greeting}){
    return (
        <div className="fondo">
            <div className="text-center">
                <div className="container h1" style={{background: "rgba(0, 0, 0, 0.418)"}}>{greeting}</div>
            <img src={Diamante} alt="diamante" className="img-fluid" />
            <h1>En proceso...</h1>
            </div>
        </div>
    );
}