import React from "react";
import { Col, Container , Row } from "react-bootstrap";
import Product2 from "./Product2";

function ProductData2() {
  return (
    <>
          <Container fluid >
          <Row >
          <Col lg={3} md={6} sm={6} >
            <Product2
              id="12321341"
              title="Prime deals | Sports wear | Top brands"
              price={50}
              rating={4}
              image="/Images/ProductData/ProductData2/1.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={6} >
            <Product2
              id="12321341"
              title="Prime deals | Travelpags | Free returns"
              price={200}
              rating={3}
              image="/Images/ProductData/ProductData2/2.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={6} >
            <Product2
              id="12321341"
              title="School & Office supplies | Wide selection "
              price={310}
              rating={5}
              image="/Images/ProductData/ProductData2/3.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={6} >
            <Product2
              id="12321341"
              title="Prime deals | Gaming | Buy with installments*"
              price={90}
              rating={5}
              image="/Images/ProductData/ProductData2/4.jpg"
            />
          </Col>
          </Row>
          </Container>
</>
);
}
export default ProductData2;