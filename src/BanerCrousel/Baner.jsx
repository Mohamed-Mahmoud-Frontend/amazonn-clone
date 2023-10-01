import React from 'react'
import './Banar.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Baner = () => {
return (
    <>
    <Carousel className='img-banner1  ' >
    <Carousel.Item>
        <img
        className=" img-banner" style={{width:"100%"}}
        src="/Images/carousel/1.jpg"
        alt="First slide"/>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
      
      <Carousel.Item>
      <img style={{width:"100%"}}
      src='/Images/carousel/2.jpg' 
      alt="slide2"/>
      <Carousel.Caption>
      </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
        style={{width:"100%"}}
        src="/Images/carousel/3.jpg"
        alt=" slide3"
        />
      <Carousel.Caption>
      </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
        style={{width:"100%"}}
        src="/Images/carousel/4.jpg"
        alt=" slide4"
        />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
      style={{width:"100%"}}
      src="/Images/carousel/5.jpg"
      alt=" slide5"
      />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
    <Carousel.Item>
      <img
      style={{width:"100%"}}
      src="/Images/carousel/6.jpg"
      alt=" slide6"
      />
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
      style={{width:"100%"}}
      src="/Images/carousel/7.jpg"
      alt=" slide7"
      />
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>

    </Carousel>

    </>
)}


export default Baner