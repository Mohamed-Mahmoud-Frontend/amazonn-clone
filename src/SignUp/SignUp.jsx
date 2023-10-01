import React , { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SignUp.css";
import Google from "./Google";
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';
import Header from '../NavbarAndHeader/Header'
import Navbar from '../NavbarAndHeader/Navbar'
import Navbar2 from '../NavbarAndHeader/Navbar2'
export const Loginpage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Thank You For Registration")
    emailjs.sendForm("service_22mtmwk", "template_yzrxg2k" , form.current, "Nvn5kxzKoS5VN4GHn")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <>
      <Header/>
      <Navbar/>
      <Navbar2 />
      <Container >
      <Link className='amazon' to='/'><h1 className='amazon'>amazon</h1></Link>
        <h1 className='contactUs'>Contact Us</h1>
      </Container>
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12} className="left">
          <div>
            <Google/>
          </div>
          <div>
            <h6>
              <span className="span">Frequently Asked Questions about Amazon Egypt Head Office</span> :
              <br />
              <br />
              Q: Where is Amazon Egypt Head Office?
              <br />
              A: Amazon Egypt Head Office is located at: HSBC Bank, Dar Al Salam, Giza Governorate, Egypt
              <br />
              <br />
              Q: What are the coordinates of the Amazon Egypt Head Office?
              <br />
              A: Latitude: 29.977325, Longitude: 31.233837
              <br />
              <br />
              Q: How is Amazon Egypt Head Office rated?
              <br />
              A: Amazon Egypt Head Office has not rated yet on addressschool.com
              <br />
              <br />
              Diar for integrated businesses: GARDENIA COMPOUND, 7TH DISTRICT,
              6-TH OCTOBER, GIZA
              <br />
              <br />
              PHONE:
              <br />
              1-206-266-299
              <br />
              <br />
              EMAIL Address:
              <br />
              <Link  to='/'className="link">
                ir@amazon.com
              </Link>
            </h6>
          </div>
        </Col>

        <Col lg={6} md={6} sm={12} className="form" >
        <form className='form' ref={form} onSubmit={sendEmail}>
        <h2>Create account</h2>
        <div>
        <label> Your Name </label>
        </div>
        <div>
          <input type="text" name="user_name" />
        </div>
        <div>
        <label>Email or mobile phone number</label>
        </div>
        <div>
          <input type="email" name="user_email" />
        </div>
        <div>
        <label>password</label>
        </div>
        <div>
          <input type="password" name="user_password" />
        </div>
        <div className='PasswordsMust'>
        <label className='PasswordsMust'>! Passwords must be at least 6 characters.</label>
        </div>
        <div>
        <label>Re-enter password</label>
        </div>
        <div>
          <input type="password"  />
        </div>
        <Link to='/'><button>Create your Amazon account</button></Link>
        <h5>By creating an accoun, you agree to Amazon's <Link to='/'className='link'> Conditions of Use</Link> and <Link to='/'className='link'>Privacy Notice.</Link></h5>
        <div className='sign'>
        <div>
          <p className='AlreadyHaveAnAccount'>Already have an account?</p>
        </div>
        <div>
        <Link to='/signin' className='signLink'>Sign in</Link>
        </div>
        </div>
      </form>
      <div className='formFooter'>
      <div >
      <Link to='/'className='formFooterLink'>Conditions of Use</Link>
      <Link to='/'className='formFooterLink'>Privacy Notice</Link>
      <Link to='/'className='formFooterLink'>Help</Link>
      </div>
      <h4>©1996–2022, Amazon.com, Inc. or its affiliates</h4>
      </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Loginpage;
