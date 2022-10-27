import React from "react";
import "./styles/itemlist.css";
import Diamante from "../images/diamante1.gif";
import Fondo from "../images/fondo-slime.jpg";

export default function ItemListContainer({greeting}){
    return (
        <div style={{
            backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height:"60vw", color: "white",}}>
            <div className="text-center">
                <div className="container h1" style={{background: "rgba(0, 0, 0, 0.418)"}}>{greeting}</div>
            <img src={Diamante} alt="diamante" className="img-fluid" />
            <h1>En proceso...</h1>
            </div>
        </div>
    );
}