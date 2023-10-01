import React from 'react'
import './Footer2.css'
import {Container , Col , Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
const Footer2 = () => {
return (
    <>
    <Container fluid className='footer3'>
        <Row>
        <Col className='footer11' >
            <Link to='/'className='footerLink'><h4>Get to Know Us</h4></Link>
            <Link to='/'className='footerLink'><p className='d'>About Amazon</p></Link>
            <Link to='/'className='footerLink'><p className='d1'>Sell on Amazon</p></Link>

        </Col>

        <Col className='footer11' >
        <Link to='/'className='footerLink'><h4>Shop with Us</h4></Link>
        <Link to='/'className='footerLink'><p className='d'>Your Account</p></Link>
        </Col>

        <Col className='footer11' >
        <Link to='/'className='footerLink'><h4>Make Money with Us</h4></Link>
        <Link to='/'className='footerLink'><p className='d'>Advertise Your Products</p></Link>
        </Col>

        <Col className='footer11' >
        <Link to='/'className='footerLink'><h4>Let Us Help You</h4></Link>
        <Link to='/'className='footerLink'><p className='d'>Help</p></Link>
        <Link to='/'className='footerLink'><p className='d'>Shipping & Delivery</p></Link>
        </Col>

        <Col className='footer11' >
        <Link to='/'className='footerLink'><h4>Let Us Help You</h4></Link>
        <Link to='/'className='footerLink'><p className='d'>Help</p></Link>
        <Link to='/'className='footerLink'> <p className='d'>Shipping & Delivery</p></Link>
        </Col>

        </Row>
    </Container>

    <Container fluid className='footer30'>
        <Row>
        <Col className='footer11' >
        <Link to='/'className='footerLink'><h4>Let Us Help You</h4></Link>
        <Link to='/'className='footerLink'><p className='d'>Help</p></Link>
        </Col>

        <Col className='footer11' >
            <Link to='/'className='footerLink'><h4>Get to Know Us</h4></Link>
            <Link to='/'className='footerLink'><p className='d'>About Amazon</p></Link>
            <Link to='/'className='footerLink'><p className='d1'>Sell on Amazon</p></Link>
        </Col>

        <Col className='footer11' >
            <Link to='/'className='footerLink'><h4>Shop with Us</h4></Link>
            <Link to='/'className='footerLink'><p className='d'>Your Account</p></Link>
        </Col>

        <Col className='footer11' >
            <Link to='/'className='footerLink'><h4>Let Us Help You</h4></Link>
            <Link to='/'className='footerLink'><p className='d'>Help</p></Link>
            <Link to='/'className='footerLink'><p className='d'>Shipping & Delivery</p></Link>
        </Col>

        <Col className='footer11' >
            <Link to='/'className='footerLink'><h4>Make Money with Us</h4></Link>
            <Link to='/'className='footerLink'><p  className='d'>Advertise Your Products</p></Link>
        </Col>
        </Row>
    </Container>
    <div className='lastFooter'>
        <p>Conditions of Use & Sale Privacy NoticeInterest-Based Ads</p>
        <p>©1996–2022, Amazon.com, Inc. or its affiliates</p>
    </div>
    </>
)
}

export default Footer2