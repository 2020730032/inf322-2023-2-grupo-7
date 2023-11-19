import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Denuncia = ({ titulo, descripcion, timestamp }) => {
  return (
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text><small className="text-muted">Fecha: {timestamp}</small></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Denuncia;
