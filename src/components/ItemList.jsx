import React from "react";
import { Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import Item from "./Item";
import "./styles/contenedor.css";

function ItemList ({ items }) {
    
    return (
        <Container>        
            {items.length ? (
                <div className="contenedorCard">
                {items.map((item) => {             
                    return (
                        <div key={item.id}>
                            <Item producto={item} />
                        </div>
                    )
                })}
                </div>
            ) : (
                <div className="cardDetail" >
                    <div className="contenedorLoad">
                        <Spinner animation="border" variant="secondary" className="load" />
                    </div>
                </div>
            )}    
        </Container>
    );
}

export default ItemList;