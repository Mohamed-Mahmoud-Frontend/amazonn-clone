import React from "react";
import Phones from "../Cart/Phones";
import Header from '../NavbarAndHeader/Header'
import Navbar from '../NavbarAndHeader/Navbar'
import Navbar2 from '../NavbarAndHeader/Navbar2'
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
function PhonesData () {
  const products = [
    {
      id : 0 ,
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/1.jpg",
      price: "34,976",
    },
    {
      id : 1 ,
      title: "Apple iPhone 13 Pro Max 256GB Blue ",
      images: "/Images/Phones/2.jpg",
      price: "44,976",
    },
    {
      id : 2 ,
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/3.jpg",
      price: "36,976",
    },
    {
      id : 3 ,
      title:"Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/4.jpg",
      price: "17,076",
    },
    {
      id : "4",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/5.jpg",
      price: "36,286",
    },
    {
      id : "6",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/6.jpg",
      price: "34,976",
    },
    {
      id : "7",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/7.jpg",
      price: "29,000",
    },
    {
      id : "8",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/8.jpg",
      price: "24,000",
    },
    {
      id : "9",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images:"/Images/Phones/9.jpg" ,
      price: "18,126",
    },
    {
      id : "10",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/10.jpg",
      price: "13,700",
    },
    {
      id : "11",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images:"/Images/Phones/11.jpg" ,
      price: "32,897",
    },
    {
      id : "12",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/13.jpg",
      price: "27,400",
    },
    {
      id : "13",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/14.jpg",
      price: "32,000",
    },
    {
      id : "14",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/15.jpg",
      price: "29,976",
    },
    {
      id : "15",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images:"/Images/Phones/16.jpg" ,
      price: "10,000",
    },
    {
      id : "16",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/17.jpg",
      price: "23,000",
    },
    {
      id : "17",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/18.jpg",
      price: "38,846",
    },
    {
      id : "18",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "/Images/Phones/19.jpg",
      price: "30,950",
    },
    {
      id : "19",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images:"/Images/Phones/20.jpg" ,
      price: "20,406",
    },
    {
      id : "20",
      title: "Apple iPhone 13 Pro Max 256GB Blue",
    images: "/Images/Phones/21.jpg",
    price: "20,500",
    }

  ];
  return (
    <section> 
    <Header/>
    <Navbar/>
    <Navbar2 />
        <Container>
        <Link className='amazon' to='/'><h1 className='amazon'>amazon</h1></Link>

        <Row>
        {products.map((product, index) => (
            <Col lg='3' md='6' sm='12' key={index} className="proud-header">
            <Phones title={product.title} images={product.images} price={product.price} id={product.id}/>
            </Col>
        ))}
        </Row>
        </Container>
    </section>
  );
};

export default PhonesData;



