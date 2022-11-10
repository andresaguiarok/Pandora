import React, {useEffect} from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {listaProductos} from "./data.js";
import ItemDetail from "./ItemDetail";
import Fondo from "../images/fondo-slime1.jpg";

export default  function ItemDetailContainer (){

    const { iditem } = useParams();

    const [producto , setProducto] = useState({});

    useEffect(() => {
        let productoItem = new Promise((res, rej) => {    
            setTimeout(() => {
                res(listaProductos.find((item) => item.id === iditem));
            }, 2000);
        })
    
        productoItem.then((res) => {
            setProducto(res);
        })
        .catch((e) =>{
            console.log("Error!!");
        })
        .finally(() => {
            console.log("Proceso exitoso");
        })
    }, [iditem]);

  return (
    <Container fluid className="p-4" style={{
        backgroundImage: `url(${Fondo})`, 
        backgroundSize: "cover",
        color: "white",}}>

        <ItemDetail producto={producto} />

    </Container>
  )
}