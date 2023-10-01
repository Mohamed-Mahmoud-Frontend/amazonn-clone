import React from "react";
import { Col, Container , Row  } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './ProjectProductPage.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../NavbarAndHeader/Header'
import Navbar from '../NavbarAndHeader/Navbar'
import Navbar2 from '../NavbarAndHeader/Navbar2'
function ProductTypes() {
return (
    <>
        <Header/>
        <Navbar/>
        <Navbar2 />
        <Container className='productTypeAll' >
        <Link className='amazon' to='/'><h1 className='amazon'>amazon</h1></Link>
        <Row  className='ProductType'>
        <Col lg={3} md={6} sm={12}>
            <Link className='link' to='/Phones'  >
            <img src="/Images/ProductTypePhones/Honor.jpg" alt='' />
            <p className='qqq'>Honor</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link className='link' to='/Phones'  >
            <img src="/Images/ProductTypePhones/huawei.jpg" alt='' />
            <p>huawei</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link className='link' to='/Phones'  >
            <img src="/Images/ProductTypePhones/iphone.jpg" alt='' />
            <p>iphone</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link className='link' to='/Phones'  >
            <img src="/Images/ProductTypePhones/Nokia.jpg" alt='' />
            <p>Nokia</p>
            </Link>
        </Col>
        </Row>

        <Row  className='ProductType'>
        <Col lg={3} md={6} sm={12}>
            <Link className='link' to='/Phones'  >
            <img src="/Images/ProductTypePhones/Oppo.jpg" alt='' />
            <p>Oppo</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link className='link' to='/Phones'  >
            <img src="/Images/ProductTypePhones/Realme.jpg" alt='' />
            <p>Realme</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link className='link' to='/Phones'  >
            <img src="/Images/ProductTypePhones/samsung.jpg" alt='' />
            <p>samsung</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link className='link' to='/Phones'  >
            <img src="/Images/ProductTypePhones/Xiaomi.jpg" alt='' />
            <p>Xiaomi</p>
            </Link>
        </Col>
        </Row>
        </Container >
    </>
);
}
export default ProductTypes;
