import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {SidebarData} from './SidebarData';
import {Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    const [sidebar , setSidebar] =useState(false)
    const showSidebar = () => setSidebar (!sidebar)
return (
    <>
    <Col lg={12} md={12} sm={12}  className="header2">
    <div className="navbar2" >
    <Link className="menu_barss" >
    <MenuIcon className='menu_bars-menuIcon' onClick={showSidebar} />  </Link><Link onClick={showSidebar}  className='all'>ALL</Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
    <ul className='nav-menu-atems' >
        <li className='navbar-toggle' onClick={showSidebar} >
                <Link className='menu-bars' >
            <CloseIcon />
                </Link>
        </li>
        {SidebarData.map((item , index ) => {
            return (
                <li key ={index} className={item.cName}   >
                <Link to ={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
                </li>
            )}
        )}
    </ul>


    </nav>
    
    <div className='header_links' >
    <Link to ="/MobilePhones" className='headerLinksOption' >Today'sDeals</Link>
    <Link to ="/MobilePhones" className='headerLinksOption'>Prime</Link>
    <Link to ="/MobilePhones"  className='headerLinksOption'>MobilePhones</Link>
    <Link to ="/MobilePhones" className='headerLinksOption'>Electronics</Link>
    <Link to ="/MobilePhones" className='headerLinksOption'>Help</Link>
    <Link to ="/MobilePhones" className='headerLinksOption'>Appliances</Link>
    <Link to ="/MobilePhones" className='headerLinksOption'>Fashion</Link>
    <Link to ="/MobilePhones" className='headerLinksOption'>Home</Link>
    <Link to ="/MobilePhones" className='headerLinksOption'>Grocery</Link>
    <Link to ="/signup" className='headerLinksOption'>Contact Us</Link>
    </div>
    <Link to='/'>
    <img className='headerImg' src='/Images/gaming-swm._CB430661085_.jpg' alt=''/>
    </Link>
    </Col>
    </>
  )
}

export default Navbar