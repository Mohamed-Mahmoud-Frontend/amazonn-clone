import React, { useContext }  from 'react'
import CartContext from "../CartContext";
import {Link} from 'react-router-dom'
import {Button , Col} from "react-bootstrap";
import './CheckOut.css'
const CheckOutProducts = () => {
    const { items   } = useContext(CartContext);
    const { deleteAll } = useContext(CartContext);
  return (
    <>
        {items.map((item) => (
            <Col  key={item.id} lg="12" md="12" sm="12">
            <div className='CheckOutProducts'>
                <div>
                <img className='CheckOutProducts_img' src={item.images} alt=""  />
                </div>
                <div className='CheckOutProducts_info'>
                <p className='CheckOutProducts_title'>{item.title}</p> 
                <p className='CheckOutProducts_price'>{item.price}</p> 
                <p>⭐⭐⭐⭐</p>
                </div>
            </div>
            </Col>
        ))}
        <div >
                <Link> <Button className='shoppingButton'onClick={() => deleteAll(items.id)}>Empty Cart</Button></Link></div>
                <Link to='/signin'> <Button className='shoppingButton3'>Contuie Shopping</Button></Link>

    </>
  )
}

export default CheckOutProducts