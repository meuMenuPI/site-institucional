import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';

function Inputs(){
    return (
        <Form className="form-content w-100">
        <Form.Control size="lg" className="input_cad_usuario" type="name" placeholder="Nome" />
        <Form.Control size="lg" className="input_cad_usuario" type="name" placeholder="Sobrenome" />
        <Form.Control size="lg" className="input_cad_usuario" type="number" placeholder="CPF" />
        <Button className="btn_cad_usuario">Avançar</Button>
        </Form>
    );
}

export default Inputs;