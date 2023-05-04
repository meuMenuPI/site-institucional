import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';

function Inputs(props){
    return (
        <Form.Control size="lg" className="input_cad_usuario" type="name" placeholder={props.nome} />
    );
}

export default Inputs;