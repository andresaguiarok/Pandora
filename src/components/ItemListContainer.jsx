import React from "react";
import Fondo from "../images/fondo-slime1.jpg";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import {listaProductos} from "./data.js";
import {useParams} from "react-router-dom";

function ItemListContainer (){

    const { idcategoria } = useParams();

    const [prod, setProd] = useState([]);

   useEffect(() => {
    let dateList = new Promise((res, rej) => {    
        setTimeout(() => {
            res(listaProductos)
        }, 3000);
    })

    dateList.then((res) => {
        if (idcategoria){
            setProd(res.filter((item) => item.accesorio === idcategoria));
        }else {
            setProd(res)
        }
    })
    .catch((e) =>{
        console.log("Error!!");
    })
    .finally(() => {
        console.log("Proceso exitoso");
    })
}, [idcategoria]) 


    return (
        <Container fluid className="p-2" style={{
            backgroundImage: `url(${Fondo})`, 
            backgroundSize: "cover",
            color: "white"}}>

            <div className="text-center">
                <ItemList items={prod} idcategoria={idcategoria} />  
            </div>
        </Container>
    );
}

export default ItemListContainer;