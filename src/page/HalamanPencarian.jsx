import React, { useState, useEffect } from 'react';
import NavbarSesudahLogin from '../components/NavbarSesudahLogin'
import Footer from '../components/Footer'
import Paginasi from '../components/Paginasi';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import RecipeCard from "../components/RecipeCard";
import SearchBar from '../components/SearchBar';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
// font awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUser, faBookmark, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'


const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const HalamanPencarian = () => {
  
  const location = useLocation();
  const userObject = location.state && location.state.userObject;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

    useEffect(() => {
        searchRecipes()
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
        searchRecipes();
      }
    
  return (
    <div>
      <div>
        <Navbar expand="md" className="bg-putih fixed-top nav-underline">
        <Container fluid>
        <Navbar.Brand href="#home">
            <img alt="" src="/logo.png" width="50" className="d-inline-block align-top"/>{' '}
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar
            isLoading={isLoading}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}/>
            <Nav className="m-auto">
            <Link to="../HalamanUtamaSesudahLogin" state={{ userObject }} className="nav-link fw-bold me-4">
        Beranda
      </Link>
                {/* <Nav.Link className="fw-bold me-4" href="HalamanUtamaSesudahLogin">Beranda</Nav.Link> */}
                <Nav.Link className="fw-bold me-4" href="halamanResep">Resep</Nav.Link>
                <Nav.Link className="fw-bold me-4" href="halamanArtikel">Artikel</Nav.Link>
            </Nav>
            {userObject && (
            <Nav className="ms-auto">
                <NavDropdown id="nav-dropdown-dark-example"
                title={
                    <>
                        <img style={{borderRadius: "50px", width: "50px"}} src={userObject.picture} alt="" /> {userObject.name}
                    </>
                }
                menuVariant="light" className='w-25'
                >
                    <NavDropdown.Item href="halamanProfile">user</NavDropdown.Item>
                    <NavDropdown.Item href="" onClick={handleShow}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            )}
            </Navbar.Collapse>
        </Container>
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
        <Container>
            <Row style={{marginTop:'80px'}}>
                <Col md={12}><h5>Cari makanan mu</h5></Col>
                <Row className="m-auto">
                    <Row xs={6} md={3} className="mb-4">
                    {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
                    </Row>
                </Row>
                <Row>
                    <Col className="m-auto" md={2}>
                        <Paginasi/>
                    </Col>
                </Row>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default HalamanPencarian