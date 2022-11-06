import React from "react";
import Item from "./Item";
import Spinner from 'react-bootstrap/Spinner';
import "./styles/contenedor.css";

function ItemList ({ items }) {
    
    return (
        <div >
            
            {!items.length && 
            <div className="contenedorLoad">
                <Spinner animation="grow" variant="danger" className="load" />
                <Spinner animation="grow" variant="danger" className="load" />
            </div>}

            <div className="contenedorCard ">
            {items.map((item) =>{             
                return (
                    <div key={item.id}>
                        <Item producto={item} />
                    </div>
                )
            })}
            </div>
            
        </div>
    );
}

export default ItemList;