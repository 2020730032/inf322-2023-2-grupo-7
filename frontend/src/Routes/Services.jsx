import React from 'react';
import { Container } from 'react-bootstrap';

const Services = (props) => {
    return (
        <Container className="text-center">
            <h1>Servicio {props.text}</h1>
            <p>Contenido sobre los servicios ofrecidos...</p>
        </Container>
    );
}

export default Services;
