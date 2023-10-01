import React from 'react'
import './Loginpage.css'
import {Link} from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {Col} from 'react-bootstrap'
import Header from '../NavbarAndHeader/Header'
import Navbar from '../NavbarAndHeader/Navbar'
import Navbar2 from '../NavbarAndHeader/Navbar2'
const Loginpage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ziuu36l', 'template_5rqi42w', form.current, 't8DwNgBD8Nh04BlOg')
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
    <Col lg={12}  md={12} sm={12}>
    <Link className='amazon' to='/'><h1 className='amazon'>amazon</h1></Link>
      <form className='form' ref={form} onSubmit={sendEmail} >
        <h2>Sign in</h2>
        <div>
        <label>Email or mobile phone number</label>
        </div>
        <div>
          <input type="email" name="user_email" />
        </div>
        <Link className='www' to='/'><button>Continue</button></Link>
        <h5>By signing in, you agree to Amazon's <Link to='/' className='link'> Conditions of Use</Link> and <Link to='/'className='link'>Privacy Notice.</Link></h5>
        <div className='help'>
          <div  className='icon'>
        <PlayArrowIcon />
        </div>
        <div>
        <Link to='/' className='helpLink'>Need Help?</Link>
        </div>
        </div>
      </form>
      <div className='formFooter'>
      <h5>New to Amazon?</h5>
      <Link to='/signup'><button>Create your Amazon account</button> </Link>
      <div >
      <Link to='/'className='formFooterLink'>Conditions of Use</Link>
      <Link to='/'className='formFooterLink'>Privacy Notice</Link>
      <Link to='/'className='formFooterLink'>Help</Link>
      </div>
      <h4>©1996–2022, Amazon.com, Inc. or its affiliates</h4>
      </div>
      </Col>
    </>
  )
}

export default Loginpage