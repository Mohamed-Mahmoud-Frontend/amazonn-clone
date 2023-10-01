import React from 'react'
import {Link} from 'react-router-dom'
import "./Product.css"
function Product2({ id , title, image, price, rating }) {
  return (
    <div className='product '>
      <p className='product__info'>{title}</p>
      <img src={image} alt='' />   
    <div> 
      <Link className='buttun' to='/MobilePhones'>See more</Link>
    </div>  
    </div>
  )
}
export default Product2;


