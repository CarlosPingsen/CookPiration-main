import React, { useState } from 'react'
//container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//card
import Card from 'react-bootstrap/Card';
//form
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Prev } from 'react-bootstrap/esm/PageItem';
import  validation from '../server/loginvalidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Register() {
    const [values, setValues] = useState({
        UserID: '',
        NamaDepan: '',
        JenisKelamin: '',
        Email: '',
        NamaBelakang: '',
        MakananFav: '',
        Password: ''
    })

    const incrementAutoNumber = () => {
        setAutoNumber((prevAutoNumber) => prevAutoNumber + 1);
      };
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };    

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios
          .post('http://localhost:5173/register', values)
          .then((res) => {
            console.log("Berhasil");
            // Pindah ke halaman berikutnya jika login berhasil
            navigate('/login');
          })
          .catch((err) => {
            console.log(err);
            // Handle kesalahan login di sini
            if (err.response && err.response.status === 401) {
              // Notifikasi atau penanganan kesalahan login
              setErrors({ login: 'Email atau password salah' });
            } else {
              // Notifikasi atau penanganan kesalahan lainnya
              setErrors({ login: 'Terjadi kesalahan saat login' });
            }
          });
      };
    
  return (
    <div>
        <Container className="mt-5 kartu-login rounded">
            <h3>Daftar</h3>
            <Form action='' onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nama Depan</Form.Label>
                            <Form.Control name='NamaDepan' type="NamaDepan" placeholder="" onChange={handleInput} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nama Belakang</Form.Label>
                            <Form.Control name='NamaBelakang' onChange={handleInput} type="NamaBelakang" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Control type="JenisKelamin" name='JenisKelamin' onChange={handleInput}/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Makanan Favorit</Form.Label>
                            <Form.Control type="MakananFav" placeholder="" name='MakananFav' onChange={handleInput}/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="Email" placeholder="" name='Email' onChange={handleInput} />
                            {errors.Email && <span className='text-danger'>{errors.Email}</span>} 
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" placeholder="" name='Password' onChange={handleInput} />
                            {errors.Password && <span className='text-danger'>{errors.Password}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Col className="ms-auto" md={1}>
                        <Button type="submit" variant="outline-warning" className="text-light" style={{backgroundColor: '#E98649'}}>Daftar</Button>
                    </Col>
                    <Col className="ms-auto me-3" md="3">
                        <p className="text-end">Sudah punya akun? <a className="fw-bold text-dark" href="login">Login</a></p>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    </div>
  )
}

export default Register