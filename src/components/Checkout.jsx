import React, { useContext, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { cartContext } from "./CartContext";
import "./styles/carrito.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

function Checkout() {

    const { carrito , totalPrecio } = useContext(cartContext);
    console.log(carrito);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [provincia, setProvincia] = useState("");
    const [cpostal, setCpostal] = useState("");

    function comprar () {
        const pedido = {
            comprador: { nombre, apellido, email, direccion, ciudad, provincia, cpostal },
            carrito: carrito,
            total: totalPrecio(),
        };
        console.log("Quiere comprar", pedido);
        const db = getFirestore();
        const pedidos = collection(db, "pedidos");
        addDoc(pedidos, pedido).then((pedidoRealizado) => {
            console.log(pedidoRealizado.id);
        });
        let timerInterval
        Swal.fire({
            title: 'Procesando tus datos...',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
        })
    }

  return (
    <Container fluid className="p-2 contenedorTodo">           
        <Form className="p-4">
                <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Nombre :</Form.Label>
                      <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Apellido :</Form.Label>
                      <Form.Control type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </Form.Group>                    
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Direccion :</Form.Label>
                    <Form.Control placeholder="Av.Rivadavia 2043" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Ciudad:</Form.Label>
                      <Form.Control value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Provincia :</Form.Label>
                      <Form.Control value={provincia} onChange={(e) => setProvincia(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip" value={cpostal} onChange={(e) => setCpostal(e.target.value)}>
                      <Form.Label>Cp:</Form.Label>
                      <Form.Control />
                    </Form.Group>
                </Row>
        </Form>
        <Table striped bordered responsive="xs" className='text-center tablaBorder' variant="dark">
        <thead>
            <tr>
                <th colSpan={4}>TU PEDIDO</th>
            </tr>
        </thead>
          <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>NOMBRE</th>
              <th>CANT.</th>
              <th>PRECIO</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => {
              return (
                <tr key={item.id}>
                  <td> 
                    <img src={item.imgUrl} alt={item.nombre} style={{height:"100px", width:"100px"}}/>
                  </td>
                  <td> {item.nombre} </td>
                  <td> {item.cantidad} </td>
                  <td>$ {item.precio} </td>
                </tr>
              )
            })}    
            <tr>
              <th colSpan={2}>TOTAL A PAGAR:</th>
              <th colSpan={2}> $ {totalPrecio()} </th>
            </tr>
          </tbody>
        </Table>   
        <Container className="text-center">
            <Button variant="dark" type="button" onClick={comprar} value="Comprar!!">Realizar pedido</Button>
        </Container>
    </Container>
  )
}

export default Checkout