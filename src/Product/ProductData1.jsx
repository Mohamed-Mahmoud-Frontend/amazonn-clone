import React from "react";
import { Col, Container , Row } from "react-bootstrap";
import Product from "./Product1";
import "bootstrap/dist/css/bootstrap.min.css";
function ProductData1() {
  return (
    <>
      <Container fluid  >
        <Row>
          <Col lg={3} md={6} sm={12}>
            <Product
              id="12321341"
              title="Camera & accessories"
              price={510}
              rating={4}
              image="/Images/ProductData/ProductData1/1.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Product
              id="12321341"
              title="New arrivals | Bags & Wallets"
              price={150}
              rating={3}
              image="/Images/ProductData/ProductData1/2.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Product
              id="12321341"
              title="Flash Deals "
              price={320}
              rating={5}
              image="/Images/ProductData/ProductData1/3.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Product
              id="12321341"
              title="Deals | Kitchen appliances "
              price={90}
              rating={5}
              image="/Images/ProductData/ProductData1/4.jpg"
            />
          </Col>
        </Row>
      </Container >
    </>
  );
}
export default ProductData1;

