import React from "react";
import "./styles/itemlist.css";
import Diamante from "../images/diamante1.gif";
import Fondo from "../images/fondo-slime.jpg";
import { Container } from "react-bootstrap";


function ItemListContainer ({greeting}){

    return (
        <Container fluid className="p-1" style={{
            backgroundImage: `url(${Fondo})`, backgroundSize: "cover", color: "white",}}>
            <div className="text-center">
                <div className="h2" style={{background: "rgba(0, 0, 0, 0.418)", height:"40%" }}>{greeting}</div>
                <img src={Diamante} alt="diamante" className="img-fluid" />
                <h1 style={{color:"black"}}>En proceso..</h1>    
            </div>
        </Container>
    );
}

export default ItemListContainer;