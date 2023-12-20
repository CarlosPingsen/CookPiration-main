import React, { children } from 'react'
import NavbarSebelumLogin from '../components/NavbarSebelumLogin'
import Footer from '../components/Footer'
import Paginasi from '../components/Paginasi';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookmark, faUser, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'



const CardResep = (props) =>{
    const {children} = props;
    return(
    <Col xs={6} md={3} className="mb-4">
        {children}
    </Col>
    )
};

const head = () => {
    return (
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
        </Card>
    )
}


const body = (props) => {
    const {jam, rating, liat, title, image} = props;
    return (
        <Card>
            <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title className="text-center"><h5>{title}</h5></Card.Title>
                <Card.Text>
                <Row>
                    <Col>
                    <p><FontAwesomeIcon icon={faClock} />{jam}</p>
                    </Col>
                    <Col>
                    <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                        <FontAwesomeIcon icon={faStar} /> {rating}
                    </Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p><FontAwesomeIcon icon={faEye} /> {liat}</p>
                    </Col>
                </Row>
                <Col style={{width: "25px", height: "30px"}} className="bg-oranye rounded ms-auto text-light p-1 text-center">
                <p><FontAwesomeIcon icon={faBookmark} /></p>
                </Col>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


CardResep.head = head;
CardResep.body = body;

export default CardResep;