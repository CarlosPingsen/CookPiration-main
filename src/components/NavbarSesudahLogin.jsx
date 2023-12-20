import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBar from '../components/SearchBar'
import '../index.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function NavbarSesudahLogin  ()  {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const userObject = location.state && location.state.userObject;
  return (
    <div>
        <Navbar expand="md" className="bg-putih fixed-top nav-underline">
        {userObject && (
        <Container fluid>
        <Navbar.Brand href="#home">
            <img alt="" src="/logo.png" width="50" className="d-inline-block align-top"/>{' '}
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar/>
            <Nav className="m-auto">
            <Link to="../HalamanUtamaSesudahLogin" state={{ userObject }} className="nav-link fw-bold me-4">
        Beranda
      </Link>
                {/* <Nav.Link className="fw-bold me-4" href="HalamanUtamaSesudahLogin">Beranda</Nav.Link> */}
                {/* <Nav.Link className="fw-bold me-4" href="halamanResep">Resep</Nav.Link> */}
                <Link to="../HalamanResep" state={{ userObject }} className="nav-link fw-bold me-4">
        Resep
      </Link>
      <Link to="../halamanArtikel" state={{ userObject }} className="nav-link fw-bold me-4">
        Arikel
      </Link>
                {/* <Nav.Link className="fw-bold me-4" href="halamanArtikel">Artikel</Nav.Link> */}
            </Nav>
            <Nav className="ms-auto">
                <NavDropdown id="nav-dropdown-dark-example"
                title={
                    <>
                        <img style={{borderRadius: "50px", width: "50px"}}src={userObject.picture} alt="" /> {userObject.name}
                    </>
                }
                menuVariant="light" className='w-25'
                >
                    <NavDropdown.Item as={Link} to="../HalamanProfile" state={{ userObject }}>
        Profile
      </NavDropdown.Item>

                    <NavDropdown.Item href="" onClick={handleShow}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
              )}
        </Navbar>
        {/* modal */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Waduh, Kamu yakin mau logout?</Modal.Body>
            <Modal.Footer>
            <Button className="bg-oranye text-light" variant="outline-warning" onClick={handleClose} href="login">
                Ya
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Tidak
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default NavbarSesudahLogin