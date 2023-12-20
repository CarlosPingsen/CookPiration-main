import React, { useState, useEffect } from 'react';
import NavbarSebelumLogin from '../components/NavbarSebelumLogin'
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
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookmark, faUser, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import CardResep from '../components/cardresep';
import { CardFooter } from 'react-bootstrap';


const HalamanSebelumLogin = () => {
  const reseps = [
    {
      id: 1,
      gambar: "/komponen-gambar/gulai-ikan.png",
      nama: "Gulai Ayam",
      jam: "25 Menit",
      mata: "10",
      rating: "3"
    }
    // },
    // {
    //   id: 2,
    //   gambar: "/komponen-gambar/ikan-bakar.png",
    //   nama: "Ikan Bakar",
    //   jam: "30 Menit",
    //   mata: "100",
    //   rating: "4"
    // },
    // {
    //   id: 3,
    //   gambar: "/komponen-gambar/mie-aceh.png",
    //   nama: "Mie Aceh",
    //   jam: "10 Menit",
    //   mata: "2",
    //   rating: "5"
    // },
    // {
    //   id: 4,
    //   gambar: "/komponen-gambar/rendang.png",
    //   nama: "Rendang",
    //   jam: "5 Jam",
    //   mata: "20",
    //   rating: "5"
    // }
  ]
  useEffect(() => {
    localStorage.setItem('reseps', JSON.stringify(reseps));
  }, [reseps]);

  // Fungsi untuk menyimpan data resep tertentu ke state reseps
  const simpanResepKeState = (id) => {
    // Temukan resep dengan ID tertentu
    const resepYangDisimpan = reseps.find((resep) => resep.id === id);

    // Periksa apakah resep sudah ada di state reseps
    const resepSudahAda = reseps.some((resep) => resep.id === id);

    // Jika belum ada, tambahkan ke state reseps
    if (!resepSudahAda) {
      setReseps((prevReseps) => [...prevReseps, resepYangDisimpan]);
      alert('Resep berhasil disimpan!');
    } else {
      alert('Resep sudah ada di dalam daftar simpan.');
    }
  };
  return (
    <div>
      <NavbarSebelumLogin/>
      <Image className="mb-5" style={{marginTop: '80px'}} src="/komponen-gambar/Frame 99.png" fluid />
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <Image src="/komponen-gambar/group-salad.png" fluid />
          </Col>
          <Col md={6}>
            <h1 style={{marginTop : '30%'}} >Ciptakan kenangan indah dengan setiap <div className="text-oranye">
              hidangan</div> yang Anda buat. <br /> <br />  <a className="btn w-50 bg-oranye text-light m-auto" href="HalamanPencarian" >Lihat Semua Resep <FontAwesomeIcon icon={faArrowRight} /></a>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}><h5>Top Resep Mingguan</h5></Col>
          <Row className="m-auto">
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/gulai-ikan.png" />
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
                  <Card.Title className="text-center"><h5>Gulai ayam</h5></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                      </Col>
                      <Col>
                        <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
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
                        <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                      </Col>
                      <Col>
                        <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
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
                        <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                      </Col>
                      <Col>
                        <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
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
                        <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                      </Col>
                      <Col>
                        <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
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
        </Row>
        <Row className="mb-4 p-4" style={{backgroundColor: '#FDF2E9'}}>
          <Col md={12}>
            <h2 className="text-center text-oranye mt-4">Masak Bahan Yang Kamu Punya</h2>
          </Col>
          <Col className="m-auto" md={10}>
            <Row className="mt-5">
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/ikan.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Ikan</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/ayam.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Ayam</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/b-merah.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Bawang Merah</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/telur.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Telur</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/tomat.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Tomat</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/kentang.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Kentang</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/jamur.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Jamur</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/tahu.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Tahu</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/b-putih.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Bawang Putih</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/tempe.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Tempe</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/jagung.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Jagung</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/cabe merah.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Cabe Merah</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="m-auto">
            <a className="btn w-100 bg-oranye text-light" href="">Cari Resep <FontAwesomeIcon icon={faArrowRight} /></a>
          </Col>
        </Row>
        <Row>
          <Col md={12}><h5>Bagi Resep</h5></Col>
          <Row className="m-auto">
            {reseps.map((resep)=>
              <CardResep key={resep.id}>
                <CardResep.head></CardResep.head>
                <CardResep.body image={resep.gambar} title={resep.nama} rating={resep.rating} jam={resep.jam} liat={resep.mata}></CardResep.body>
                <Col>
                    </Col>
              </CardResep>
            )}
        </Row>
        </Row>
        <Row>
          <Col md={12}><h5>Artikel Makanan</h5></Col>
          <Row>
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
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md={6} className="p-5">
            <img className="img-fluid mt-5 ms-5" src="/komponen-gambar/unduh aplikasi.png" alt="" />
          </Col>
          <Col md={6}>
            <img className="img-fluid ms-auto" src="/komponen-gambar/mockup hp.png" alt="" />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default HalamanSebelumLogin