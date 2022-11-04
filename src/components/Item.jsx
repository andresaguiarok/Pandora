import React from "react";
import Card from 'react-bootstrap/Card';

function Item () {
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Categoria</Card.Header>
                <Card.Img variant="top" src="../images/pandora.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text style={{color:"black"}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;