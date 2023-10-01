import React from 'react'
import './Footer.css'
import { Container ,Col , Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import LanguageIcon from '@mui/icons-material/Language';
const Footer = () => {
  return (
    <>
    <Container fluid className='footer'>
        <Row  >
        <Col className='footer1' lg={3} md={6} sm={12}>
            <Link to='/' className='footerLink'><h4>Get to Know Us</h4></Link>
            <Link  to='/' className='footerLink'><p  className='d'>About Amazon</p></Link>
            <Link to='/'  className='footerLink'><p>Careers</p></Link>
            <Link to='/'  className='footerLink'><p>Amazon Science</p></Link>
        </Col>

        <Col className='footer1' lg={3} md={6} sm={12}>
        <Link  to='/' className='footerLink'> <h4>Shop with Us</h4></Link>
        <Link  to='/' className='footerLink'> <p className='d'>Your Account</p></Link>
        <Link  to='/' className='footerLink'><p>Your Orders</p></Link>
        <Link  to='/' className='footerLink'><p>Your Addresses</p></Link>
        <Link to='/'className='footerLink'><p>Your Lists</p></Link>
        </Col>

        <Col className='footer1' lg={3} md={6} sm={12}>
        <Link to='/'className='footerLink'> <h4>Make Money with Us</h4></Link>
        <Link to='/'className='footerLink'> <p >Advertise Your Products</p></Link>
        <Link to='/'className='footerLink'><p>Sell on Amazon</p></Link>
        <Link to='/'className='footerLink'><p>Fulfillment by Amazon</p></Link>
        </Col>

        <Col className='footer1' lg={3} md={6} sm={12}>
        <Link to='/'className='footerLink'><h4>Let Us Help You</h4></Link>
        <Link to='/'className='footerLink'> <p className='d'>Help</p></Link>
        <Link to='/'className='footerLink'> <p>Shipping & Delivery</p></Link>
        <Link to='/'className='footerLink'> <p>Returns & Replacements</p></Link>
        <Link to='/'className='footerLink'><p>Amazon App Download</p></Link>
        </Col>

        <div className='hr'> <hr/></div>
        <div className='footer2'>
            <div>
            <Link to='/'><img src='/Images/logo.png' alt ='' /></Link>
        </div>
        <div className='b'>
            <button  className='button1'> <LanguageIcon fontSize={"5px"}  /> English</button>
            <button  className='button2'>Egypt</button>
        </div>
        </div>
        </Row>
    </Container>
    </>
  )
}

export default Footer