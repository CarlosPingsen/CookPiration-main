import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SearchBar from './SearchBar';
const NavbarSebelumLogin = (props) => {
  return (
    <div>
        <Navbar expand="md" className="bg-putih fixed-top nav-underline">
        <Container fluid>
        <Navbar.Brand href="#home">
            <img alt="" src="/logo.png" width="50" className="d-inline-block align-top"/>{' '}
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar/>
            <Nav className="m-auto">
                <Nav.Link className="fw-bold me-4" href="/">Beranda</Nav.Link>
                <Nav.Link className="fw-bold me-4" href="halamanResep">Resep</Nav.Link>
                <Nav.Link className="fw-bold me-4" href="halamanArtikel">Artikel</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link className="btn btn-login w-100 bg-oranye ps-3 pe-3 text-light" href="login">Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavbarSebelumLogin