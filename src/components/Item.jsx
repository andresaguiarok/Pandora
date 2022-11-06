import React from 'react'
import { Card } from 'react-bootstrap'

export default function Item({ producto }) {
  return (
    <div style={{margin:"20px"}}>
    <Card style={{ width: '20rem', color:"black"}}>
        <Card.Header> {`${producto.accesorio} de ${producto.categoria}`} </Card.Header>
        <Card.Img src= {producto.img} style={{height:"300px"}} />
        <Card.Body>
            <Card.Title> {producto.nombre} </Card.Title>
            <Card.Text>$ {producto.precio} </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}
