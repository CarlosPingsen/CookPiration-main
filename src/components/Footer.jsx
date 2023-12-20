import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className="p-0" style={{backgroundColor: '#46324D'}}>
        <Container fluid>
            <Row className="text-light">
                <h4 className="text-center mt-3">Tentang Kami</h4>
                <Col className="m-auto" md={8}>
                    <p style={{textAlign: 'center'}} className="text-light">
                        CookPiration dibuat untuk membantu para individu, yang ingin mencoba resep makanan baru, 
                        serta yang ingin bereksprerimen makanan, dengan menyediakan berbagai informasi mengenai 
                        makanan, serta menyajikan berbagai 
                        resep makanan, dan artikel yang terus diperbaharui. <br /> <br />
                        Email : cookpiration@gmail.com <br />
                        Whatsapp : +62-833-7763-2261
                    </p>
                </Col>
                <h4 className="text-center mt-3">CookPiration © 2023 All Right Reserved</h4>
            </Row>
            
        </Container>
    </div>
  )
}

export default Footer