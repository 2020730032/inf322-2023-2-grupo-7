import React from 'react';
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import { FaHome, FaInfo, FaCogs, FaEnvelope, FaBlog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, onLogout }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <Image
                        src="https://www.nunoa.cl/wp-content/uploads/2022/05/IconoPresencial-Online-Telefonico-02.png"
                        alt=""
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />
                    <span className="ml-2">MuniDenuncias</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/inicio" className="nav-item-box">
                            <FaHome /> Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/acerca" className="nav-item-box">
                            <FaInfo /> Acerca de
                        </Nav.Link>
                        <NavDropdown title={<span><FaCogs /> Servicios</span>} id="basic-nav-dropdown" className="nav-item-box">
                            <NavDropdown.Item as={Link} to="/action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contacto" className="nav-item-box">
                            <FaEnvelope /> Contacto
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blog" className="nav-item-box">
                            <FaBlog /> Blog
                        </Nav.Link>
                        {isLoggedIn ? (
                            <Nav.Link as={Link} to="/" onClick={onLogout} className="nav-item-box">
                                Cerrar sesión
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/login" className="nav-item-box">
                                Iniciar sesión
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavBar;

