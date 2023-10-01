import React, { useContext }from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Nav  } from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "../CartContext";
const Header = () => {
  const { items } = useContext(CartContext);
  return (
    <>
  <Navbar className='header' expand="lg" >
      <div className='nav_left'>
      <div>
      <Link to="/"> <img className='nav_img' src='/Images/logo.png' alt=''/></Link>
      </div>
      <div className="nav_location">
      <i className="fa-sharp fa-solid fa-location-dot"></i>      
      <h5>Egypt</h5>
      </div>
      </div>
      <div className='nav_search'>
        <input  type="search"  className='searchInput'/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <Navbar.Toggle  className='aa' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
      
          <Nav className="nav_options ">
          <div className='navOptionLinks'>
          <Link to="/signup" className='navOptionLinksOne'>Hello</Link>
            <Link to='/signup' className='navOptionLinksTwo'  >Contact Us</Link>
          </div>
          <div className='navOptionLinks'>
            <Link to="/signin" className='navOptionLinksOne'>Hello</Link>
            <Link to='/signin' className='navOptionLinksTwo'  >Sign in</Link>
          </div>
          <div className='navOptionLinks'>
          <Link to="/signin" className='navOptionLinksOne'>Returns</Link>
          <Link  className='navOptionLinksTwo' to="/signin">& Orders</Link>
          </div>
          <div className='navOptionLinks'>
          <Link to="/signin" className='navOptionLinksOne'>Your</Link>
          <Link className='navOptionLinksTwo' to="/signin">Prime</Link>
          </div>
          <div className='cartOption'>
            <Link to='/Checkbox' className='cartOptionOne'>
            <i className="  fa-solid fa-cart-shopping"></i>  
            </Link>
            <Link to='/Checkbox' className='cartCount'>{items.length}</Link>
          </div>
          </Nav>
          </Navbar.Collapse>      
    </Navbar>



  
     
 



    </>
  )
}

export default Header