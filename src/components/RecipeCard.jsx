import React, { children } from 'react'
import NavbarSebelumLogin from './NavbarSebelumLogin'
import Footer from './Footer'
import Paginasi from './Paginasi';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
import { Navigate, useNavigate } from 'react-router-dom';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookmark, faUser, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'



const RecipeCard   = ({recipe}) =>{
    const {idMeal, strMeal, strCategory, strMealThumb} = recipe;
    let navigate = useNavigate();
    return(
        <Card>
                        <Card.Img  variant="top" src={strMealThumb} />
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
                        <Card.Title className="text-center"><h5>{strMeal}</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
                            </Col>
                            <Col>
                                <p><FontAwesomeIcon icon="fa-solid fa-list" />Katergori    {strCategory}</p>
                            </Col>
                            </Row>
                            <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                            <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                            </Col>
                        </Card.Text>
                        </Card.Body>
        </Card>
    )
};


export default RecipeCard;