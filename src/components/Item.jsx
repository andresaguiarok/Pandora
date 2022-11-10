import React from 'react'
import { Card, Container } from 'react-bootstrap'
import {Link} from "react-router-dom";

export default function Item({ producto }) {
  return (
    <Container className="m-3">
      <Card style={{ width: '18rem', color:"black"}}>
          <Card.Header> {`${producto.accesorio} de ${producto.categoria}`} </Card.Header>
          <Card.Img src= {producto.img} style={{height:"280px"}} />
          <Card.Body>
              <Card.Title> {producto.nombre} </Card.Title>
              <Card.Text>$ {producto.precio} </Card.Text>
              <Link to={`/item/` + producto.id}>Ver detalles</Link>
          </Card.Body>
      </Card>
    </Container>
  )
}
