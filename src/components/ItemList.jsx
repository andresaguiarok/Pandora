import React from "react";
import Item from "./Item";
import Spinner from 'react-bootstrap/Spinner';
import "./styles/contenedor.css";
import { Container } from "react-bootstrap";

function ItemList ({ items }) {
    
    return (
        <Container >
            
            {!items.length && 
            <div className="contenedorLoad">
                <Spinner animation="border" variant="secondary" className="load" />
            </div>}

            <div className="contenedorCard">
            {items.map((item) => {             
                return (
                    <div key={item.id}>
                        <Item producto={item} />
                    </div>
                )
            })}
            </div>
            
        </Container>
    );
}

export default ItemList;