import React from "react";
import { Container } from "react-bootstrap";
import "./styles/footer.css";

export default function Footer(){
    return (

        <Container fluid style={{background:"#0b0b0b", color:"white", height:"auto"}} >
            <div className="text-center p-2">
                <h1>Pandora®</h1> 
                <p>2022 © Pandora</p>
            </div>               
        </Container>
    );
}