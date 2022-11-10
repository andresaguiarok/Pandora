import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import "./styles/contenedor.css";

function ItemDetail({ producto }) {
  return (
    <Container className="text-center cardDetail">
        {producto.id ? (
          <Card style={{ width:'50rem', color:"black" }} className="bg-light">
          <Card.Header as="h5"> {`${producto.accesorio} de ${producto.categoria}`} </Card.Header>
          <Row>
            <Col>
              <Card.Img variant="top" src={producto.img} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title>
                <u className="h3"> {producto.nombre}</u> 
              </Card.Title>
              <Card.Text className='p-2'>
                <Row>
                  <Col>
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                  </Col>
                  <Col>
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                  </Col>
                </Row>
              </Card.Text>
              <Card.Text className='h4'>$ {producto.precio} </Card.Text>
              <Card.Text>Cantidad de stock ({producto.stock} unidades) </Card.Text>
              <Card.Text style={{color:"green"}} className="lead">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
                  Envio gratis a todo el pais
              </Card.Text>
              <Button>Agregar al carrito</Button>
              </Card.Body>
            </Col>
        </Row> 
        </Card>
            ) : (
                <div className="contenedorLoad">
                    <Spinner animation="border" variant="secondary" className="load" />
                </div>
            )}
    </Container>
  )
}

export default ItemDetail