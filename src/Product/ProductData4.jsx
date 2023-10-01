import React from "react";
import { Col, Container , Row } from "react-bootstrap";
import Product4 from "./Product4";

function ProductData4() {
  return (
    <>
          <Container fluid >
          <Row>
            <Col lg={3} md={6} sm={12}>
              <Product4
                id="12321341"
                title="Prime deals | Furniture | Top brands"
                price={50}
                rating={4}
                image="/Images/ProductData/ProductData4/1.jpg"
              />
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Product4
                id="12321341"
                title="Prime deals | Decoration | Free returns"
                price={200}
                rating={3}
                image="/Images/ProductData/ProductData4/2.jpg"
              />
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Product4
                id="12321341"
                title="Home & Furniture | Wide selection "
                price={310}
                rating={5}
                image="/Images/ProductData/ProductData4/3.jpg"
              />
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Product4
                id="12321341"
                title="Prime deals | Gaming | Buy with installments*"
                price={90}
                rating={5}
                image="/Images/ProductData/ProductData4/4.jpg"
              />
            </Col>
          </Row>
          </Container>
    </>
);
}
export default ProductData4;