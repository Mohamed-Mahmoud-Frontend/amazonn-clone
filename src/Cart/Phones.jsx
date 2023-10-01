import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CartContext from "../CartContext";
import './Phones.css'
function Phones({ title , images , price }) {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="proud-header">
      <div className="proud-body">
      <Link><img src={images} alt="" /></Link>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <p>⭐⭐⭐⭐</p>
      <div style={{ display: "flex", fontSize: "18PX" }}>
        <sub>EGP</sub>
        <span>
          <b style={{ fontSize: "28px", fontFamily: "sans-serif", marginRight:"15px" }}>
            {price}
          </b>
          </span>
          <sub>00</sub>
        </div>
        <div>
          <p>20% discount for VF Cash. Use code VFWF20<br/>Get it<br/>Saturday, December 3 - Monday, December 5<br/>EGP 21.00 shipping</p>
        </div> 
        <div>
          <Button className="proud-footer" variant="primary" onClick={() => addToCart( images , title ,  price)}>
          Add to Cart
          </Button>
        </div>
        </div>
    </>
  );
}

export default Phones;
