import React, { useEffect, useState } from 'react';
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
import { useLocation } from 'react-router-dom';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHeartCirclePlus, faBookmark, faUser, faClock, faUtensils, faHeart, faStar, faEye, faCamera } from '@fortawesome/free-solid-svg-icons'
function HalamanProfile () {
  
  const location = useLocation();
  const userObject = location.state && location.state.userObject;
// Menyiapkan state untuk reseps
const [rasaps, setReseps] = useState([]);

// Efek samping untuk memuat data dari localStorage saat komponen dimuat
useEffect(() => {
  // Membaca data dari localStorage
  const storedReseps = localStorage.getItem('rasaps');

  // Jika data ada, perbarui state reseps
  if (storedReseps) {
    setReseps(JSON.parse(storedReseps));
  }
}, []);

  // Fungsi untuk menghapus resep berdasarkan ID
  const hapusResep = (id) => {
    // Filter reseps untuk menghapus resep dengan ID tertentu
    const resepsSetelahHapus = reseps.filter((rasaps) => rasaps.id !== id);

    // Perbarui state reseps dan localStorage
    setReseps(resepsSetelahHapus);
    localStorage.setItem('rasaps', JSON.stringify(resepsSetelahHapus));
  };
  return (
    <div>
      <NavbarSesudahLogin/>
      <Container>
        <Row className="mb-5">
        {userObject && (
            <Col md={12} style={{marginTop: '80px'}}>
                <Card className="bg-light">
                  <Card.Img style={{width: '100%', height:'5%' }} src={userObject.picture} alt="Card image"/>
                  <Card.ImgOverlay>
                    <Row className="d-flex align-items-center">
                      <Col xs={3} md={3}>
                        <Image className="w-100" src={userObject.picture} style={{border:'6px solid #E98649', borderRadius:'100%'}} fluid/>
                      </Col>
                      <Col xs={5} md={3}>
                      <Card.Text className="bg-hitam-opacity text-center text-light fs-4 fw-bold rounded p-1">{userObject.name}</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} className="ms-auto">
                        <Button className="bg-oranye p1 fw-medium text-light" variant="outline-warning">
                          <FontAwesomeIcon className="me-1" icon={faCamera} />
                          Foto Sampul
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
                  )}
        </Row>
        
        <Row className="mb-5">
          <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
            <Tab variant="text-oranye" eventKey="home" title="Postingan Resep">
              <Row className="mb-4">
                <Col md={12}><h5>Postingan Resep</h5></Col>
                <Row className="m-auto">
                  <Col xs={6} md={3} className="mb-4">
                    <Card>
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
                              <Col className="bg-danger rounded ms-auto text-light w-50 p-1 text-center">
                                <FontAwesomeIcon icon={faTrash} />
                              </Col>
                            </Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={6} md={3} className="mb-4">
                    <Card>
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
                              <Col className="bg-danger rounded ms-auto text-light w-50 p-1 text-center">
                                <FontAwesomeIcon icon={faTrash} />
                              </Col>
                            </Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={6} md={3} className="mb-4">
                    <Card>
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
                              <Col className="bg-danger rounded ms-auto text-light w-50 p-1 text-center">
                                <FontAwesomeIcon icon={faTrash} />
                              </Col>
                            </Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={6} md={3} className="mb-4">
                    <Card>
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
                              <Col className="bg-danger rounded ms-auto text-light w-50 p-1 text-center">
                                <FontAwesomeIcon icon={faTrash} />
                              </Col>
                            </Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Paginasi/>
                  </Col>
                </Row>
              </Row>
            </Tab>
            <Tab variant="text-oranye" eventKey="profile" title="Resep Tersimpan">
            <Row className="mb-4">
                <Col md={12}><h5>Resep Tersimpan</h5></Col>
                <Row className="m-auto">
                <div>
      {rasaps.map((rasap) => (
        <Col xs={6} md={3} className="mb-4" key={rasap.id}>
          <Card>
            <Card.Body>
              <Card.Text>
                                  <Row>
                                  <Row>
                                    <span className="fw-bold">
                                      <img style={{ width: '40px' }} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" />
                                      <a className="link-pindah-kedetail" href="halamanAccountLain">
                                        RoseBlackpink
                                      </a>
                                    </span>
                                  </Row>
                                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={rasap.gambar} />
            <Card.Body>
              <Card.Title className="text-center">
                <h5>{rasap.namaResep}</h5>
              </Card.Title>
              <Card.Text>
                <Row>
                  <Col>
                    <FontAwesomeIcon icon={faClock} /> {rasap.jam}
                  </Col>
                  <Col>
                    <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                      <FontAwesomeIcon icon={faStar} /> {rasap.rating}
                    </Col>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FontAwesomeIcon icon={faEye} /> {rasap.mata}
                  </Col>
                  <Col>
                    <Col className="bg-danger rounded ms-auto text-light w-50 p-1 text-center">
                    <Button variant="outline-warning" size="sm" onClick={() => hapusResep(rasaps.id)}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
                    </Col>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
                </Row>
                <Row>
                  <Col md={12}>
                    <Paginasi/>
                  </Col>
                </Row>
              </Row>
            </Tab>
            <Tab variant="text-oranye" eventKey="contact" title="Pengaturan Akun">
              <Row className="bg-cream rounded">
                <h3>Pengaturan Akun</h3>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Nama Depan</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Nama Belakang</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Jenis Kelamin</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value=""></option>
                                    <option value="">Laki-Laki</option>
                                    <option value="">Perempuan</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Makanan Favorit</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Col className="ms-auto" md={1}>
                            <Button href="" type="submit" variant="outline-warning" className="text-light" style={{backgroundColor: '#E98649'}}>Simpan</Button>
                        </Col>
                    </Form.Group>
                </Form>
              </Row>
            </Tab>
          </Tabs>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default HalamanProfile