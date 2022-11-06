import React from "react";
import Fondo from "../images/fondo-slime1.jpg";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import {listaProductos} from "./data.js";

function ItemListContainer (){

    const [prod, setProd] = useState([]);

    useEffect(() => {
        let dateList = new Promise((res, rej) => {    
            setTimeout(() => {
                res(listaProductos)
            }, 3000);
        })

        dateList.then((res) => {
            setProd(res)
        })
        .catch((e) =>{
            console.log("Error!!");
        })
        .finally(() => {
            console.log("Proceso exitoso");
        })
   }, []) 

    return (
        <Container fluid className="p-1" style={{
            backgroundImage: `url(${Fondo})`, 
            backgroundSize: "cover",
            color: "white"}}>

            <div className="text-center">
                <ItemList items={prod} />  
            </div>
        </Container>
    );
}

export default ItemListContainer;