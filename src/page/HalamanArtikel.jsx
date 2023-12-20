import React from 'react'
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
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from '../components/SearchBar'
import { useState } from 'react';
// font awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBookmark, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'

function HalamanArtikel () {
  
    const location = useLocation();
    const userObject = location.state && location.state.userObject;

  return (
    <div>
        <NavbarSesudahLogin/>
        <Container className="mb-3">
            <Row>
                <Col md={12}>
                    <Image className="mb-5" style={{marginTop: '80px'}} src="/komponen-gambar/jumbotron-artikel.png" fluid />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4} className="mb-3">
                    <Card style={{maxWidth:'18rem'}}>
                        <Card.Img variant="top" src="/komponen-gambar/mie-aceh.png" />
                        <Card.Subtitle className="mb-1 ms-2 mt-2 text-oranye">24 September 2023</Card.Subtitle>
                        <Card.Body>
                        {/* <h5><a className="link-pindah-kedetail" href="halamanDetailArtikel">Mie Aceh</a></h5> */}
                            <Card.Title>
                            <Link to="../halamanDetailArtikel" state={{ userObject }} className="nav-link fw-bold me-4">
        Mie Aceh
      </Link>
                            </Card.Title>
                            <Card.Text className="card-text-scroll">
                                Mie Aceh merupakan hidangan mie pedas khas Indonesia yang berasal dari Aceh, disajikan dengan kuah kental berbumbu......
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="bg-oranye text-light">
                            <Card.Text className="bg-oranye text-light">
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faUser} /> Admin
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faHeart} /> 10 Suka
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <Card style={{maxWidth:'18rem'}}>
                        <Card.Img variant="top" src="/komponen-gambar/mie-aceh.png" />
                        <Card.Subtitle className="mb-1 ms-2 mt-2 text-oranye">24 September 2023</Card.Subtitle>
                        <Card.Body>
                            <Card.Title><h5><a className="link-pindah-kedetail" href="halamanDetailArtikel">Mie Aceh</a></h5></Card.Title>
                            <Card.Text className="card-text-scroll">
                                Mie Aceh merupakan hidangan mie pedas khas Indonesia yang berasal dari Aceh, disajikan dengan kuah kental berbumbu......
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="bg-oranye text-light">
                            <Card.Text className="bg-oranye text-light">
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faUser} /> Admin
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faHeart} /> 10 Suka
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <Card style={{maxWidth:'18rem'}}>
                        <Card.Img variant="top" src="/komponen-gambar/mie-aceh.png" />
                        <Card.Subtitle className="mb-1 ms-2 mt-2 text-oranye">24 September 2023</Card.Subtitle>
                        <Card.Body>
                            <Card.Title><h5><a className="link-pindah-kedetail" href="halamanDetailArtikel">Mie Aceh</a></h5></Card.Title>
                            <Card.Text className="card-text-scroll">
                                Mie Aceh merupakan hidangan mie pedas khas Indonesia yang berasal dari Aceh, disajikan dengan kuah kental berbumbu......
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="bg-oranye text-light">
                            <Card.Text className="bg-oranye text-light">
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faUser} /> Admin
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faHeart} /> 10 Suka
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <Card style={{maxWidth:'18rem'}}>
                        <Card.Img variant="top" src="/komponen-gambar/mie-aceh.png" />
                        <Card.Subtitle className="mb-1 ms-2 mt-2 text-oranye">24 September 2023</Card.Subtitle>
                        <Card.Body>
                            <Card.Title><h5><a className="link-pindah-kedetail" href="halamanDetailArtikel">Mie Aceh</a></h5></Card.Title>
                            <Card.Text className="card-text-scroll">
                                Mie Aceh merupakan hidangan mie pedas khas Indonesia yang berasal dari Aceh, disajikan dengan kuah kental berbumbu......
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="bg-oranye text-light">
                            <Card.Text className="bg-oranye text-light">
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faUser} /> Admin
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faHeart} /> 10 Suka
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <Card style={{maxWidth:'18rem'}}>
                        <Card.Img variant="top" src="/komponen-gambar/mie-aceh.png" />
                        <Card.Subtitle className="mb-1 ms-2 mt-2 text-oranye">24 September 2023</Card.Subtitle>
                        <Card.Body>
                            <Card.Title><h5><a className="link-pindah-kedetail" href="halamanDetailArtikel">Mie Aceh</a></h5></Card.Title>
                            <Card.Text className="card-text-scroll">
                                Mie Aceh merupakan hidangan mie pedas khas Indonesia yang berasal dari Aceh, disajikan dengan kuah kental berbumbu......
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="bg-oranye text-light">
                            <Card.Text className="bg-oranye text-light">
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faUser} /> Admin
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faHeart} /> 10 Suka
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <Card style={{maxWidth:'18rem'}}>
                        <Card.Img variant="top" src="/komponen-gambar/mie-aceh.png" />
                        <Card.Subtitle className="mb-1 ms-2 mt-2 text-oranye">24 September 2023</Card.Subtitle>
                        <Card.Body>
                            <Card.Title><h5><a className="link-pindah-kedetail" href="halamanDetailArtikel">Mie Aceh</a></h5></Card.Title>
                            <Card.Text className="card-text-scroll">
                                Mie Aceh merupakan hidangan mie pedas khas Indonesia yang berasal dari Aceh, disajikan dengan kuah kental berbumbu......
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="bg-oranye text-light">
                            <Card.Text className="bg-oranye text-light">
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faUser} /> Admin
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faHeart} /> 10 Suka
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="m-auto" md={2}>
                    <Paginasi/>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default HalamanArtikel