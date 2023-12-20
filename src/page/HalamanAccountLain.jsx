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
import Pagination from 'react-bootstrap/Pagination';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//form
import Form from 'react-bootstrap/Form';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCirclePlus, faBookmark, faUser, faClock, faUtensils, faHeart, faStar, faEye, faCamera } from '@fortawesome/free-solid-svg-icons'

const HalamanAccountLain = () => {
  return (
    <div>
      <NavbarSesudahLogin/>
      <Container>
        <Row className="mb-5">
            <Col md={12} style={{marginTop: '80px'}}>
                <Card className="bg-light">
                  <Card.Img src="/komponen-gambar/jumbotron-profile.png" alt="Card image"/>
                  <Card.ImgOverlay>
                    <Row className="d-flex align-items-center">
                      <Col xs={3} md={3}>
                        <Image className="w-100" src="/komponen-gambar/pp-account-lain.png" style={{border:'6px solid #E98649', borderRadius:'100%'}} fluid/>
                      </Col>
                      <Col xs={5} md={3}>
                      <Card.Text className="bg-hitam-opacity text-center text-light fs-4 fw-bold rounded p-1">Rose Blackpink</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} className="ms-auto">
                        <Button className="bg-oranye w-75 p1 fw-medium text-light" variant="outline-warning">
                          <FontAwesomeIcon className="me-1" icon={faHeartCirclePlus} />
                          Ikuti
                        </Button>
                      </Col>
                    </Row>
                  </Card.ImgOverlay>
                  <Card.Body className="bg-cream">
                    <Card.Text>
                      <span className="fw-medium text-dark me-3">43 Resep</span>
                      <span className="fw-medium text-dark me-3">20 Mengikuti</span>
                      <span className="fw-medium text-dark ">29 Pengikut</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="mb-5 bg-cream rounded p-2">
          <Col md={12}><h5>Postingan Resep</h5></Col>
          <Row className="m-auto">
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p className="fw-bold">
                          <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                          Rose Blackpink
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="/komponen-gambar/gulai-ikan.png" />
                <Card.Body>
                  <Card.Title className="text-center"><h5>Gulai ayam</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                      </Col>
                      <Col>
                        <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                          <FontAwesomeIcon icon={faStar} /> 4.9
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faEye} /> 150</p>
                      </Col>
                      <Col>
                        <Col className="bg-oranye rounded ms-auto text-light w-50 p-1 text-center">
                          <FontAwesomeIcon icon={faBookmark} />
                        </Col>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p className="fw-bold">
                          <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                          Rose Blackpink
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="/komponen-gambar/ikan-bakar.png" />
                <Card.Body>
                  <Card.Title className="text-center"><h5>Ikan Bakar</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                      </Col>
                      <Col>
                        <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                          <FontAwesomeIcon icon={faStar} /> 4.9
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faEye} /> 150</p>
                      </Col>
                      <Col>
                        <Col className="bg-oranye rounded ms-auto text-light w-50 p-1 text-center">
                          <FontAwesomeIcon icon={faBookmark} />
                        </Col>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p className="fw-bold">
                          <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                          Rose Blackpink
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="/komponen-gambar/mie-aceh.png" />
                <Card.Body>
                  <Card.Title className="text-center"><h5>Mie Aceh</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                      </Col>
                      <Col>
                        <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                          <FontAwesomeIcon icon={faStar} /> 4.9
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faEye} /> 150</p>
                      </Col>
                      <Col>
                        <Col className="bg-oranye rounded ms-auto text-light w-50 p-1 text-center">
                          <FontAwesomeIcon icon={faBookmark} />
                        </Col>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p className="fw-bold">
                          <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                          Rose Blackpink
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="/komponen-gambar/rendang.png" />
                <Card.Body>
                  <Card.Title className="text-center"><h5>Rendang</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                      </Col>
                      <Col>
                        <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                          <FontAwesomeIcon icon={faStar} /> 4.9
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faEye} /> 150</p>
                      </Col>
                      <Col>
                        <Col className="bg-oranye rounded ms-auto text-light w-50 p-1 text-center">
                          <FontAwesomeIcon icon={faBookmark} />
                        </Col>
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
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default HalamanAccountLain