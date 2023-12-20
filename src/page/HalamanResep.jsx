import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import NavbarSesudahLogin from '../components/NavbarSesudahLogin'
import Footer from '../components/Footer'
import Paginasi from '../components/Paginasi';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg'
import CardImgOverlay from 'react-bootstrap/CardImgOverlay'
import CardLink from 'react-bootstrap/CardLink'
import CardSubtitle from 'react-bootstrap/CardSubtitle'
import CardText from 'react-bootstrap/CardText'
import CardTitle from 'react-bootstrap/CardTitle'
import Stack from 'react-bootstrap/Stack';
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from '../components/SearchBar'
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookmark, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import HalamanDetailResep from './HalamanDetailResep';

function HalamanResep  () {
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
                        <img  style={{borderRadius: "50px", width: "50px"}} src={userObject.picture} alt="" /> {userObject.name}
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
      <Container>
        <Image className="mt-5" src="./komponen-gambar/jumbotron-halaman-resep.png" fluid />
        <Row className="mt-3 mb-3">
          <Col md={12}><h5>Resep Sarapan</h5></Col>
          <Row className="m-auto">
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="bottom" src="/komponen-gambar/sup jagung.png" />
                <Card.ImgOverlay className="text-center ms-auto" style={{height:'50%'}}>
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center">
                    <h5>
                    <Link to="/HalamanDetailResep" state={{ userObject }} className="nav-link fw-bold me-4">
        Soup Krim Jamur
      </Link>
                      {/* <a className="link-pindah-kedetail" href="halamanDetailResep">Soup Krim Jamur</a> */}
                      {/* <Card.Link href="./halamanDetailResep">Card Link</Card.Link> */}
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/ikan-bakar.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Ikan Bakar</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/nasi-kuning.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Nasi Kuning</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/soto-bogor.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Soto Bogor</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
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
        </Row>
        <Row className="mb-3">
          <Col md={12}><h5>Resep Makan Siang</h5></Col>
          <Row className="m-auto">
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/sup jagung.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5><a className="link-pindah-kedetail" href="halamanDetailResep">Soup Krim Jamur</a></h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/ikan-bakar.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Ikan Bakar</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/nasi-kuning.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Nasi Kuning</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/soto-bogor.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Soto Bogor</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
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
        </Row>
        <Row className="mb-3">
          <Col md={12}><h5>Resep Makan Malam</h5></Col>
          <Row className="m-auto">
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/sup jagung.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5><a className="link-pindah-kedetail" href="halamanDetailResep">Soup Krim Jamur</a></h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/ikan-bakar.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Ikan Bakar</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/nasi-kuning.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Nasi Kuning</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/soto-bogor.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Soto Bogor</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
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
        </Row>
        <Row className="mb-3">
          <Col md={12}><h5>Resep Rendah Kalori</h5></Col>
          <Row className="m-auto">
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/sup jagung.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5><a className="link-pindah-kedetail" href="halamanDetailResep">Soup Krim Jamur</a></h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/ikan-bakar.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Ikan Bakar</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/nasi-kuning.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Nasi Kuning</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/soto-bogor.png" />
                <Card.ImgOverlay className="text-center ms-auto">
                  <Row className="m-auto">
                    <Col xs={4} md={2} className="bg-dark ms-auto">
                    <Card.Text className="text-light">
                      <FontAwesomeIcon icon={faBookmark} />
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Soto Bogor</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faClock} /> 25 Menit
                      </Col>
                      <Col>
                        <FontAwesomeIcon icon={faUtensils} /> 2 Porsi
                      </Col>
                    </Row>
                    <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                      <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                    </Col>
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
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default HalamanResep
