import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin, showForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación hardcoreada (reemplaza esto con la lógica del servidor en una aplicación real)
        if (email === 'ian.cooper@usm.cl' && password === '12345') {
            onLogin();
            navigate('/');
        } else {
            setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div style={{ display: showForm ? 'block' : 'none' }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Correo:</Form.Label>
                                <Form.Control type="email" value={email} onChange={handleEmailChange} />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Iniciar sesión
                            </Button>

                            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;